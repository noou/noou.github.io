$(function() {
    var wrap = $(".mainNav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) wrap.addClass("sticky");
        else wrap.removeClass("sticky");
    });
});

$(function() {
    var wrap = $(".mainNav .logo");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) wrap.addClass("imgafter");
        else wrap.removeClass("imgafter");
    });
});


$(document).ready(function() {
	"use strict";
	var myNav = {
		init: function() {
			this.cacheDOM();
			this.browserWidth();
			this.bindEvents();
		},
		cacheDOM: function() {
			this.navBars = $(".navBars");
			this.xBxHack = $("#xBxHack");
			this.navMenu = $("#menu");
		},
		browserWidth: function() {
			$(window).resize(this.bindEvents.bind(this));
		},
		bindEvents: function() {
			var width = window.innerWidth;

			if (width < 600) {
				this.navBars.click(this.bind(this));
				this.navMenu.hide();
				this.xBxHack[0].checked = false;
			} else {
				this.resetNav();
			}
		},
		animate: function(e) {
			var checkbox = this.xBxHack[0];
			!checkbox.checked ?
				this.navMenu.slideDown() :
				this.navMenu.slideUp();

		},
		resetNav: function() {
			this.navMenu.show();
		}
	};
	myNav.init();
});


jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
