//var damaxMobileIndicator = jQuery('#damax_mobile_indicator');

//* Load
$(window).bind('load', function () {
    damaxStickyHeader();
    move();
});

//* Resize
$(window).resize(function () {

});

//* Scroll
$(window).scroll(function () {
    damaxStickyHeader();
});

//* Register
function damaxRegister() {
    damaxToggleMenu();
    damaxStickyHeader();
    move();
}
damaxRegister();


//** BEG CUSTOM FUNCTIONS **//s


function damaxStickyHeader() {
    if ($(window).scrollTop() > $(window).height()) {
        $('.header').addClass("sticky_header");
    } else {
        $('.header').removeClass("sticky_header");
    }
}


function damaxToggleMenu() {


$(".lang button").click(function () {
            $(".lang-list").toggleClass("active");
    });


$(".menu-link").click(function () {
            $(".menu").addClass("active");
            $("body").addClass("menu-expand");
    });

$(".close-menu").click(function () {
            $(".menu").removeClass("active");
            $("body").removeClass("menu-expand");
    });

    $(".program-btn-one").click(function () {
        if (jQuery(window).width() < 992) {
            $(".program-info-one").slideToggle();
            $(this).toggleClass("active");
        }
    });

    $(".program-btn-two").click(function () {
        if (jQuery(window).width() < 992) {
            $(".program-info-two").slideToggle();
            $(this).toggleClass("active");
        }
    });

    $(".program-btn-three").click(function () {
        if (jQuery(window).width() < 992) {
            $(".program-info-three").slideToggle();
            $(this).toggleClass("active");
        }
    });

}


$('.popup-btn').magnificPopup({
    type: 'inline',
    duration: 400,
    removalDelay: 500,
    callbacks: {
        beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
     }
 },
 midClick: true
});

$('.close-popup').click(function(event) {
    event.preventDefault();
    $.magnificPopup.close();
});


(function($) {
  "use strict"; 

  $('.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top + 10)
      }, 1000);
        return false;
    }
}
});


$('.js-scroll-trigger').click(function() {
    $(".menu").removeClass("active");
    $("body").removeClass("menu-expand");
});


  $('body').scrollspy({
    target: '.nav-scroll',
    offset: 0,
});



})(jQuery); 



var slider = $(".owl-team");

slider.owlCarousel({
    dots: true,
    nav: false,
    items: 4,
    loop: true,
    margin: 50,
    mouseDrag: false,
    dotsContainer: '#team-dots',
    responsive: {
        0: {
            items: 1,
            margin: 40,
        },
        575: {
            items: 2,
        },
        767: {
            items: 3,
            margin: 20,
        },
        992: {
            items: 3,
            margin: 20,
        },
        1200: {
            items: 4,
        }
    }
});


$('#team-dots .owl-dot').click(function () {
    slider.trigger('to.owl.carousel', [$(this).index(), 300]);
});

$('#team-dots .owl-dot').click(function () {
    $('#team-dots .owl-dot').removeClass("active");
    $(this).addClass("active");
});

$('.team-next').click(function () {
    slider.trigger('next.owl.carousel');
})
$('.team-prev').click(function () {
    slider.trigger('prev.owl.carousel', [300]);
})




var slider2 = $(".owl-mission");

slider2.owlCarousel({
    dots: true,
    nav: false,
    items: 1,
    loop: true,
    margin: 10,
    mouseDrag: false,
    dotsContainer: '#mission-dots'
});


$('#mission-dots .owl-dot').click(function () {
    slider2.trigger('to.owl.carousel', [$(this).index(), 300]);
});


$('#mission-dots .owl-dot').click(function () {
    $('#mission-dots .owl-dot').removeClass("active");
    $(this).addClass("active");
});


var slider3 = $(".owl-review");

slider3.owlCarousel({
    dots: true,
    nav: false,
    items: 1,
    loop: true,
    margin: 10,
    mouseDrag: false,
    animateOut: 'fadeOut',
    dotsContainer: '#review-dots'
});


$('#review-dots .owl-dot').click(function () {
    slider3.trigger('to.owl.carousel', [$(this).index(), 300]);
});

$('#review-dots .owl-dot').click(function () {
    $('#review-dots .owl-dot').removeClass("active");
    $(this).addClass("active");
});

$('.review-next').click(function () {
    slider3.trigger('next.owl.carousel');
})
$('.review-prev').click(function () {
    slider3.trigger('prev.owl.carousel', [300]);
})



var flipContainer = $('.flipster'),
flipItemContainer = flipContainer.find('.flip-items'),
flipItem = flipContainer.find('li');

flipContainer.flipster({
    itemContainer: flipItemContainer,
    itemSelector: flipItem,
    loop: true,
    start: 0,
    nav: false,
    style: 'flat',
    spacing: -0.69,
    start: 'center',
})



var indexs = $(".flipster__item--current").index(); 

$('.flip-dots .flip-dot').eq(indexs).addClass('active');


$('.flip-next').click(function () {
    flipContainer.flipster('next');


var inddd = $(".flipster__item--current").index();     

$('.flip-dots .flip-dot').removeClass("active");
$('.flip-dots .flip-dot').eq(inddd).addClass('active');

})



$('.flip-prev').click(function () {
    flipContainer.flipster('prev');

    var inddds = $(".flipster__item--current").index();

    $('.flip-dots .flip-dot').removeClass("active");
$('.flip-dots .flip-dot').eq(inddds).addClass('active');
})


$('.flip-dots .flip-dot').click(function () {
    flipContainer.flipster('jump', $(this).index());
});


$('.flip-dots .flip-dot').click(function () {
    $('.flip-dots .flip-dot').removeClass("active");
    $(this).addClass("active");
});


$(".video-mp").parent().click(function(e) {
    e.preventDefault(), $(this).children(".video-mp").get(0).paused ? ($(this).children(".video-mp").get(0).play(), $(this).children(".play-btn").fadeOut()) : ($(this).children(".video-mp").get(0).pause(), $(this).children(".play-btn").fadeIn())
})



$('img.svg').each((i, e) => {
    var $img = $(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, (data) => {
        let $svg = $(data).find('svg');
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', `${imgClass}replaced-svg`);
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
        }
        $img.replaceWith($svg);
    }, 'xml');
});



$(window).load(function () {
    $(".preloader").delay(2800).fadeOut(2000);
});


var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("preloaderBar");
        var percent = document.getElementById("percent");
        var width = 10;
        var id = setInterval(frame, 30);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                percent.innerHTML = width + "%";
            }
        }
    }
}


wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true,        // default
    mobile:       !1,
}
)
wow.init();
