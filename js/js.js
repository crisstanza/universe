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
	myUniverse.init();
	//
	universe.axis2d = true;
	universe.axis3d = false;
	//
	universe.refresh();
};