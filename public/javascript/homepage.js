$(document).ready(
    $(function () {
        var bar = $("#d4-navbar");
        var navlinks = $(".d4-nav-links");
        var image = $("#logo-image");

        $(document).scroll(function () {

            var scrollTop = $(document).scrollTop();

            if (scrollTop > 0) {
                bar.addClass('navbar-fixed-top on-scroll');
            }

            if (scrollTop === 0) {
                bar.removeClass('navbar-fixed-top on-scroll','0.1s');
            }
        });
    })
)
