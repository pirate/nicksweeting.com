from pyicloud import PyiCloudService

from flask import Flask, jsonify, request, abort


api = PyiCloudService('nikisweeting@gmail.com')

app = Flask(__name__)

@app.route('/devices/list', methods=['GET'])
def device_list():
    devices = []
    for id, device in api.devices.items():
        location_info = device.location()
        device_json = {
            'id': id,
            'name': device.data['name'],
            'model': device.data['deviceDisplayName'],
            'is_desktop': device.data['isMac'],
            'location': {
                'lat': location_info['latitude'],
                'lng': location_info['longitude'],
                'source': location_info['positionType'],
                'accuracy': location_info['horizontalAccuracy'],
                'is_old': location_info['isOld'],
                'is_accurate': not location_info['isInaccurate'],
                'timestamp': location_info['timeStamp'],
            } if location_info else None,
        }
        devices.append(device_json)

    return jsonify({'devices': devices})


@app.route('/devices/alert', methods=['POST'])
def alert():
    device_id = request.form['id']

    subject = request.form.get('subject', '').strip()
    message = request.form.get('message', '').strip()
    sounds = request.form.get('sounds')

    device = api.devices.get(device_id)
    if not device:
        abort(404)

    if not message:
        device.play_sound(subject=subject)
    else:
        device.display_message(subject=subject, message=message, sounds=bool(sounds))
    return jsonify({'success': True, 'errors': []})


if __name__ == '__main__':
    app.run()
