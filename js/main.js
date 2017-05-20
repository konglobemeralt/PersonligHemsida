
 var $container = $('.portfolio-items').isotope('layout');


// filter items on button click
$('.portfolio-filter').on( 'click', 'a', function(e) {
	e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});