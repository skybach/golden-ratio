$.extend({
    gr: function(jqobj) {

        // find immediate child small GR
        var smallGR = $('>.small-gr', jqobj);
        console.log(smallGR);

        // find immediate child large GR
        var largeGR = $('>.large-gr', jqobj);
        console.log(largeGR);

        var gr = 0.5 * (1 + Math.sqrt(5));

        // determine to split by width or height
        if (jqobj.hasClass('width-gr')) {

            var width = jqobj.width();
            var smallWidth = (gr-1) * width / gr;
            var largeWidth = width / gr;

            console.log(width);
            console.log(smallWidth);
            console.log(largeWidth);

            jqobj.css('display', '-webkit-box');
            jqobj.css('-webkit-box-orient', 'horizontal');
//            smallGR.css('-webkit-box-flex', '0');
//            largeGR.css('-webkit-box-flex', '1');

            smallGR.width(smallWidth);
            largeGR.width(largeWidth);

            $.gr(smallGR);
            $.gr(largeGR);

        } else if (jqobj.hasClass('height-gr')) {

            var height = jqobj.height();
            var smallHeight = (gr-1) * height / gr;
            var largeHeight = height / gr;

            console.log(height);
            console.log(smallHeight);
            console.log(largeHeight);

            jqobj.css('display', '-webkit-box');
            jqobj.css('-webkit-box-orient', 'vertical');
//            smallGR.css('-webkit-box-flex', '0');
//            largeGR.css('-webkit-box-flex', '1');

            smallGR.height(smallHeight);
            largeGR.height(largeHeight);

            $.gr(smallGR);
            $.gr(largeGR);
        }
    }
});
// jqobj is a jquery object
