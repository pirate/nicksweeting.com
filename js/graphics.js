/*
 * Game of Life Graphics Module
 *
 * Draws a world on an HTML canvas.
 */

this.GRAPHICS = (function() {
	var cnv,
		ctx,
		cell = {
			width: 0,
			height: 0
		},

		init = function(config) {
			cnv = config.canvas.element;
			cnv.width = config.canvas.width;
			cnv.height = config.canvas.height;
			ctx = cnv.getContext("2d");
			ctx.imageSmoothingEnabled = false;
			cell.width = config.cell.width;
			cell.height = config.cell.height;
		},

		draw = function(cells) {
			var i, p,
				img = ctx.getImageData(0, 0, cnv.width, cnv.height),
				pixels = img.data;

			for (p = 0; p < pixels.length; p += 4) {
				i = (p / 4);
				if (cells[i] < 9) {
					pixels[p + 0] = 0;
					pixels[p + 1] = 0;
					pixels[p + 2] = 0;
					pixels[p + 3] = 255;
				} else {
					pixels[p + 0] = 255;
					pixels[p + 1] = 255;
					pixels[p + 2] = 255;
					pixels[p + 3] = 255;
				}
			}
			img.data = pixels;
			ctx.putImageData(img, 0, 0);
			ctx.translate(2, 2);
		},

		update = function (changed) {
			var i, c,
				img = ctx.getImageData(0, 0, cnv.width, cnv.height),
				pixels = img.data;

			for (i = 0; i < changed.alive.length; i++) {
				c = 4 * changed.alive[i];
				pixels[c + 0] = 0;
				pixels[c + 1] = 0;
				pixels[c + 2] = 0;
				pixels[c + 3] = 255;
			}
			for (i = 0; i < changed.dead.length; i++) {
				c = 4 * changed.dead[i];
				pixels[c + 0] = 255;
				pixels[c + 1] = 255;
				pixels[c + 2] = 255;
				pixels[c + 3] = 255;
			}
			img.data = pixels;
			ctx.putImageData(img, 0, 0);
		};

	// GRAPHICS's public interface
	return {
		init: init,
		update: update,
		draw: draw
	};
}());
