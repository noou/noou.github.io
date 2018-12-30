$(document).on("scroll", function () {
	if ($(document).scrollTop() > 100) {
		$("#navigation-menu").addClass("small");
	} else {
		$("#navigation-menu").removeClass("small");
	}
});
