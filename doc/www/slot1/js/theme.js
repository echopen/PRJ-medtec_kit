(function($) {
    'use strict';
    //========================
    // Intialization
    //========================
    var tp = $(".tp-banner"),
        Gr = $("#Grid"),
        gr = $("#grid"),
        $this = $(this),
        ga = $("#galSld"), 
        pr = $(".projectGallery"),
        lg = $(".loopGallery"), 
        ss = $(".serviceSliders"), 
        ts = $(".testimonialSlider"), 
        ff = $(".funfactSection"), 
        heade = $("header"), 
        news = $("#newsLetterForm");
    
    
    //========================
    // Loader
    //========================
    $(window).load(function () {
        if ($(".loaderWrap").length > 0)
        {
            $(".loaderWrap").delay(100).fadeOut("slow");
        }
    });
    
    //=========================
    // Revolution Slider
    //=========================
    if ($(".sliders").length > 0)
    {
        tp.revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 768,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "ooff",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "off",
            navOffsetHorizontal: 40,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",
            navigationVOffset: 35

        });
    }
    if ($(".sliders2").length > 0)
    {
        tp.revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 870,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "off",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "off",
            navOffsetHorizontal: 40,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",
            navigationVOffset: 35

        });
    }

    


    //=========================
    // Folio Mixar
    //=========================
    if ($(".foliocontainer").length > 0) {
        Gr.themeWar();
    }
    if ($(".comonFolios").length > 0) {
        Gr.themeWar();
    }
    if (gr.length > 0)
    {

        $(window).load(function() {
            gr.shuffle({
                itemSelector: ".item" 
            });
            $("#mas_nav li").on("click", function() {

                // set active class
                $("#mas_nav li").removeClass("active");
                $this.addClass("active");

                // get group name from clicked item
                var groupName = $this.attr("data-group");

                // reshuffle grid
                gr.shuffle("shuffle", groupName);
            });
        });
    }

    //========================
    // Home 9 Slider
    //========================
    if (ga.length > 0)
    {
        ga.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                },
                1280: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });
    }
    if (pr.length > 0)
    {
        pr.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            nav: true
        });
    }
    if (lg.length > 0)
    {
        lg.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            nav: true
        });
    }
    if (ss.length > 0)
    {
        ss.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            nav: false,
            autoplay: true,
            animateOut: "fadeOut"
        });
    }
    if (ts.length > 0)
    {
        ts.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: true,
            autoplay: true
        });
    }

    //========================================================
    // Fun Fact
    //========================================================
    var skla = true;
    ff.appear();
    ff.on("appear", function() {
        if (skla)
        {
            $(".timer").each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr("data-counter")}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '' + '$1' + '' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skla = false;
        }
    });

    /*=======================
     // Contact Map
     //=======================*/
    if ($("#map").length > 0)
    {
        var map;

        map = new GMaps({
            el: "#map",
            lat: 48.853966,
            lng: 2.348599,
            scrollwheel: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = "";
        map.addMarker({
             lat: 48.853966,
            lng: 2.348599,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });



        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2d2d2d"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#b1b1b1"}
                ]
            }

        ];



        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }


    /*=======================
     // Mobile Menu
     //=======================*/
    if ($(window).width() < 989)
    {
        $(".menuToggler").on("click", function(e) {
            e.preventDefault();
            $(".headerMid").slideToggle("slow");
            $(this).toggleClass("active");
        });
        $(".mainMenu ul li.has_child_menu > a").on("click", function(e) {
            e.preventDefault();
            $(this).next("ul.sub-menu").slideToggle("slow");
        });
    }

    /*=======================
     // Fixed Header
     //=======================*/
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 40) {
            heade.addClass("fixedHeader animated fadeInUp");
        }
        else {
            heade.removeClass("fixedHeader animated fadeInUp");
        }

    });

    //========================
    // Subscriptions 
    //========================
    /*if (news.length > 0)
    {
        news.on('submit', function(e) {
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            $("#letterSubmit").html("<i class='fa fa-spinner'></i>");
            if (sub_email === "")
            {
                $(".subs_element").addClass('reqError');
                $("#letterSubmit").html("<i class='fa fa-warning'></i>");
            } else
            {
                $("#sub_email").removeClass("reqError");
                $.ajax({
                    type: "POST",
                    url: "php/subscribe.php",
                    data: {sub_email: sub_email},
                    success: function(data)
                    {
                        $("#newsLetterForm input").val("");
                        $("#letterSubmit").html("<i class='fa fa-thumbs-o-up'>");
                    }
                });
            }
        });
        $(".subs_element").on("keyup", function() {
            $(this).removeClass("reqError");
        });
    }*/

    if ($("#news_form").length > 0)

    {
        $("#news_form").on("submit", function(e) {
            e.preventDefault();
           
            var first_name, last_name, news_mail;

            if ($("#first_name").length > 0) {
                var first_name = $("#first_name").val();
            }
            if ($("#last_name").length > 0) {
                var last_name = $("#last_name").val();
            }
            if ($("#news_mail").length > 0) {
                var news_mail = $("#news_mail").val();
            } 

            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == "")
                {
                    $(this).addClass("reqError");
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass("reqError"))
                    {
                        $(this).removeClass("reqError");
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: "php/subscribe.php",
                    data: {
                        first_name: first_name, last_name: last_name, news_mail: news_mail
                    },
                    success: function(data)
                    {
                        $("#con_summit").attr("value", "Done");
                        $("#con_form input, #con_form textarea").val("");
                        $("#con_summit").attr("value", "Done");
                    }
                });
            }
            else
            {
                $("#con_summit").attr("value","Failed!");
            }

        });

        $(".required").on("keyup", function() {
            $(this).removeClass("reqError");
        });
    }
/* contact  */
    if ($("#con_form").length > 0)

    {
        $("#con_form").on("submit", function(e) {
            e.preventDefault();
           
            var con_name, con_mail, con_message, sujet;

            if ($("#con_name").length > 0) {
                var con_name = $("#con_name").val();
            }
            if ($("#con_mail").length > 0) {
                var con_mail = $("#con_mail").val();
            }
            if ($("#con_message").length > 0) {
                var con_message = $("#con_message").val();
            }
            if ($("#sujet").length > 0) {
                var sujet = $("#sujet").val();
            }

            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == "")
                {
                    $(this).addClass("reqError");
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass("reqError"))
                    {
                        $(this).removeClass("reqError");
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: "php/mail.php",
                    data: {
                        con_name: con_name, con_mail:con_mail, sujet: sujet, con_message: con_message, sujet
                    },
                    success: function(data)
                    {
                        $("#con_sumit").attr("value", "Done");
                        $("#con_form input, #con_form textarea").val("");
                        $("#con_sumit").attr("value", "Done");
                    }
                });
            }
            else
            {
                $("#con_sumit").attr("value","Failed!");
            }

        });

        $(".required").on("keyup", function() {
            $(this).removeClass("reqError");
        });
    }


    //=========================
    // Search Opener
    //=========================
    if ($(".searchToggler").length > 0)
    {
        var todg = true;
        $(".searchToggler").on("click", function(e) {
            e.preventDefault();
            if (todg)
            {
                $(".searchFixed").fadeIn("slow");
                todg = false;
            }
            else
            {
                $(".searchFixed").fadeOut("slow");
                todg = true;
            }
        });

        $(document).mouseup(function(e) {
            var container = $(".searchForms");

            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                $(".searchFixed").fadeOut("slow");
                todg = true;
            }

        });

        $("#sfCloser").on("click", function(e) {
            e.preventDefault();
            $(".searchFixed").fadeOut("slow");
            todg = true;
        });
    }




})(jQuery);
