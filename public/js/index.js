let slideIndex = 1;
showSlides(slideIndex);

var etape = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
  if(n === -1){
    etape--;
  }
  else{
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
  if (n > slides.length) {
    slideIndex = 1; 
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1] += " active";
}
  
setInterval(checkGen, 500);


function checkGen(){
  if(etape === -1){
    name_check = checkName()
    if(name_check === false){
      plusSlides(1)
      console.log("Name is false")
    }
  }
  if(etape === -2){
    password_check = checkPassword()
    if(password_check === false){
      plusSlides(1)
      console.log("Password is false")
    }
  }
  if(etape === -3){
    email_check = checkMail()
    if(email_check === false){
      plusSlides(1)
      console.log("Email is false")
    }
    else{
      checkform()
    }
  }
}

function checkform(){
  let form = document.getElementsByClassName("forms");
  form[0].submit();
}

  function checkMail(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let a = emailRegex.test(document.getElementById("email").value);
    return a;
  }

  function checkName(){
    const nameRegex = /^[a-zA-Z]+$/;
    let c = nameRegex.test(document.getElementById("username").value);
    return c;
  }

  function checkPassword(){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let b = passwordRegex.test(document.getElementById("password").value);
    return b;
  }