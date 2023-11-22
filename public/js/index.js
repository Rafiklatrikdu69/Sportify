let slideIndex = 1;
showSlides(slideIndex);

var etape = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
  if(n === -1){
    etape--;
  }else{
    etape++;
  }
  console.log(etape);
}



function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {  
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1] += " active";

}
  
setInterval(checkEtape, 500);

function checkEtape() {
  console.log("Étape: " + etape);
  if (etape === -3) {
    let form = document.getElementsByClassName("forms");
    form[0].submit();
    console.log("Étape égale à 3!");
  }
}
