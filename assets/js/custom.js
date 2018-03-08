/**
 * Main JS file for kaldorei behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function() {

        $(window).scroll(function() {
            var scrollerToTop = $('.backTop');
            var scrollerTOC = $('.widget-toc');
            document.documentElement.scrollTop + document.body.scrollTop > 200 ?
                scrollerToTop.fadeIn() :
                scrollerToTop.fadeOut();
            document.documentElement.scrollTop + document.body.scrollTop > 250 ?
                scrollerTOC.addClass("widget-toc-fixed") :
                scrollerTOC.removeClass("widget-toc-fixed");
        });

        // #backTop Button Event
        $("#backTop").on("click", function() {
            scrollToTop();
        });

  
        var toc = $('.toc');
        // toc config
        toc.toc({
            content: ".post-content",
            headings: "h2,h3,h4,h5"
        });

        if (toc.children().length == 0) $(".widget-toc").hide();

        var tocHieght = toc.height();
        var tocFixedHeight = $(window).height() - 192;
        tocHieght > tocFixedHeight ?
            toc.css('height', tocFixedHeight) :
            toc.css('height', tocHieght)

        $(window).resize(function() {
            var tocFixedHeight = $(this).height() - 192;
            tocHieght > tocFixedHeight ?
                toc.css('height', tocFixedHeight) :
                toc.css('height', tocHieght)
        })

        // toc animate effect
        // bind click event to all internal page anchors
        $('a.data-scroll').on('click', function(e) {
            // prevent default action and bubbling
            e.preventDefault();
            e.stopPropagation();
            // set target to anchor's "href" attribute
            // Thanks to @https://github.com/xiongchengqing fixed this bug.
            var target = document.getElementById($(this).attr('href').split('#')[1]);
            console.log(target);
            // scroll to each target
            $(target).velocity('scroll', {
                duration: 500,
                easing: 'ease-in-out'
                //easing: 'spring'
            });
        });

    });

})(jQuery);

function scrollToTop(name, speed) {
    if (!speed) speed = 300
    if (!name) {
        $('html,body').animate({
            scrollTop: 0
        }, speed)
    } else {
        if ($(name).length > 0) {
            $('html,body').animate({
                scrollTop: $(name).offset().top
            }, speed)
        }
    }
}
