  
(function($){
  
  $(document).ready(function () {
  
      $(document).find('.add-to-cart').on('click', addToCartProduct);
      $(document).find('html[lang="nl-NL"] .woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received.title-section')
    .text('Uw bestelling is ontvangen. TIP: Om de temperatuur volledig te laten stabiliseren, plaatst u de taart minstens 2 uur in de koelkast alvorens deze te serveren.');
	   $(document).find('html[lang="en-US"] .woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received.title-section')
    .text('Your order has been received. TIP: To allow the temperature to fully stabilize, place the cake in the refrigerator for at least 2 hours before serving.');

	  
	  /***$(document).find(".woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received.title-section")
        .text(__('Uw bestelling is ontvangen. TIP: Om de temperatuur volledig te laten stabiliseren, plaatst u de taart minstens 2 uur in de koelkast alvorens deze te serveren.', 'thepastry-2022'));**/

  
      $(document).on('click', '.cart-item__remove', function (e) {
          var $this = $(this);
          onRemoveFromCart(e, $this);
      });
  
      $(document).on('click', '.counter_product span', function (e) {
          var $this = $(this);
          changeQuantity(e, $this);
      });
  
      getHash();
  
      $('[name="update_cart"]').removeAttr('disabled');
  
      // $('.woocommerce-cart-form').on('submit', function (e) {
      //     e.preventDefault();
  
      //     var $t = $(this);
  
      //     $.ajax({
      //         type: $t.attr('method'),
      //         url: $t.attr('action'),
      //         data: $t.serialize()
      //     }).done(function (r) {
      //         renderCart(r);
      //     });
  
      // });
  
      $('.cart_link').not('.cart').click(function (e) {
          if ($(window).width() > 768) {
              e.preventDefault();
              $('.cart-modal').addClass('open')
              $('body').addClass('cart_open')
          }
      });
  
      addClassesToCheckout();
  
  
      if (location.pathname === "/") {
          [
              // 62, // mondrian
              // 61, // rose box
              // 64, // hart
              // 65, // origami
          ].forEach((i) => {
              $(`#hidden_${i} > div.product-description > div:nth-child(1) > div`).html("<span></span>");
              $(`#hidden_${i} > div.product-description > div:nth-child(1) > div > span`).css({
                  "text-transform": "none",
                  "font-size": "14px",
                  "border-bottom": "1px solid red",
                  "padding-bottom": "5px",
              }).text("Binnenkort Beschikbaar");
              $(`#hidden_${i} > div.product-btn`).css("display", "none");
              $(`#hidden_${i} > div.product-text-bot`).css("display", "none");
          })
      } else if (location.pathname.indexOf("order-received") > -1) {
          $("body").css({
              "background": "url('/wp-content/themes/THEPASTRY/assets/img/thankyou2.jpg') no-repeat center center",
              "background-size": "cover"
          });
          $("body > section").css("background", "");
      }
  });
  
  function addToCartProduct(e) {
  
      e.preventDefault();
  
      var $this = $(this);
  
      var quantity = ($this.attr('data-quantity')) ? $this.attr('data-quantity') : 1;
  
      if (!$this.attr('data-product_id')) {
          return;
      }
  
      var data = {action: 'woocommerce_ajax_add_to_cart', variation_id: 0};
  
      $.each($this.data(), function (key, value) {
          data[key] = value;
      });
      data.quantity = quantity;
  
      $(document.body).trigger('adding_to_cart', [$this, data]);
  
      $.post(
          wc_add_to_cart_params.ajax_url,
          data,
          function (response) {
              if (!response) {
                  return;
              }
              if (response.error && response.product_url) {
                  window.location = response.product_url;
                  return;
              }
              if (wc_add_to_cart_params.cart_redirect_after_add === 'yes') {
                  window.location = wc_add_to_cart_params.cart_url;
                  return;
              }
              $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $this]);
  
              $('.cart_link').removeClass('empty');
  
              $this.closest('.product-btn').addClass('hidden');
              $this.closest('.product-btn').siblings('.js-group-btn').addClass('visible');
              render(response);
  
          });
  }
  
  function render(response) {
      var res = [];
  
      $.each(response.fragments, function (key, value) {
          res.push(value);
      });
  
      var _html = $(res[0]);
  
      var $modal_res_html = _html.find('.cart-modal').html();
  
      $(document).find('.cart-modal').html($modal_res_html);
  
      $('.cart-quantity-js').text(getTotalQuantity());
  
      $(document).find(".scroll").mCustomScrollbar();
  }
  
  function renderCart(response) {
  
      var parser = new DOMParser();
  
      var _html = $(parser.parseFromString(response, "text/html"));
  
      var $modal_res_html = _html.find('.cart-modal').html();
      var $cart_group_html = _html.find('.cart-group').html();
  
      $(document).find('.cart-modal').html($modal_res_html);
      $(document).find('.cart-group').html($cart_group_html);
  
      $('.cart-quantity-js').text(getTotalQuantity());
  
      $(document).find(".scroll").mCustomScrollbar();
  }
  
  function getTotalQuantity() {
      var result = 0;
      var $elements = $(document).find('.cart-modal__item');
      $elements.each(function () {
  
          var $t = $(this);
          var thisQuantity = Number($t.find('.counter_input').val());
          result = result + thisQuantity;
      });
  
      return result;
  }
  
  function onRemoveFromCart(e, $this) {
  
      e.preventDefault();
  
      var is_cart = $this.hasClass('cart-page');
  
      var wrapper = is_cart ? '.cart-item' : '.cart-modal__item';
  
      var $row = $this.closest(wrapper);
  
      $this.css('pointer-events', 'none');
  
      $row.hide();
  
      $.ajax({
          type: 'POST',
          url: wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%', 'remove_from_cart'),
          data: {
              cart_item_key: $this.data('cart_item_key')
          },
          success: function (response) {
              if (!response || !response.fragments) {
                  window.location = $this.attr('href');
                  return;
              }
  
              $(document.body).trigger('removed_from_cart', [response.fragments, response.cart_hash, $this]);
  
              if (is_cart) {
                  window.location.reload();
              } else {
                  render(response);
              }
  
          },
          error: function () {
              window.location = $this.attr('href');
              return;
          },
          dataType: 'json'
      });
  }
  
function changeQuantity(e, $this) {
    e.preventDefault();

    var $input = $this.closest('.counter_product').find('.counter_input');
    var is_cart = $input.hasClass('cart-page'); // Detect if we're on cart.php

    var wrapper = is_cart ? '.cart-item' : '.cart-modal__item';
    var product_id = $this.closest(wrapper).attr('data-id');
    var key = $this.closest(wrapper).attr('data-key');

    var val = parseInt($input.val(), 10) || 1;  // Ensure valid number
    var max = parseInt($input.attr('data-max'), 10) || Infinity; // Set max limit

    if ($this.hasClass('num_minus')) {
        val = Math.max(1, val - 1);
    } else if ($this.hasClass('num_pluss')) {
        val = Math.min(max, val + 1);
    }

    $input.val(val);

    var data = {
        action: 'change_cart',
        product_id: product_id,
        key: key,
        quantity: val
    };

    if (is_cart) {
        $.ajax({
            type: "POST",
            url: admin_ajax,
            data: data,
            success: function(response) {
                console.log("Cart updated", response);

                // 🔹 Refresh cart contents (subtotal, total, item prices) without reloading page
                $(".woocommerce-cart-form").load(location.href + " .woocommerce-cart-form > *", function () {
                    $(document.body).trigger("wc_fragment_refresh"); // Ensures cart totals are updated
                });

                // 🔹 Update cart icon quantity dynamically
                location.reload();
            },
            error: function(error) {
                console.error("AJAX Error: ", error);
            }
        });
        return;
    }

    // For mini-cart (if applicable)
    if (typeof sendRequest !== "undefined") {
        sendRequest(admin_ajax, data);
    } else {
        console.error("sendRequest function is undefined.");
    }

    // Update cart total in header
    updateCartQuantity();
}

// 🔹 Update cart icon quantity dynamically
function updateCartQuantity() {
    $.ajax({
        type: "POST",
        url: ajax_object.ajax_url,  // Use the localized AJAX URL
        data: { action: "get_cart_quantity" }, 
        success: function(response) {
            if (response.success) {
                $(".cart-quantity-js").text(response.data.total_quantity);
            } else {
                console.error("Error:", response.data.message);
            }
        },
        error: function(error) {
            console.error("Error updating cart quantity: ", error);
        }
    });
}


// 🔹 Update total price dynamically on the cart modal
function updateTotal() {
    let total = 0;

    $(".cart-modal__item, .cart-item").each(function () {
        let priceText = $(this).find(".woocommerce-Price-amount span").text();
        let price = parseFloat(priceText.replace(/[^0-9.,]/g, '')) || 0;
        let quantity = parseFloat($(this).find(".counter_input").val()) || 1;

        total += price * quantity;
    });

    $(".ci_price").text(total.toFixed(2)); // Update the total display
}
	
	function updateCartQuantity() {
    $.ajax({
        type: "POST",
        url: admin_ajax,
        data: { action: "get_cart_quantity" }, // Custom AJAX action to fetch cart quantity
        success: function(response) {
            $(".cart-quantity-js").text(response.total_quantity); // Update quantity in cart icon
        },
        error: function(error) {
            console.error("Error updating cart quantity: ", error);
        }
    });
}


  
  function sendRequest(url, data) {
      if (url && data) {
          $.ajax({
              type: "POST",
              url: url,
              data: data
          }).done(function (r) {
              render(r);
          });
      }
  }
  
  function getHash() {
      var hash = window.location.hash;
      if (hash) {
          const is_fullPage = $('body').find('#fullpage').length;
          const $body = $('html, body');
  
          const $elem = $(hash);
  
          if ($elem) {
              var scrollTop = $(window).width() < 1023 ? $elem.offset().top - $('.header').height() : $elem.offset().top;
              scrollTop = is_fullPage == 0 ? $elem.offset().top - $('.header').height() - 50 : scrollTop;
              if (is_fullPage == 0) $body.scrollTop(0);
              $body.animate({
                  scrollTop: scrollTop
              }, 1000);
              return false;
          }
      }
  }
  
  function addClassesToCheckout() {
  
      jQuery('.form-row').addClass('form-group');
      jQuery('.checkout').find('input[type="text"], input[type="email"], input[type="tel"]').addClass('input_st');
      jQuery('#customer_details').addClass('checkout-form');
      jQuery('#order_review').addClass('cart-info');
      jQuery('.woocommerce-checkout').addClass('checkout-group');
      // $('#order_review .cart_item').addClass('cart-info__product-item');
  
      // $('#order_review .product-total').addClass('cip_price');
  
  }
}(jQuery));