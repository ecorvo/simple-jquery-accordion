(function($) {
    $.fn.simpleAccordion = function(options) {
        var settings = $.extend({}, {open: false}, options);
        return this.each(function() {
            var dts = $(this).children('dt');
            dts.click(sa_click);
            dts.each(sa_reset);
            if (settings.open)
                $(this).children('dt:first-child').next().show();
        });

        function sa_click() {
            $(this).siblings('dt').each(sa_hide);
            $(this).next().slideDown('fast');
            return false;
        }

        function sa_hide() {
            $(this).next().slideUp('fast');
        }

        function sa_reset() {
            $(this).next().hide();
        }
    }
})(jQuery);