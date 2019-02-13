class StickyNavigation {

	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}

	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}

	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		}
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}

}

new StickyNavigation();


$(window).scroll(function() {
  const a = $(this).scrollTop(),
    b = 800;
  $("h1").css({ backgroundPosition: "center " + a / 2 + "px" });
  $(".parallax").css({ top: a / 1.6 + "px", opacity: 1 - a / b });
});



// parallax scrolling

document.addEventListener("scroll", () => {
  const
    top = window.pageYOffset,
	topp = 50+window.pageYOffset,
    one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five"),
    six = document.querySelector(".six"),
    seven = document.querySelector(".seven");
		// paral = document.querySelector(".header .parallax div");
  // $("header .parallax div").css('background-size', '+=1%');
  one.style.bottom = -(top * 0.1) + "px";
  two.style.bottom = -(top * 0.2) + "px";
  three.style.bottom = -(top * 0.3) + "px";
  four.style.bottom = -(top * 0.4) + "px";
  five.style.bottom = -(top * 0.5) + "px";
  six.style.bottom = -(top * 0.4) + "px";
  seven.style.bottom = -(top * 0.3) + "px";
		// paral.style['background-size'] = -(    background-size * 0.1) + "%";
});

$("header .parallax div").css({ backgroundSize: 100 + (300 - $(window).width() / 10) + "%" });
$(window).resize(function() {
    $("header .parallax div").css({ backgroundSize: 100 + (300 - $(window).width() / 10) + "%" });
});
