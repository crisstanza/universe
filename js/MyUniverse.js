function MyUniverse() {
	//
	MyUniverse.console.log('new MyUniverse()');
	//
	this.axis2d = true;
	this.axis3d = false;
	this.axis2dColor = '#F00';
	this.axis3dColor = '#00F';
}

MyUniverse.LOG = true;

MyUniverse.prototype = {

	init: function() {
		//
		MyUniverse.console.log('MyUniverse.init()');
		//
		this.refresh();
	},

	refresh: function() {
		//
		MyUniverse.console.log('MyUniverse.refresh()');
		//
		var form2d = document.form_axis;
		//
		this.axis2d = form2d.axis_2d.checked;
		var axis_2d_color_array = form2d.axis_2d_color;
		this.axis2dColor = axis_2d_color_array[0].checked ? axis_2d_color_array[0].value : this.axis2dColor;
		this.axis2dColor = axis_2d_color_array[1].checked ? axis_2d_color_array[1].value : this.axis2dColor;
		this.axis2dColor = axis_2d_color_array[2].checked ? axis_2d_color_array[2].value : this.axis2dColor;
		//
		this.axis3d = form2d.axis_3d.checked;
		var axis_3d_color_array = form2d.axis_3d_color;
		this.axis3dColor = axis_3d_color_array[0].checked ? axis_3d_color_array[0].value : this.axis3dColor;
		this.axis3dColor = axis_3d_color_array[1].checked ? axis_3d_color_array[1].value : this.axis3dColor;
		this.axis3dColor = axis_3d_color_array[2].checked ? axis_3d_color_array[2].value : this.axis3dColor;
	}

};

MyUniverse.console = {
	log: function(msg) {
		if (MyUniverse.LOG === true) {
			console.log(msg);
		}
	}
};