var slideIndex = 0;
showSlide();

function showSlide() {
  var i, slides, dots;
  slides = document.getElementsByClassName("the-slides");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) 
  slideIndex = 1;    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dotActive";
  setTimeout(showSlide, 5000);
}
function navigation(){
    var menuOption = document.getElementsByClassName("menu");
    menuOption.className += ".active";
}