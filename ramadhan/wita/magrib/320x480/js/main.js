$(document).ready(function() {
    $('.banner__time--clock').clock({
        font_size: 48,
        color: '#067A3E',

    });
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
    });
});


(function($) {

    $.fn.clock = function(options) {

        var dataintera = new Date();
        var HH = dataintera.getHours();
        var MM = dataintera.getMinutes();
        var defaults = {
            font_size: 40,
            color: 'black'
        };
        var options = $.extend(defaults, options);

        return this.each(function() {

            var str = '<span class="hh"></span><span class="blink">:</span><span class="mm"></span></span>';
            $(this).html(str).css({
                'font-size': options.font_size + 'px',
                'color': options.color
            });

            if (MM <= 9) {
                $(' span.mm').html('0' + MM);

            } else {
                $(' span.mm').html(MM);
            };

            if (HH <= 9) {
                $(' span.hh').html('0' + HH);

            } else {
                $(' span.hh').html(HH);
            };


            setInterval(function() {
                var dataintera = new Date();
                var HH = dataintera.getHours();
                var MM = dataintera.getMinutes();
                var SS = dataintera.getSeconds();

                if (SS <= 9) {
                    $('span.ss').html('0' + SS);
                } else {
                    $('span.ss').html(SS);
                };

                if (MM <= 9) {
                    $('span.mm').html('0' + MM);
                } else {
                    $('span.mm').html(MM);
                };

                if (HH <= 9) {
                    $('span.hh').html('0' + HH);
                } else {
                    $('span.hh').html(HH);
                };

            }, 1000);

        });

    };
})(jQuery);

var initialDate = new Date(2023, 2, 22);
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);
document.getElementById('days_ramadhan').innerHTML = daysSince;
window.onload = function() {
    startTime()
};


function startTime() {
    var today = new Date();

    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function() {
        startTime()
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}