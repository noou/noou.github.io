(function($){
    var SiteModule = {

        anchorScrollOffset: 100,
        desktopMinWidth: 500,
        animateDurationMs: 500,
        navUl: $('nav ul'),
        menuTr: $('.menu-trigger'),

        toggleMenuMobile: function(){
            SiteModule.menuTr.click(function() {
                SiteModule.navUl.slideToggle(SiteModule.animateDurationMs);
                if (!SiteModule.menuTr.hasClass('cross'))
                    SiteModule.menuTr.addClass('cross');
                else
                    SiteModule.menuTr.removeClass('cross');
            });

            $(window).resize(function() {
                if ($(window).width() > SiteModule.desktopMinWidth) {
                    SiteModule.navUl.removeAttr('style');
                    SiteModule.menuTr.removeClass('cross');
                }
            });
        },

        scrollNav: function() {
            $('#navigation-menu a').click(function() {
                $("#navigation-menu a.active").removeClass("active");
                $(this).addClass('active');
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - SiteModule.anchorScrollOffset
                }, SiteModule.animateDurationMs);
                SiteModule.menuTr.removeClass('cross');
                if (SiteModule.menuTr.css('display') === 'block')
                    $('#items').slideUp(SiteModule.animateDurationMs);
                return false;
            });
            $('.scrollTop a').scrollTop();
        },

        markActiveAnchor: function() {
            var sections = $('section')
              , nav = $('nav')
              , nav_height = nav.outerHeight();
                // test
            $(window).on('scroll', function () {
              var cur_pos = $(this).scrollTop();
              sections.each(function() {
                var top = $(this).offset().top - 100 - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                  nav.find('a.active').removeClass('active');
                  sections.removeClass('active');
                  $(this).addClass('active');
                  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
              });

              if  ($(window).scrollTop() == $(document).height() - $(window).height())
              {
                   console.log('конец страницы!')
                   nav.find('a.active').removeClass('active');
                   nav.find('a').last().addClass('active');
              }
            });
        },

        renderSkillBars: function(){
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

        canSendMessage: function(){
            $('#message').keyup(function(){
                var msg = $(this).val();
                SiteModule.toggleButtonState(msg.length > 2);
            });
        },

        InputStyle: function(){
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

        },

        initSendMessage: function() {
            $('#button').click(function(){
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
      SiteModule.toggleMenuMobile();
      SiteModule.scrollNav();
      SiteModule.markActiveAnchor();
      SiteModule.renderSkillBars();
      SiteModule.canSendMessage();
      SiteModule.InputStyle();
      SiteModule.initSendMessage();
    });


}(jQuery));
