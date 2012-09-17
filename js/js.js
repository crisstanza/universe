function $(id) {
	return document.getElementById(id);
}

function appendHeadChild(node) {
	document.getElementsByTagName('head')[0].appendChild(node);
}

function createScriptNode(path) {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', path);
	return script;
}
  
appendHeadChild(createScriptNode('js/Universe.js'));
appendHeadChild(createScriptNode('js/MyUniverse.js'));
  
window.onload = function() {
	var universe = new Universe();
	universe.setCanvas($('main_canvas'));
	universe.start();
	//
	var myUniverse = new MyUniverse();
	initMyUniverse(myUniverse, universe);
	//
	refreshUniverse(universe, myUniverse);
};

function initMyUniverse(myUniverse, universe) {
	myUniverse.init();
	//
	var form2d = document.form_axis;
	with( form2d ) {
		axis_2d.addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		var axis_2d_color_array = form2d.axis_2d_color;
		axis_2d_color_array[0].addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		axis_2d_color_array[1].addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		axis_2d_color_array[2].addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		//
		axis_3d.addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		var axis_3d_color_array = form2d.axis_3d_color;
		axis_3d_color_array[0].addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		axis_3d_color_array[1].addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
		axis_3d_color_array[2].addEventListener('click', function(event) { refreshUniverse(universe, myUniverse); }, false);
	}
}

function refreshUniverse(universe, myUniverse) {
	myUniverse.refresh();
	//
	universe.axis2d = myUniverse.axis2d;
	universe.axis3d = myUniverse.axis3d;
	universe.axis2dColor = myUniverse.axis2dColor;
	universe.axis3dColor = myUniverse.axis3dColor;
	//
	universe.refresh();
}