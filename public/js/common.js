(function($) {

    $.fn.toSVG = function(options) {
        var params = $.extend({
            svgClass: "replaced-svg",
            onComplete: function() {},
        }, options)
        this.each(function() {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            if (!(/\.(svg)$/i.test(imgURL))) {
                console.warn("image src='" + imgURL + "' is not a SVG, item remained tag <img/> ");
                return;
            }
            $.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + params.svgClass);
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);
                typeof params.onComplete == "function" ? params.onComplete.call(this, $svg) : '';
            })
        });
    }

    $(document).ready(function() {


      var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
      $("a").bind(clickHandler, function(e) {});
      $('img.svg').toSVG({
          svgClass: "SVG",
          onComplete: function(data) {}
      });
     
      $(".open_modal").fancybox({
          // closeBtn: false,
          // smallBtn: false,
          autoFocus: false,
          buttons: [],
          touch: false,
          hideScrollbar: false,
          swipe: false,
  
      });
      
      var testPattern = new RegExp("^(\\+)?(\\d+)$");
  
      $("input[type='tel']").on('keyup', function() {
          if ($(this).val().length == 1) $(this).val('+');
          else {
              var res = chkInput();
              if (!res) $(this).val($(this).val().slice(0, -1));
          }
      });
  
      // sniff for mobile devices
      window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
  
      
  
      // once for on page load
      if (!window.sliderInitialized) {
    if ($(window).width() < 821 || window.isMobile) {
        console.log("mobileSliderInit called on load")
        moblieSliderInit();
        window.sliderInitialized = true; // ✅ Prevents duplicate calls
    }
} else {
    console.log("mobileSliderInit removed");
    $('.product-slider').slick('unslick');
}
  
      // again for resize
      // $(window).resize(function(){  /*Bind an event handler to the "resize"*/
      //     if ($(window).width() < 768 || window.isMobile) {
      //         moblieSliderInit()
      //     }
      // })
  

      
      $('.rotator-next').click(function() {
    var parent_ = $(this).closest('.section').find('.rotator');
    var activePic = parent_.find('picture.active');
    var nextPic = activePic.next('picture');

    // If it's the last picture, loop back to the first one
    if (nextPic.length === 0) {
        nextPic = parent_.find('picture').first();
    }

    // Remove 'active' from the current and add it to the next
    activePic.removeClass('active');
    nextPic.addClass('active');
});

$('.rotator-prev').click(function() {
    var parent_ = $(this).closest('.section').find('.rotator');
    var activePic = parent_.find('picture.active');
    var prevPic = activePic.prev('picture');

    // If it's the first picture, loop back to the last one
    if (prevPic.length === 0) {
        prevPic = parent_.find('picture').last();
    }

    // Remove 'active' from the current and add it to the previous
    activePic.removeClass('active');
    prevPic.addClass('active');
});

  
      $(' .navigation>ul>li>a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              var h = $('header').outerHeight();
  
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 500);
                  return false;
              }
  
          }
      });
  
      // $('.arrow-bot').click(function(e) {
      //     e.preventDefault();
      //     var target = $(this).closest('section').next();
  
      //     if (target.length) {
      //         $('html, body').animate({
      //             scrollTop: target.offset().top
      //         }, 1000);
      //         return false;
      //     }
  
      // })
      $('.bot-section a').click(function(e) {
          e.preventDefault();
          var target = $(this).closest('section').next('section');
  
          console.log('found it', target)
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 500);
              return false;
          }
  
      });
      $('.arrow_top').click(function(e) {
          e.preventDefault();
          console.log("clicked");
          var target = $('section.active').prev();
  
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 50);
              return false;
          }
  
      });
  
      // $("form").not('.woocommerce-cart-form, .woocommerce-checkout').each(function() { //Change
      //     var th = $(this);
      //     th.validate({
      //         rules: {
      //             phone: {
      //                 required: true
      //             }
      //         },
      //         messages: {},
      //         errorPlacement: function(error, element) {},
      //         submitHandler: function(form) {
      //             var thisForm = $(form);
      //             console.log(thisForm.serialize());
      //             $.ajax({
      //                 type: "POST",
      //                 url: th.attr('action'),
      //                 data: th.serialize()
      //             }).done(function() {
      //                 window.location.href = th.find('.redirect-js').val();
  
      //                 th.trigger("reset");
      //             });
      //             return false;
      //         },
  
      //         success: function() {},
      //         highlight: function(element, errorClass) {
      //             $(element).addClass('error');
      //         },
      //         unhighlight: function(element, errorClass, validClass) {
      //             $(element).removeClass('error');
      //         }
      //     })
      // });
  
      $('.tog-nav').click(function() {
          $(this).toggleClass('active');
          $('.container.mobile .navigation').toggleClass('open');
          $('body').toggleClass('open');
      });
  
      $('.navigation a').click(function() {
          if ($(window).width() < 821) {
              $('.tog-nav').removeClass('active');
              $('.container.mobile .navigation').removeClass('open');
              $('body').removeClass('open');
          }
      });
  
      if ($('#fullpage').length > 0) {
          createFullpage({
			  licenseKey: '27FMK-R8QI6-YTKEJ-NQJ3J-SZHZL'
		  });
          fixMenu();
          fixMenuScroll();
          $('.fixed_nav li:first-child').addClass('active')
      }
      // counterProduct()
      scrollNav();
      headActive();
      $(window).scroll(function() {
          headActive();
          scrollNav();
      });
  
  
      $(document).on("click", '.close_cart', function() {
          $('.cart-modal').removeClass('open')
          $('body').removeClass('cart_open')
      })
      $(document).on('click', function(e) {
          if ($(window).width() > 820) {
              if (!$(e.target).closest('.cart-modal, .cart_link').length) {
                  $('.cart-modal').removeClass('open')
                  $('body').removeClass('cart_open')
              }
              e.stopPropagation();
  
          };
      });
  });

  
  $(window).on("load", function() {
      $(".scroll").mCustomScrollbar({
          // scrollbarPosition: 'outside'
      });
  
      
  
      var preloaderTime = 4000 // 4000 - Math.floor(event.timeStamp);
      // setTimeout(function() {
      //     $(".preload").fadeOut("slow");
  
      // }, preloaderTime <= 0 ? preloaderTime = 0 : preloaderTime);
  });
  
  $(document).ready(function() {
      
      $(".preload").fadeOut("slow");
  });
  
 
  

  
})(jQuery);

 function counterProduct() {
    $(document).find('.cart-item, .cart-modal__item').each(function() {
        var parent = $(this);
        var minus = $('.num_minus', parent);
        var pluss = $('.num_pluss', parent);
        var input = $('.counter_input', parent);

        if (input.val() == 2) {
            minus.removeClass('active')
        }
        pluss.click(function() {
            input.val(parseInt(input.val()) + 1).change();
            pluss.addClass('active');
        });
        minus.click(function() {
            if (input.val() > 1) {
                input.val(input.val() - 1).change();
            }
            if (input.val() == 1) {
                minus.removeClass('active')
            }
        });
		// Function to update cart via AJAX
        function updateCartQty(productId, quantity) {
            $.ajax({
                type: 'POST',
                url: wc_cart_params.ajax_url, // WooCommerce AJAX URL
                data: {
                    action: 'update_cart_quantity',
                    product_id: productId,
                    quantity: quantity
                },
                success: function(response) {
                    console.log('Cart updated successfully:', response);
                    // Optionally refresh cart fragments
                    $(document.body).trigger('wc_fragment_refresh');
                },
                error: function() {
                    console.error('Error updating cart.');
                }
            });
        }
    });
}



function fixMenuScroll() {
    var lastId,
        topMenu = jQuery(".fixed_nav"),
        // topMenuHeight = topMenu.outerHeight(),
        topMenuHeight = topMenu.outerHeight() + 10,
        // All list items
        menuItems = topMenu.find("a"),
        menuItems_two = jQuery('.navigation li a'),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = jQuery(jQuery(this).attr("href"));
            if (item.length) { return item; }
        });
    menuItems.click(function(e) {
        var href = jQuery(this).attr("href"),
            offsetTop = href === "#" ? 0 : jQuery(href).offset().top;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
        e.preventDefault();
    });
    jQuery(window).scroll(function() {
        // Get container scroll position
        var fromTop = jQuery(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if (jQuery(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
            menuItems_two
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
}

function headActive() {
    if (jQuery('.section-head.active').length > 0) {
        jQuery('.header > .container.desktop').addClass('first')
    } else {
        jQuery('.header > .container.desktop').removeClass('first')
    }


}

function createFullpage() {
    jQuery('#fullpage').fullpage({
		licenseKey: '27FMK-R8QI6-YTKEJ-NQJ3J-SZHZL',
        responsiveWidth: 821,
        //scrollBar: true,
        //fitToSection: false,
        scrollBar: true, // Disable native scroll to prevent conflicts
        fitToSection: false, // Prevent auto-snapping to sections
        //scrollingSpeed: 300, // Adjust for a smoother experience
        //normalScrollElements: 'section', // Allow normal scroll inside sections
        //touchSensitivity: 10, // Reduce touch scroll sensitivity
        afterRender: function() {
            console.log("FullPage.js initialized");

            // Ensure all sections are properly detected
            setTimeout(function() {
                jQuery.fn.fullpage.reBuild();
                console.log("FullPage.js re-initialized after DOM check");
            }, 100);
        }

    });
}

function fixMenu() {
if (jQuery('.fixed_nav li').length > 0) return;
	
    jQuery('section').each(function() {
        // var index = parseInt($(this).index())+1;
        var id_ = jQuery(this).attr('id');
        var name_ = jQuery(this).attr('data-name');
        jQuery('.fixed_nav').append('<li><a href="#' + id_ + '"><span>' + name_ + '</span></a></li>');
    })
}

function scrollNav() {
    // var h = $('.section-head').outerHeight();
    if (jQuery('#fullpage').length > 0) {
        if (jQuery(window).width() < 821) {
            if (jQuery(this).scrollTop() > 1) {
                jQuery('.header').addClass('fix_nav');

            } else {
                jQuery('.header').removeClass('fix_nav');
            }
        }
    } else {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.header').addClass('fix_nav');

        } else {
            jQuery('.header').removeClass('fix_nav');
        }
    }
}

function chkInput() {
    var v = jQuery("input[type='tel']").val().charAt(jQuery("input[type='tel']").val().length - 1);
    return testPattern.test(v);
}

function moblieSliderInit() {
    var slider = jQuery('.product-slider');
	jQuery(".product-img noscript").remove();

    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick'); // ✅ Destroy previous instance
        console.log("Slider unslicked before reinitialization");
    }

    slider.slick({
        infinite: false,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 200
    });

    console.log("Slider initialized");
}

jQuery(document).ready(function() {
    window.sliderInitialized = false; // Ensure this is defined globally

    function checkAndInitSlider() {
        if (jQuery(window).width() < 821 || window.isMobile) {
            if (!window.sliderInitialized) {
                console.log("Initializing mobile slider...");
                moblieSliderInit();
                window.sliderInitialized = true; // ✅ Prevents duplicate calls
            }
        } else if (window.sliderInitialized) {
            console.log("Unslicking mobile slider...");
            jQuery('.product-slider').slick('unslick');
            window.sliderInitialized = false;
        }
    }

    // Run once on page load
    checkAndInitSlider();

    // Ensure it doesn’t reinitialize on resize
    jQuery(window).on('resize', function() {
        checkAndInitSlider();
    });
});



/*jQuery(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        console.log('Resized finished.');
        if (jQuery(window).width() < 821 || window.isMobile) {
            moblieSliderInit()
        } else {
            jQuery('.product-slider').slick('unslick');
        }
    }, 250);
});*/

jQuery(document).ready(function() {
    jQuery('.product-img.rotator noscript').remove(); // This removes all <noscript> elements from the page
});