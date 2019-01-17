$(function() {
    var wrap = $(".wrap.fixed");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) wrap.addClass("sticky");
        else wrap.removeClass("sticky");
    });
});
