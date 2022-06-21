$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeEle').each(function () {
            const targetEle = $(this).offset().top + $(this).outerHeight() / 5;
            const scrollTop = $(window).scrollTop() + $(window).height();

            if (scrollTop > targetEle) {
                $(this).animate({ 'opacity': '1' }, 800);
            }
        });
    });
});