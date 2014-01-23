(function($) {
    $.fn.simpleAccordion = function(options) {
        //start options
        var opts = $.extend(
                {},
                {open: false},
        {width: '500px'},
        {border: '1px solid #ccc'},
        {borderBottom: 'none'},
        {fontFamily: 'Arial, Helvetica, sans-serif'},
        {fontSize: '12px'},
        {inChildBorderBottom: '1px solid #ccc'},
        {inChildMargin: '0px'},
        {inChildBackground: '#eaeaea'},
        {inChildFontSize: '13px'},
        {inChildFontWeight: 'bold'},
        {inChildPadding: '8px 4px'},
        {inChildCurson: 'pointer'},
        {inChildFontWeight: 'bold'},
        {inChildPadding: '8px 4px'},
        {in2ChildMargin: '0px'},
        {in2ChildPadding: '12px 8px'},
        options
                );
        //end options

        //start styles
        $(this).css({
            'width': opts.width,
            'border': opts.border,
            'border-bottom': opts.borderBottom,
            'font-family': opts.fontFamily,
            'font-size': opts.fontSize
        });
        $(this).children('dt').css({
            'border-bottom': opts.inChildBorderBottom,
            'margin': opts.inChildMargin,
            'background': opts.inChildBackground,
            'cursor': opts.inChildCurson,
            'padding': opts.inChildPadding,
            'font-size': opts.inChildFontSize,
            'font-weight': opts.inChildFontWeight
        });
        //end styles

        $(this).children('dd').css({
            'margin': opts.in2ChildMargin,
            'padding': opts.in2ChildPadding
        });

        //functionalities
        return this.each(function() {
            var dts = $(this).children('dt');
            dts.click(sa_click);
            dts.each(sa_reset);
            if (opts.open)
                $(this).children('dt:first-child').next().show();
        });

        function sa_click() {
            $(this).parent().addClass('maskImg');
            $(this).siblings('dt').each(sa_hide);
            $(this).next().slideDown('fast').addClass('animated fadeInLeft');
            return false;
        }

        function sa_hide() {
            $(this).next().slideUp('fast');
        }

        function sa_reset() {
            $(this).next().hide();
        }
        //end functions

    }
    jQuery.fn.simpleAccordion.defaults = {
        width: '500px',
        border: '1px solid #ccc',
        borderBottom: 'none',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '12px',
    };
})(jQuery);