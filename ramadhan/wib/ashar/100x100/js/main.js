$(document).ready(function() {
    $('.banner__time--clock').clock({
        font_size: 48,
        color: '#067A3E',

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