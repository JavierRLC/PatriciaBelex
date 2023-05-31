(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.btt').fadeIn('slow');
        } else {
            $('.btt').fadeOut('slow');
        }
    });

    $('.btt').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    $(".tstms-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    const lnks = document.querySelectorAll('a[href^="#"]');

    lnks.forEach(enlk => {
        enlk.addEventListener('click', (evn) => {            
            evn.preventDefault();
            const tgt = document.querySelector(enlk.getAttribute('href'));
            const init = window.pageYOffset;
            const fin = tgt.getBoundingClientRect().top + init;
            const tm = 1000; 
            const fps = 60; 
            const tdst = fin - init;
            const fpd = tdst / (tm / 1000 * fps);
            function anmdsp() {
                window.scrollBy(0, fpd);
                if (Math.abs(window.pageYOffset - fin) > Math.abs(fpd)) {
                    requestAnimationFrame(anmdsp);
                }            }
            anmdsp();
        });
    }); 
    
    var prtfIsotope = $('.prtf-container').isotope({
        itemSelector: '.prtfi',
        layoutMode: 'fitRows'
    });

    $('#prtf-flters li').on('click', function () {
        $("#prtf-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        prtfIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

