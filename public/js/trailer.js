$('.xem-trailer').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(aid).offset().top
    }, 'slow');
});
