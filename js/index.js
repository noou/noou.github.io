// ------------------------------------------------------------------BURGER MENU
$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(500);
    });
});
$(window).resize(function() {
    if ($(window).width() > 500) {
        $('nav ul').removeAttr('style');
        $('.menu-trigger').removeClass('cross');
    }
})

function scrollNav() {
    $('.nav ul a').click(function() {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 400);
        $('.menu-trigger').removeClass('cross');
        if($('.menu-trigger').css('display') === 'block')
            $('#items').slideUp(500);
        return false;

    });
    $('.scrollTop a').scrollTop();
}
scrollNav();


jQuery(document).ready(function($) {
  $('.menu-trigger').click(function() {
    if(!$('.menu-trigger').hasClass('cross'))
      $('.menu-trigger').addClass('cross');
    else
      $('.menu-trigger').removeClass('cross');
  });
});




// --------------------------------------------------------------------Скилл-бар
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
// ----------------------------------------------------Дизейблим кнопку отправки

function check() {
    var msg = $('#message').val();

    if(msg.length != 0) {
        $('#button').removeAttr('disabled');
    } else {
        $('#button').attr('disabled', 'disabled');
    }
}
// -----------------------------------------------------------------------------

function sendmessage(){
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    $.get("https://api.telegram.org/bot790435285:AAEpOiTGXiYQYLko71e4WgqMO6j31c4gFlc/sendMessage?text=NAME:"+name+" |MAIL:"+email+" |MESSAGE:"+message+"&chat_id=596332802");

    $('#message').val('');
    $('#button').attr('disabled','disable');
    alert( "Ваше сообщение отправленно ✉️" );
}
// ---------------------------------------------------
$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });
});
// ---------------------------------------------------
