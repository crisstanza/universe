function Universe() {
	//
	Universe.console.log('new Universe()');
	//
	this.canvas = null;
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
	}

};

Universe.console = {
	log: function(msg) {
		if (Universe.LOG === true) {
			console.log(msg);
		}
	}
};