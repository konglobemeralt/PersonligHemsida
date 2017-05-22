
 var $container = $('.portfolio-items').isotope('layout');

$( window ).on( "load", function() {
		$(".avatar").click(function(){
        $(this).shake(2, 10, 400 );
	});
	
	 $container.isotope({
     filter: '.recent'
    });
});
      
$(document).ready(function(){
	 $container.isotope({
     filter: '.recent'
    });
});


// filter items on button click
$('.portfolio-filter').on( 'click', 'a', function(e) {
	e.preventDefault();
	var filterValue = $(this).attr('data-filter');
	$container.isotope({ filter: filterValue });
	
	$('.portfolio-filter li').removeClass('active');
	$(this).closest('li').addClass('active');
});

jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
    this.each(function() {
        $(this).css("position","relative"); 
        for (var x=1; x<=intShakes; x++) {
        $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
    .animate({left:intDistance}, ((intDuration/intShakes)/2))
    .animate({left:0}, (((intDuration/intShakes)/4)));
    }
  });
return this;
};
