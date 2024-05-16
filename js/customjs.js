// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 3000,
//   touch: false,
//   hover: false,
//   pause: false,
// })

$(document).ready(function () {
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });


  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    dots: true,
    autoplayHoverPause: true,
    mergeFit: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  })

  var owl = $(".owl-carousel");
	owl.owlCarousel();
	$(".next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});

});


//<=====FAQ=====>
  jQuery(document).ready(function(){
    jQuery('.titleWrapper').click(function(){
      var toggle = jQuery(this).next('div#descwrapper');
      jQuery(toggle).slideToggle("slow");
    });
      jQuery('.inactive').click(function(){
      jQuery(this).toggleClass('inactive active');
    });
  });