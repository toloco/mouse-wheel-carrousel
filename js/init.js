

var X = {

	"selector" :  ".box",
	"items" : [],

	"selected" : 0,

	"init" : function (selector, first) {

		X.selector = selector ? selector : X.selector;
		$(X.selector).each(function() {
			X.items.push(this);
			$(this).addClass("animated");
		});

		$('body').on('mousewheel', function(event) {
			var deltaY = event.deltaY;
		    	if ( deltaY == 1 ) {  X.up();  }
		    	else               {  X.down(); }
		});

		X.hide(X.selector);
		X.show(X.items[X.selected]);

	},

	"timer" : null,
	"performer" : function (up) {
		  clearTimeout(X.timer);
		  X.timer = setTimeout("mouseWheelAction", 1);
	},

	"up" : function (){
		if (X.selected > 0) {
			X.selected --;
			X.hide(X.items[X.selected+1]);
			X.show(X.items[X.selected]);
		}
	},
	"down" : function (){
		if (X.selected < X.items.length -1) {
			X.selected ++;
			X.hide(X.items[X.selected-1]);
			X.show(X.items[X.selected]);
		}
	},

	"show" : function (i){ 
		X.removeClass(i);
		$(i).show(); 
		$(i).addClass("bounceInUp"); 

		
	},
	"hide" : function (i){ 
		
		$(i).addClass("bounceOutDown"); 
		$(i).one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function () {
			//
		});
		$(i).hide(); 
	},

	"removeClass" : function (i){
		$(i).removeClass("bounceInUp"); 
		$(i).removeClass("bounceOutDown"); 
	},


};