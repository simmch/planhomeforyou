(function($)
{
    "use strict"
    $('.mg-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        arrows: true,
    });

        //Preloader
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);

  // Menu dropdown on hover
  extendNav();
  function extendNav() {
    jQuery('.nav-wrapper .dropdown').hover(function() {
      jQuery(this).children('.dropdown-menu').stop(true, true).show().addClass('animated-fast slfadeInDown');
      jQuery(this).toggleClass('open');
    }, function() {
      jQuery(this).children('.dropdown-menu').stop(true, true).hide().removeClass('animated-fast slfadeInDown');
      jQuery(this).toggleClass('open');
    });
  }

    //Mailchimp subscription form
    var subfrom = $(".subscription-form");
    var loader = $(".ajax-loader");

    subfrom.submit(function(e) {
      loader.show()
    });

    subfrom.ajaxChimp({
        url: "http://themeforest.us13.list-manage.com/subscribe/post?u=c9f26ead80c5cb7180849094a&amp;id=51cf03ce84",
        callback: function(response) {
            var subresult = $(".subscription-form-wrapper .result");
            if(jQuery('.form-control.valid')[0]){
                $(".subscription-form").hide();
                subresult.removeClass('subscribe-error fadeInDown');
                subresult.addClass('subscribe-success');
                subresult.text(response.msg).addClass('animated fadeInDown');
            }
            else{
                subresult.addClass('subscribe-error');
                subresult.removeClass('subscribe-success fadeInDown');
                subresult.text(response.msg).addClass('animated fadeInDown');
            loader.hide();
            }
        }
    });

    //Contact form validation
    $('#contact_form').validate({
        rules: {
            first_name: {
                required: true,
            },
            comments: {
                required: true,
            },
            user_email: {
                required: true,
                email: true,
            },
        },
        submitHandler: function(form){
            loader.show();
            jQuery.ajax({
                url :"contact_mail.php",
                type : 'POST',
                data : {
                    first_name : $('[name="first_name"]').val(),
                    user_email : $('[name="user_email"]').val(),
                    comments : $('[name="comments"]').val(),
                },

                success:function(data){
                    $("#mail-status").html(data).addClass('animated fadeInDown');
                    loader.hide();
                },
                error:function (){
                    loader.hide();
                }
            })
        }
    });


    if ( jQuery( ".timer" ).length ) {
        jQuery(document).on('scroll', function() {
         var hT = jQuery('.timer').offset().top,
             hH = jQuery('.timer').outerHeight(),
             wH = jQuery(window).height(),
             wS = jQuery(this).scrollTop();
         if (wS > (hT+hH-wH)){
            jQuery(document).off('scroll');
            jQuery('.timer').countTo();
         }
        });
    }

      $('.navbar-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 900,
        scrollThreshold: 0.1,
        filter: '',
        navItems: 'a',
        navHeight: 70,
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
      });

    $('.nav-wrapper').stickMe({
      transitionDuration: 500,
      shadow: true,
      shadowOpacity: 0.6,
      animate: true,
      transitionStyle: 'slide'
    });

    $('.popup-link').magnificPopup({
      type: 'image',
      mainClass: 'mfp-zoom-in',
      tLoading: '',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {

        imageLoadComplete: function() {
          var self = this;
          setTimeout(function() {
            self.wrap.addClass('mfp-image-loaded');
          }, 16);
        },
        close: function() {
          this.wrap.removeClass('mfp-image-loaded');
        },
      },

      closeBtnInside: true,
      closeOnContentClick: true,
      midClick: true
    });

    //testimonial
    $('.testimonial-content').slick({
        infinite: true,
        autoplaySpeed: 7000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //client
    $('.client-slider').slick({
      infinite: true,
      autoplaySpeed: 7000,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
      ]
    });

    $(".video-popup").YouTubePopUp();

    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 500,
      once: 'true',
    });

    $(".mg-banner-slider").slickAnimation();

    //parallax
    $('.parallax').jarallax({

      // parallax effect speed. 0.0 - 1.0
      speed             : 0.3,

      // path to your parallax image
      imgSrc            : null,

      // width & height of your parallax image
    imgWidth: 1366,
    imgHeight: 768,

      // enable transformations for effect if supported.
      enableTransform   : false,

      // z-index of parallax container.
      zIndex            : -100

    })

        // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 14,
            scrollwheel: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }
  })(jQuery);
