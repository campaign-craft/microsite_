$(document).ready(function() {
    // s backtotop
    var toggleHeight = $(window).outerHeight() * 1;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // e backtotop
    $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

});
// swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: ".swiper-pagination",
    effect: 'ease',
    speed: 1000,
    slidesPerView: '1',
    paginationClickable: true,
    autoplay: false,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "slide",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

});

const gallerySlider = new Swiper(".swiper.is-gallery", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    speed: 300,
    grabCursor: true,
    parallax: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
});

// animated
bodymovin
var animation = bodymovin.loadAnimation({
    container: document.getElementById('sepeda'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sepeda.json',
    name: 'myAnimation',
});
bodymovin
var animation = bodymovin.loadAnimation({
    container: document.getElementById('sinyal1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('sinyal2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',

});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',

});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal6'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal7'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal8'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('sinyal9'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/sinyal.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('asap'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/hero/asap.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('productivity'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont1/productivity.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('employment'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont1/employment.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('shopping'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont1/shopping.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('kotak1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/kotak1.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('kotak2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/kotak2.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('kotak3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/kotak3.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('kotak4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/kotak4.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('kotak5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/kotak5.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i1.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i2.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i3.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i4.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i5.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i6'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i6.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i7'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i7.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i8'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i8.json',
    name: 'myAnimation',
});
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('i9'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont5/i9.json',
    name: 'myAnimation',
});

// parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});

// brids
function birdMorph() {
    TweenMax.to('#frontUp', 0.3, {
        transformPerspective: 400,
        transformOrigin: '100% 70%',
        transformStyle: 'preserv3d',
        rotationX: 180,
        y: 70,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#backUp', 0.3, {
        transformPerspective: 400,
        transformOrigin: '100% 70%',
        transformStyle: 'preserv3d',
        rotationX: 180,
        y: 70,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });


    TweenMax.to('#frontUp', 0.3, {
        morphSVG: {
            shape: '#frontDown'
        },
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#backUp', 0.3, {
        morphSVG: {
            shape: '#backDown',
            shapeIndex: 1
        },
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#gBody', 0.3, {
        y: -25,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#svgBird', 8, {
        x: 1300,
        ease: Power0.easeNone,
        repeat: -1,
        y: -125,
    })
}

function birdMorph1() {
    TweenMax.to('#frontUp1', 0.2, {
        transformPerspective: 400,
        transformOrigin: '100% 70%',
        transformStyle: 'preserv3d',
        rotationX: 180,
        y: 70,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#backUp1', 0.2, {
        transformPerspective: 400,
        transformOrigin: '100% 70%',
        transformStyle: 'preserv3d',
        rotationX: 180,
        y: 70,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });


    TweenMax.to('#frontUp1', 0.2, {
        morphSVG: {
            shape: '#frontDown1'
        },
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#backUp1', 0.2, {
        morphSVG: {
            shape: '#backDown1',
            shapeIndex: 1
        },
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#gBody', 0.2, {
        y: -25,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1
    });
    TweenMax.to('#svgBird1', 12, {
        x: 1300,
        ease: Power0.easeNone,
        repeat: -1
    })
}

birdMorph();
birdMorph1();