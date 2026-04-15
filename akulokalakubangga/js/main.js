$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".header").addClass("fixshow");
            $(".nav__link").addClass("color-menu");
            $(".home-banner").addClass("spacetop");
            $(".about").addClass("spacetop");
            $(".logo-bsi1").removeClass("show-logo");
            $(".logo-bsi2").removeClass("hide-logo");

        } else {
            $(".logo-bsi1").addClass("show-logo");
            $(".logo-bsi2").addClass("hide-logo");
            $(".header").removeClass("fixshow");
            $(".home-banner").removeClass("spacetop");
            $(".about").removeClass("spacetop");
            $(".nav__link").removeClass("color-menu");
        }
    });

    $('.icon-sosmed').click(function() {
        if ($('.social').hasClass('social-show')) {
            $('.social').removeClass('social-show');
        } else {
            $('.social').addClass('social-show');
        }
    });

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

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
});

// slider
var $swiper = $(".slide2");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide2", {
    spaceBetween: 1,
    slidesPerView: 2.5,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var $swiper = $(".slide3");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide3", {
    slidesPerView: 2.1,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var $swiper = $(".slide4");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide4", {
    slidesPerView: 4.5,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var $swiper = $(".slide5");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide5", {
    slidesPerView: 2.1,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var $swiper = $(".slide6");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide6", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var $swiper = $(".slide7");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide7", {
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false,
        },

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var $swiper = $(".slide8");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide8", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
// pagination
jQuery(function($) {
    var items = $("#content div.item-video3");
    var numItems = items.length;
    var perPage = 8;
    items.slice(perPage).hide();

    $(".pagination-vip").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: "&laquo;",
        nextText: "&raquo;",

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
jQuery(function($) {
    var items = $("#content4 div.item-video4");
    var numItems = items.length;
    var perPage = 6;
    items.slice(perPage).hide();

    $(".pagination-vip").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: "&laquo;",
        nextText: "&raquo;",

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});

// s parallax
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


$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

// cursor
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });


        gsap.set(cursor2, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });


    }
});


window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorScale.forEach(link => {
    link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
        }
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
    });
});

// modal video tik tok
// function videoId(button) {
//     var $videoUrl = button.attr("data-video");
//     if ($videoUrl !== undefined) {
//         var $videoUrl = $videoUrl.toString();

//         return (
//             '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/embed/' +
//             $videoUrl +
//             '" data-video-id="' +
//             $videoUrl +
//             '" style="max-width: 605px;min-width: 325px;"> <section></section></blockquote> <script async src="https://www.tiktok.com/embed.js"></script>'
//         );
//     } else {
//         alert("No video assigned.");
//         return false;
//     }
// }

// $(".lets-play").click(function(e) {
//     e.preventDefault();
//     var $theVideo = videoId($(this));
//     if ($theVideo) {
//         $("body").
//         append(
//             `<div class="active" id="video-wrap">
//                 <span class="video-overlay"></span>
//                     <div class="video-container">
//                         <div class="video-mobile">` + $theVideo + `
//                             <button class="close-video">x</button>
//                         </div>
//                     </div>
//             </div>`).

//         addClass("active");
//     }
// });

// modal video youtube
// function videoIdy(button) {
//     var $videoUrly = button.attr("data-video");
//     if ($videoUrly !== undefined) {
//         var $videoUrly = $videoUrly.toString();
//         srcVideo =
//             "https://www.youtube.com/embed/" +
//             $videoUrly.substring($videoUrly.length - 11, $videoUrly.length) +
//             "?autoplay=1&loop=1&playlist=" +
//             $videoUrly.substring($videoUrly.length - 11, $videoUrly.length) +
//             "";
//         return (
//             '<iframe src="' +
//             srcVideo +
//             '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//         );
//     } else {
//         alert("No video assigned.");
//         return false;
//     }
// }
// $(".lets-playyoutube").click(function(e) {
//     e.preventDefault();
//     var $theVideoy = videoIdy($(this));
//     if ($theVideoy) {
//         $("body").
//         append(
//             `<div class="active" id="video-wrap">
//                 <span class="video-overlay"></span>
//                     <div class="video-container">
//                         <div class="video-youtube">` + $theVideoy + `
//                             <button class="close-video close-youtube">x</button>
//                         </div>
//                     </div>
//             </div>`).

//         addClass("active");
//     }
// });

//modal video reels
// function videoIdr(button) {
//     var $videoUrlr = button.attr("data-video");
//     if ($videoUrlr !== undefined) {
//         var $videoUrlr = $videoUrlr.toString();

//         return (
//             '<iframe src="' +
//             $videoUrlr +
//             'embed" frameborder="0" scrolling="no"></iframe>'
//         );
//     } else {
//         alert("No video assigned.");
//         return false;
//     }
// }

// $(".lets-playr").click(function(e) {
//     e.preventDefault();
//     var $theVideor = videoIdr($(this));
//     if ($theVideor) {
//         $("body").
//         append(
//             `<div class="active" id="video-wrap">
//                 <span class="video-overlay"></span>
//                     <div class="video-container">
//                         <div class="video-instagram">` + $theVideor + `
//                             <button class="close-video close-reels">x</button>
//                         </div>
//                     </div>
//             </div>`).

//         addClass("active");
//     }
// });

// $(document).on("click", ".close-video, .video-overlay", function() {
//     $("#video-wrap").remove();
// });


// dropdown form
(function($) {
    var customSelect = $('select.custom-select');
    customSelect.each(function() {
        var that = $(this);
        var listID = that.attr('id'),
            groups = that.children('optgroup'),
            theOptions = "",
            startingOption = "",
            customSelect = "";
        if (groups.length) {
            groups.each(function() {
                var curGroup = $(this);
                var curName = curGroup.attr('label');
                theOptions += '<li class="optgroup">' + curName + '</li>';
                curGroup.children('option').each(function() {
                    var curOpt = $(this);
                    var curVal = curOpt.attr('value'),
                        curHtml = curOpt.html(),
                        isSelected = curOpt.attr('selected');
                    if (isSelected === 'selected') {
                        startingOption = curHtml;
                        theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                    } else {
                        theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                    }
                });
            });
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                } else {
                    theOptions = '<li data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                }
            });
        } else {
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                } else {
                    theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                }
            });
        }
        customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID + '">' + theOptions + '</ul></div> <!-- .custom-select-wrapper -->';
        $(customSelect).insertAfter(that);
    });

    var selectdd = $('.dropdown-select'),
        selectul = $('.dropdown-select-ul'),
        selectli = $('.dropdown-select-ul li');

    selectdd.on('click', function() {
        $(this).parent('.dropdown-container').toggleClass('active');
    });
    selectul.on('mouseleave', function() {
        $(this).parent('.dropdown-container').removeClass('active');
    });
    selectli.on('click', function() {
        var that = $(this);
        if (!that.hasClass('optgroup')) {
            var parentUl = that.parent('ul'),
                thisdd = parentUl.siblings('.dropdown-select'),
                lihtml = that.html(),
                livalue = that.attr('data-value'),
                originalSelect = '#' + parentUl.attr('data-role');
            parentUl.parent('.dropdown-container').toggleClass('active');
            that.siblings('li').removeClass('selected');
            that.addClass('selected');
            $(originalSelect).val(livalue);
            thisdd.children('span').html(lihtml);
        }
    });
})(jQuery);


// cange value
// $('#option-select').on('change', function() {
//     console.log(this.value);
//     if (this.value == "Media Partner") {
//         $('#recipient').val("me@somewhere.com");
//     }
//     if (this.value == "Iklan") {
//         $('#recipient').val("me@somewhere-else.com");
//     }
//     if (this.value == "Layanan Pelanggan") {
//         $('#recipient').val("not-me@somewhere.com");
//     }
// });

jQuery(document).ready(function($) {

    var popup = {
        init: function() {
            popup.popupVideo();
        },
        popupVideo: function() {

            $('.video_model').magnificPopup({
                type: 'iframe',
                iframe: {
                    markup: '<div>' +
                        '<div class="mfp-iframe-scaler v-tr" >' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen scrolling="no"></iframe>' +
                        '</div></div>'
                },
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                gallery: {
                    enabled: true
                }
            });

            $('.video-yt').magnificPopup({
                type: 'iframe',
                iframe: {
                    markup: '<div>' +
                        '<div class="mfp-iframe-scaler v-yt" >' +
                        '<div class="mfp-close"></div>' +
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen scrolling="no"></iframe>' +
                        '</div></div>'
                },
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                gallery: {
                    enabled: true
                }
            });

        }
    };

    popup.init($);
});