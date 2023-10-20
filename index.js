let btnRight = document.querySelector(".right");
btnRight.addEventListener("click", slideDroite)
function slideDroite() {
    alert ("right!");
  }
  function slideGauche() {
    alert ("left!");
  }
  let btnLeft = document.querySelector(".left");
  btnLeft.addEventListener("click", slideGauche)

//slide
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName(".pos-nom");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
  
}