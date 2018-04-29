// smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, 'swing', function () {
	        window.location.hash = target;
	    });
    
    $('.navbar-collapse').collapse('hide');
	});
});

//scroll to top 
$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-default"><span class="glyphicon glyphicon-chevron-up"></span> </div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });
});

//thumbnails captions
 $(document).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.thumb-caption').fadeIn(250); 
        },
        function(){
            $(this).find('.thumb-caption').fadeOut(250);
        }
    ); 
 });


$(function() {
	var $contactForm = $('#contact-form');
  var $message = $('.success-message');
	$contactForm.on('submit', function(e) {
    //$message.hide();
    e.preventDefault();
		$.ajax({
			url: '//formspree.io/jetrica.kerempuh@gmail.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
			}
		}).done(function(data) {
		}).always(function() {
		});
    $message.show().delay(3000).fadeOut();
    $message.click(function() {
      $(this).hide();
    });
    $(this).get(0).reset();
	});
  	
});