
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });
        
        $('.menu-close').click(function () {
            $("body").removeClass("navShown");
        });

        $('.contact-modal').click(function (e) {
            e.preventDefault();
            $("body").toggleClass("contactShown")
        });
        $('.contact-menu-close').click(function () {
            $("body").removeClass("contactShown")
        });

        $('.order-btn').click(function (e) {
            $("body").toggleClass("orderShown");
            e.preventDefault();
        });
        $('.order-modal-close').click(function () {
            $("body").removeClass("orderShown");
        });

        if ($('.home-content-marquee').length) {
            $('.home-content-marquee').marquee({
                direction: 'left',
                duration: 50000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }
        
        if ($('.first-thumb').length) {
            $('.first-thumb').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1800,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
                fade: true,
            });
            $(window).on('resize', function () {
                $('.first-thumb').slick('resize');
            });
        }
        if ($('.second-thumb').length) {
            setTimeout(function () {
                $('.second-thumb').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.second-thumb').slick('resize');

                });
            }, 700)
        }
        if ($('.third-thumb').length) {
            setTimeout(function () {
                $('.third-thumb').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.third-thumb').slick('resize');

                });
            }, 1200)
            
        }
          if ($('.home-content-item-slider').length) {
        $('.home-content-item-slider').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1400,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.home-content-item-slider').slick('resize');

                });
         }
        if ($('.fourth-thumb').length) {
            setTimeout(function () {
                $('.fourth-thumb').slick({
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 1800,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    fade: true,
                });
                $(window).on('resize', function () {
                    $('.fourth-thumb').slick('resize');

                });
            }, 200)
        }
		
	})// End ready function.
   
    

	

})(jQuery)

