$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    /*navClass:'owl-dots',*/
    responsive: {
      0: {
        items: 1
      },    
      767: {
        items: 3
      },
    }
  });
});