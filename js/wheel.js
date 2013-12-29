

var W = {

	"selector" :  ".box",
	"items" : [],

	"selected" : 0,

	"init" : function (selector, first) {

		W.selector = selector ? selector : W.selector;
		$(W.selector).each(function() {
			W.items.push(this);
			$(this).addClass("animated");
		});

		$('body').on('mousewheel', function(event) {
			var deltaY = event.deltaY;
		    	if ( deltaY == 1 ) {  W.up();  }
		    	else               {  W.down(); }
		});

		W.hide(W.selector);
		W.show(W.items[W.selected]);

	},

	"timer" : null,
	"performer" : function (up) {
		  clearTimeout(W.timer);
		  W.timer = setTimeout("mouseWheelAction", 1);
	},

	"up" : function (){
		if (W.selected > 0) {
			W.selected --;
			W.hide(W.items[W.selected+1]);
			W.show(W.items[W.selected]);
		}
	},
	"down" : function (){
		if (W.selected < W.items.length -1) {
			W.selected ++;
			W.hide(W.items[W.selected-1]);
			W.show(W.items[W.selected]);
		}
	},

	"show" : function (i){ 
		W.removeClass(i);
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