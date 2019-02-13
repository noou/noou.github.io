(function($) {
    var SiteModule = {

        anchorScrollOffset: 100,
        desktopMinWidth: 500,
        animateDurationMs: 500,
        navUl: $('nav ul'),
        menuTr: $('.menu-trigger'),



        scrollNav: function() {
            $('#mainNav a').click(function() {
                $("#mainNav a.active").removeClass("active");
                $(this).addClass('active');
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - SiteModule.anchorScrollOffset
                }, SiteModule.animateDurationMs);
            });
            $('.scrollTop a').scrollTop();
        },

        markActiveAnchor: function() {
            var sections = $('section'),
                nav = $('nav'),
                nav_height = nav.outerHeight();
            // test
            $(window).on('scroll', function() {
                var cur_pos = $(this).scrollTop();
                sections.each(function() {
                    var top = $(this).offset().top - 50 - nav_height,
                        bottom = top + $(this).outerHeight();

                    if (cur_pos >= top && cur_pos <= bottom) {
                        nav.find('a.active').removeClass('active');
                        sections.removeClass('active');
                        $(this).addClass('active');
                        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                    }
                });

                if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                    console.log('конец страницы!')
                    nav.find('a.active').removeClass('active');
                    nav.find('a').last().addClass('active');
                }
            });
        },

        renderSkillBars: function() {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
        },

        toggleButtonState: function(enable) {
            if (enable) {
                $('#button').removeAttr('disabled');
            } else {
                $('#button').attr('disabled', 'disabled');
            }
        },

        canSendMessage: function() {
            $('#message').keyup(function() {
                var msg = $(this).val();
                SiteModule.toggleButtonState(msg.length > 2);
            });
        },


        initSendMessage: function() {
            $('#button').click(function() {
                name = $("#name").val();
                email = $("#email").val();
                message = $("#message").val();

                $.get("https://api.telegram.org/bot790435285:AAEpOiTGXiYQYLko71e4WgqMO6j31c4gFlc/sendMessage?text=NAME:" + name + " |MAIL:" + email + " |MESSAGE:" + message + "&chat_id=596332802");

                $('#message').val('');
                $('#button').attr('disabled', 'disabled');
                alert("Ваше сообщение отправленно ✉️");
            });
        }
    };




    $(document).ready(function() {
        SiteModule.scrollNav();
        SiteModule.markActiveAnchor();
        SiteModule.renderSkillBars();
        SiteModule.canSendMessage();
        SiteModule.initSendMessage();
    });


}(jQuery));


$(function() {
    var wrap = $(".mainNav");
    var wraplogo = $(".mainNav .logo");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) wrap.addClass("sticky"), wraplogo.addClass("imgafter");
        else wrap.removeClass("sticky"), wraplogo.removeClass("imgafter");
    });
});
