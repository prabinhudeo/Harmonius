jQuery(document).ready(function ($) {

    var nav_offset_top = $("header").height() + 120;

    // header animation on scroll
    function navbarFixed() {
        if ($(".ph-header").length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop(),
                    slowscroll = scroll / 2;
                if (scroll >= nav_offset_top) {
                    $(".ph-header").addClass("header_fixed");

                } else {
                    $(".ph-header").removeClass("header_fixed");
                    //   $('.billboard').css({
                    //  transform: "translateY(0)"
                    //  });
                }
            });
        }
    }

    navbarFixed();

    // dropdown menu
    $('.menu-item-has-children > a').each(function () {
        $(this).after("<span class='sub-toggle'><i class='ph-icon fa fa-angle-down'></i></span>");
    });

    $(document).on('click', '.sub-toggle', function () {
        $(this).toggleClass('active').next('ul').slideToggle();
    });


    // Ham menu trigger
    $(document).on('click', '.ham-icon', function () {
        $('.ph-header__wrapper').toggleClass('active');
        $('.ham-menu').toggleClass('active');
        $('.ph-header__menu ul').slideToggle();
    });







});