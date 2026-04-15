$(document).ready(function() {

    // s preload
    if ($(window).load(function() {
            $("#preloader").delay(3500).fadeOut("slow", function() {
                $(this).remove()
            })
        }))
    // e preload

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

    // click content1

    $(".item1").click(function() {
        // level
        $(".contentMid2__item").addClass("hide");
        $(".contentMid2__item1").addClass("show");
        //men 
        $(".contentMid1__item").addClass("hide");
        $(".contentMid1__item1").addClass("show");
        // warna
        $(".contentLeft1__item1").addClass("grayscaleNone");
        // klik
        $(".contentLeft1__klik1").addClass("hide");
        $(".contentLeft1__klik2").addClass("show");
        // block
        $(".block1").addClass("hide");
    });
    $(".item2").click(function() {
        $(".contentMid2__item1").addClass("hide");
        $(".contentMid2__item2").addClass("show");
        // 
        $(".contentMid1__item1").addClass("hide");
        $(".contentMid1__item2").addClass("show");
        // warna
        $(".contentLeft1__item2").addClass("grayscaleNone");
        // klik
        $(".contentLeft1__klik2").addClass("hide");
        $(".contentLeft1__klik3").addClass("show");
        // block
        $(".block2").addClass("hide");

    });
    $(".item3").click(function() {
        $(".contentMid2__item2").addClass("hide");
        $(".contentMid2__item3").addClass("show");
        // 
        $(".contentMid1__item2").addClass("hide");
        $(".contentMid1__item3").addClass("show");
        // warna
        $(".contentLeft1__item3").addClass("grayscaleNone");
        // klik
        $(".contentLeft1__klik3").addClass("hide");
        $(".contentRight1__klik1").addClass("show");
        // block
        $(".block3").addClass("hide");
    });
    $(".item4").click(function() {
        $(".contentMid2__item3").addClass("hide");
        $(".contentMid2__item4").addClass("show");
        // 
        $(".contentMid1__item3").addClass("hide");
        $(".contentMid1__item4").addClass("show");
        // warna
        $(".contentLeft1__item4").addClass("grayscaleNone");
        // klik
        $(".contentRight1__klik1").addClass("hide");
        $(".contentRight1__klik2").addClass("show");
        // block
        $(".block4").addClass("hide");
    });
    $(".item5").click(function() {
        $(".contentMid2__item4").addClass("hide");
        $(".contentMid2__item5").addClass("show");
        // 
        $(".contentMid1__item4").addClass("hide");
        $(".contentMid1__item5").addClass("show");
        // warna
        $(".contentLeft1__item5").addClass("grayscaleNone");
        // klik
        $(".contentRight1__klik2").addClass("hide");
        $(".contentRight1__klik3").addClass("show");
        // block
        $(".block5").addClass("hide");
    });
    $(".item6").click(function() {
        $(".contentMid2__item5").addClass("hide");
        $(".contentMid2__item6").addClass("show");
        // 
        $(".contentMid1__item5").addClass("hide");
        $(".contentMid1__item6").addClass("show");
        // warna
        $(".contentLeft1__item6").addClass("grayscaleNone");
        // klik
        $(".contentRight1__klik3").addClass("hide");
    });
    // mitos atau fakta
    $(".mitosklik1").click(function() {
        $(".modal.mitos1").addClass("showModal");
    });
    $(".faktaklik1").click(function() {
        $(".modal.fakta1").addClass("showModal");
    });
    $(".mitosklik2").click(function() {
        $(".modal.mitos2").addClass("showModal");
    });
    $(".faktaklik2").click(function() {
        $(".modal.fakta2").addClass("showModal");
    });
    $(".mitosklik3").click(function() {
        $(".modal.mitos3").addClass("showModal");
    });
    $(".faktaklik3").click(function() {
        $(".modal.fakta3").addClass("showModal");
    });
    $(".mitosklik4").click(function() {
        $(".modal.mitos4").addClass("showModal");
    });
    $(".faktaklik4").click(function() {
        $(".modal.fakta4").addClass("showModal");
    });
    $(".mitosklik5").click(function() {
        $(".modal.mitos5").addClass("showModal");
    });
    $(".faktaklik5").click(function() {
        $(".modal.fakta5").addClass("showModal");
    });
    $(".mitosklik6").click(function() {
        $(".modal.mitos6").addClass("showModal");
    });
    $(".faktaklik6").click(function() {
        $(".modal.fakta6").addClass("showModal");
    });
    $(".mitosklik7").click(function() {
        $(".modal.mitos7").addClass("showModal");
    });
    $(".faktaklik7").click(function() {
        $(".modal.fakta7").addClass("showModal");
    });
    $(".modal__content__close").click(function() {
        $(".modal").removeClass("showModal");
    });

});
// swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: ".swiper-pagination",
    speed: 1500,
    paginationClickable: true,
    autoplay: false,
    effect: "slide",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },

});

// bodymovin
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char0.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char1.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char2.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char3.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char4.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate6'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char5.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content1Animate7'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content1/animate/Char6.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content5Animate1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content5/animate/Gymman.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('content11Animate1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/content11/animate/Char7.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/Loader.json',
    name: 'myAnimation',
});