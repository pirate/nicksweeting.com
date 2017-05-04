this.GOL = (function (graphics, grid) {
	var my = {},
		_interval = {
			redraw: null
		},

		_loop = function ()
		{
			graphics.update(grid.next());
		};


	my.init = function (element_id, grid_width, grid_height, cell_width, cell_height, alive_cells)
	{
		var i;

		_interval.redraw = null;

		// init graphics module
		graphics.init({
			canvas: {
				element: document.getElementById(element_id),
				width: grid_width * cell_width,
				height: grid_height * cell_height
			},
			cell: {
				width: cell_width,
				height: cell_height
			}
		});

		// init grid module
		grid.init(grid_width, grid_height);
		if (alive_cells) {
			// first generation choosen by user
			for (i = 0; i < alive_cells.length; i++) {
				grid.set(alive_cells[i], true);
			}
		} else {
			// first generation randomly generated
			for (i = grid_width * grid_height; i > grid_height*140 ; i--) {
				grid.set(i, Math.random() > 0.5);
			}
		}
		graphics.draw(grid.getCells());
	};

	my.breadcrumb = function(x, y, size) {
		x = Number((x*grid.width).toFixed(0));
		y = Number((y*grid.height).toFixed(0));
		grid.enable(x,y);
		if (size) {
			for (var y_offset=0;y_offset<size;y_offset++) {
				for (var x_offset=0;x_offset<size;x_offset++) {
					grid.enable(x + x_offset - (size/2), y + y_offset - size/2);
				}
			}
		}
	};

	my.bomb = function(x,y, range) {
		var w = grid.width;
		//left column
		for (var yr=-range;yr<=range;yr++) {
			var xc = Number((x*grid.width).toFixed(0))-range;
			var yc = Number((y*grid.height).toFixed(0))+yr;
			//grid.setCell(xc+yc*w,0);
			grid.changed.alive.push(xc+yc*w);
			grid.enable(xc+yc*w);
		}
		//right column
		for (var yr=-range;yr<=range;yr++) {
			var xc = Number((x*grid.width).toFixed(0))+range;
			var yc = Number((y*grid.height).toFixed(0))+yr;
			//grid.setCell(xc+yc*w,0);
			grid.changed.alive.push(xc+yc*w);
			grid.enable(xc+yc*w);
		}
		//top row
		for (var xr=-range;xr<=range;xr++) {
			var xc = Number((x*grid.width).toFixed(0))+xr;
			var yc = Number((y*grid.height).toFixed(0))-range;
			//grid.setCell(xc+yc*w,0);
			grid.changed.alive.push(xc+yc*w);
			grid.enable(xc+yc*w);
		}
		//bottom row
		for (var xr=-range;xr<=range;xr++) {
			var xc = Number((x*grid.width).toFixed(0))+xr;
			var yc = Number((y*grid.height).toFixed(0))+range;
			//grid.setCell(xc+yc*w,0);
			grid.changed.alive.push(xc+yc*w);
			grid.enable(xc+yc*w);
		}
	};

	my.start = function() {
		if (console.profile && location.hash === "#profile") {
			console.profile();
		}

		_interval.redraw = setInterval(_loop, 50);
	};

	my.step = function() {
		if (_interval.redraw !== null) {
			clearInterval(_interval.redraw);
			_interval.redraw = null;
		}
		setTimeout(_loop, 0);
	};

	my.stop = function() {
		if (_interval.redraw !== null) {
			clearInterval(_interval.redraw);
			_interval.redraw = null;
		}
	};

	return my;
}(GRAPHICS, GRID));
