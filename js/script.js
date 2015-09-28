window.addEvent('domready', function(){
	$('menua').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '70px');
		}
	});

	$('menub').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '70px');
		}
	});

	$('menuc').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '70px');
		}
	});

	$('menud').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '70px');
		}
	});

	$('menue').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '70px');
		}
	});

	$('menuf').addEvents({
		'mouseenter': function(){
			this.set('tween', {
				duration: 1000,
				transition: Fx.Transitions.Bounce.easeOut
			}).tween('height', '300px');
		},
		'mouseleave': function(){
			this.set('tween', {}).tween('height', '70px');
		}
	});
});
