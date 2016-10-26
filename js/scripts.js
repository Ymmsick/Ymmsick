$(document).ready(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $(".lightnav .navbar-inner").addClass("lightnav-alt");
            $(".darknav .navbar-inner").addClass("darknav-alt");
        } else {
            $(".lightnav .navbar-inner").removeClass("lightnav-alt");
            $(".darknav .navbar-inner").removeClass("darknav-alt");
        }
    });

    $(document).ready(function ($) {

        // Slidebars off-canvas menu
        $.slidebars();

        // Popovers [Hover]
        $("[data-toggle=popover]")
            .popover({
                    html: true
                }
            );

        $("html").niceScroll({
            smoothscroll: true, // scroll with ease movement
            autohidemode: false,
            zindex: "100", // change z-index for scrollbar div
            scrollspeed: 60, // scrolling speed
            mousescrollstep: 40,
            gesturezoom: false,
            horizrailenabled: false,
            cursorcolor: "#151515",
            boxzoom: false,
            cursorborder: "0 solid #202020",
            cursorborderradius: "5px",
            cursorwidth: 9,
            enablemousewheel: true,
            background: "rgba(255,255,255,0.7)",
        });

        // Page transitions
        $(".animsition").animsition({

            inClass: 'fade-in',
            outClass: 'fade-out-down-sm',
            inDuration: 900,
            outDuration: 800,
            linkElement: '.animsition-link',
            //e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            unSupportCss: ['animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
            ],
            //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

            overlay: false,

            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body'
        });

        // WOW plugin settings
        var wow = new WOW(
            {
                animateClass: 'animated', // set our global css classT (default is animated)
                offset: 250, // set distance to content until it triggers (default is 0)
                mobile: false, // remove animations for mobiles/tablets (default is true)
                live: true
            }); // act on asynchronously loaded content (default is true)
        new WOW().init();

        // Functionailty constraints for mobile
        if (!Modernizr.touch) {
            jQuery(function ($) {
                // Hero & page-header fade-in effect
                var divs = $('.herofade');
                $(window).on('scroll', function () {
                    var st = $(this).scrollTop();
                    divs.css({
                        'margin-top': -(st / 0) + "px",
                        'opacity': 0.9 - st / 1600
                    });
                });
            });

            jQuery(function ($) {
                // Hero & page-header fade-in effect
                var divs = $('.videofade');
                $(window).on('scroll', function () {
                    var st = $(this).scrollTop();
                    divs.css({
                        'margin-top': -(st / 0) + "px",
                        'opacity': 0.8 - st / 1600
                    });
                });
            });

            jQuery(function ($) {
                // Hero & page-header fade-in effect
                var divs = $('.headerfade');
                $(window).on('scroll', function () {
                    var st = $(this).scrollTop();
                    divs.css({
                        'margin-top': -(st / 0) + "px",
                        'opacity': 0.9 - st / 300
                    });
                });
            });
        }

        // autohide navbar on scroll
        $("div.navbar-fixed-top").autoHidingNavbar({
            animationDuration: 400,
            hideOffset: 0,
        });

        // faq's floating sidebar (left)
        $('#sidebar').affix({
            offset: {
                top: 500
            }
        });

        // Scrollspy for scrollto links in floating faq sidebar
        var $body = $(document.body);
        var navHeight = $('.navbar').outerHeight(true) + 80;

        $body.scrollspy({
            target: '#leftcol',
            offset: navHeight
        });

        // fade out map cover (contact.html)
        $(".map-cover").click(function () {
            $(".map-cover").fadeOut("slow");
        });

        // Collapsible panels for faq's and careers
        $('.collapse').on('show.bs.collapse', function () {
            var id = $(this).attr('id');
            $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-panel');
            $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-up"></i>');
        });
        $('.collapse').on('hide.bs.collapse', function () {
            var id = $(this).attr('id');
            $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-panel');
            $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-down"></i>');
        });

        /*!
         * IE10 viewport hack for Surface/desktop Windows 8 bug
         * Copyright 2014 Twitter, Inc.
         * Licensed under the Creative Commons Attribution 3.0 Unported License. For
         * details, see http://creativecommons.org/licenses/by/3.0/.
         */
        // See the Getting Started docs for more information:
        // http://getbootstrap.com/getting-started/#support-ie10-width
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement('style');
            msViewportStyle.appendChild(
                document.createTextNode(
                    '@-ms-viewport{width:auto!important}'
                )
            );
            document.querySelector('head').appendChild(msViewportStyle);
        }

    }); // Document Ready

}(jQuery)); // End "use strict"

// Enable dropdown sub-menus in off-canvas navigation
$(document).ready(function ($) {
    $('.sb-toggle-submenu').off('click') // Stop submenu toggle from closing Slidebars.
        .on('click', function () {
            $submenu = $(this).parent().children('.sb-submenu');
            $(this).add($submenu).toggleClass('sb-submenu-active'); // Toggle active class.

            if ($submenu.hasClass('sb-submenu-active')) {
                $submenu.slideDown(200);
            } else {
                $submenu.slideUp(200);
            }
        });
});

$(document).ready(function playAudio() {
    function log(info) {
        console.log(info);
        // alert(info);
    }

    function forceSafariPlayAudio() {
        audioEl.load(); // iOS 9   还需要额外的 load 一下, 否则直接 play 无效
        audioEl.play(); // iOS 7/8 仅需要 play 一下
    }

    var audioEl = document.getElementById('bgmusic');
    // 可以自动播放时正确的事件顺序是
    // loadstart
    // loadedmetadata
    // loadeddata
    // canplay
    // play
    // playing
    //
    // 不能自动播放时触发的事件是
    // iPhone5  iOS 7.0.6 loadstart
    // iPhone6s iOS 9.1   loadstart -> loadedmetadata -> loadeddata -> canplay
    audioEl.addEventListener('loadstart', function () {
        log('loadstart');
    }, false);
    audioEl.addEventListener('loadeddata', function () {
        log('loadeddata');
    }, false);
    audioEl.addEventListener('loadedmetadata', function () {
        log('loadedmetadata');
    }, false);
    audioEl.addEventListener('canplay', function () {
        log('canplay');
    }, false);
    audioEl.addEventListener('play', function () {
        log('play');
        // 当 audio 能够播放后, 移除这个事件
        window.removeEventListener('touchstart', forceSafariPlayAudio, false);
    }, false);
    audioEl.addEventListener('playing', function () {
        log('playing');
    }, false);
    audioEl.addEventListener('pause', function () {
        log('pause');
    }, false);
    // 由于 iOS Safari 限制不允许 audio autoplay, 必须用户主动交互(例如 click)后才能播放 audio,
    // 因此我们通过一个用户交互事件来主动 play 一下 audio.
    window.addEventListener('touchstart', forceSafariPlayAudio, false);
});
