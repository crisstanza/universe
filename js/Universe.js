function Universe() {
	//
	Universe.console.log('new Universe()');
	//
	this.canvas = null;
	//
	this.axis2d = false;
	this.axis3d = false;
	//
	this.axis2dColor = '#F00';
	this.axis3dColor = '#00F';
}

Universe.LOG = true;

Universe.prototype = {

	setCanvas: function(_canvas) {
		//
		Universe.console.log('Universe.setCanvas('+_canvas+')');
		//
		canvas = _canvas;
	},

	start: function() {
		//
		Universe.console.log('Universe.start()');
		//
	},

	refresh: function() {
		//
		Universe.console.log('Universe.refresh()');
		//
		this.draw();
	},

	draw: function() {
		//
		Universe.console.log('Universe.draw()');
		//
		var maxX = canvas.width;
		var maxY = canvas.height;
		var halfX = Math.round(maxX / 2);
		var halfY = Math.round(maxY / 2);
		//
		var context = canvas.getContext('2d');
		//
		context.fillStyle = '#DDD';
		context.fillRect (0, 0, maxX, maxY);
		//
		if ( this.axis2d ) {
			context.fillStyle = this.axis2dColor;
			//
			context.fillRect (0, halfY, maxX, 1);
			context.fillRect (halfX, 0, 1, maxY);
		}
		//
		if ( this.axis3d ) {
			context.strokeStyle = this.axis3dColor;
	        context.lineWidth = 1;
			//
			context.beginPath();
			//
			context.moveTo(halfX, halfY);
			context.lineTo(halfX - 240, halfY + 80);
			context.closePath();
			context.stroke();
			//
			context.moveTo(halfX, halfY);
			context.lineTo(halfX + 240, halfY + 80);
			context.closePath();
			context.stroke();
			//
			context.moveTo(halfX, halfY);
			context.lineTo(halfX,  halfY - 200);
			context.closePath();
			context.stroke();
		}
	}

};

Universe.console = {
	log: function(msg) {
		if (Universe.LOG === true) {
			console.log(msg);
		}
	}
};