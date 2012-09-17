function MyUniverse() {
	//
	MyUniverse.console.log('new MyUniverse()');
	//
}

MyUniverse.LOG = true;

MyUniverse.prototype = {

	init: function(_canvas) {
		//
		MyUniverse.console.log('MyUniverse.init()');
		//
	}

};

MyUniverse.console = {
	log: function(msg) {
		if (MyUniverse.LOG === true) {
			console.log(msg);
		}
	}
};