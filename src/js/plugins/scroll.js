var scrollWindow = document.querySelector('.header__container-img');
var scrollImg = document.querySelector('.header__container-img');
var scrollSlider = document.querySelector('.header__scroll-slider');

scrollWindow.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = scrollWindow.scrollLeft;
  var width = scrollWindow.scrollWidth - scrollImg.clientWidth;
  var scrolled = (winScroll / width) * 100;
  scrollSlider.style.width = (scrolled) + "%";
};