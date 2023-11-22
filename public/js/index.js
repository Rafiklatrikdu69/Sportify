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
    if(checkForm() == false){
      console.log("Formulaire non valide");
    }else{
      form[0].submit();
    }
    console.log("Étape égale à 3!");
  }
}

function checkForm(){
  /* verifier le champ email */
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let a = emailRegex.test(document.getElementById("email").value);
  /* verifier le password */
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let b = passwordRegex.test(document.getElementById("password").value);
  /* verifier le champ nom */
    const nameRegex = /^[a-zA-Z]+$/;
    let c = nameRegex.test(document.getElementById("name").value);
    return a && b && c;
}