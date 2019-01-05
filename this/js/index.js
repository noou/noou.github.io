// #Pinspiration
// https://www.pinterest.com/pin/70228075417474245/
// https://www.behance.net/gallery/19198309/Ce-Soir-Restaurant

// Fun dummy text
// http://hipsum.co/

$( document ).ready(function() {
    // Nav-bar Scroll Function
    $(".nav-link").click(function(){
        if($(this.hash).height() > $(window).height()) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-25
            }, 1000);
        } else {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-(($(window).height() - $(this.hash).innerHeight())/2)
            }, 1000);
        }
        return false;
    });
});