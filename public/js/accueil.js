const btInscription = document.getElementById("btInscription"); 
const btConnection = document.getElementById("btConnecter"); 
const btProfil = document.getElementById("btProfil"); 
const btFleche = document.getElementById("flecheFin"); 
const fleche = document.getElementById("flecheProfil"); 
const menu1 = document.getElementById("menu1"); 
const menu2 = document.getElementById("menu2"); 
var flecheIsClick = false; 

function buttonPressedI(){
    btInscription.style.backgroundColor = "white"; 
    btInscription.style.color = "black"; 
}
function buttonReleasedI(){
    btInscription.style.backgroundColor = "transparent"; 
    btInscription.style.color = "white"; 
}
function buttonPressedC(){
    btConnection.style.backgroundColor = "white"; 
    btConnection.style.color = "black"; 
}
function buttonReleasedC(){
    btConnection.style.backgroundColor = "transparent"; 
    btConnection.style.color = "white"; 
}
function btInscriptionClick(){
    window.location.href='/public/inscription'; 
}
function btConnectionClick(){
    window.location.href='/public/connexion'; 
}

btInscription.addEventListener("click", btInscriptionClick); 
btInscription.addEventListener("mouseout", buttonReleasedI); 
btInscription.addEventListener("mouseover", buttonPressedI); 

//btConnection.addEventListener("click", btConnectionClick);
btConnection.addEventListener("mouseout", buttonReleasedC);
btConnection.addEventListener("mouseover", buttonPressedC);

btProfil.addEventListener("mouseout", function(){
    if(flecheIsClick){
        document.getElementById("flecheProfil").style.borderBottom = "15px solid #69dac2"; 
    }else{
        document.getElementById("imageProfil").src = "images/profil.png"; 
        document.getElementById("titreProfil").style.color = "white"; 
        document.getElementById("flecheProfil").style.borderTop = "15px solid #ffffff"; 
    }
}); 
btProfil.addEventListener("mouseover", function(){
    document.getElementById("imageProfil").src = "images/profil2.png"; 
    document.getElementById("titreProfil").style.color = "#69dac2"; 
    if(flecheIsClick){
        document.getElementById("flecheProfil").style.borderBottom = "15px solid #69dac2"; 
    }else{
        document.getElementById("flecheProfil").style.borderTop = "15px solid #69dac2"; 
    }
}); 

btProfil.addEventListener("click", function(event){
    event.stopPropagation();
    if(!flecheIsClick){
        flecheIsClick = true; 
        fleche.style.borderBottom = "15px solid #69dac2";
        fleche.style.borderTop = "none";
        document.querySelector(".cadreMenu").style.display = 'block';
    }else{
        flecheIsClick = false; 
        fleche.style.borderTop = "15px solid #69dac2";
        fleche.style.borderBottom = "none";
        document.querySelector(".cadreMenu").style.display = 'none';
    }
}); 

btFleche.addEventListener("mouseout", function(){
    btFleche.style.height = 594 / 3.5 + "px"; 
    btFleche.style.width = 1837 / 3.5 + "px"; 
    btFleche.style.marginTop = "60px";
}); 
btFleche.addEventListener("mouseover", function(){
    btFleche.style.height = 594 / 4 + "px"; 
    btFleche.style.width = 1837 / 4 + "px"; 
    btFleche.style.marginTop = "70px";
}); 
btFleche.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}); 

menu1.addEventListener("mouseout", function(){
    menu1.style.color = "black"; 
}); 
menu1.addEventListener("mouseover", function(){
    menu1.style.color = "#69dac2"; 
}); 
menu2.addEventListener("mouseout", function(){
    menu2.style.color = "black"; 
}); 
menu2.addEventListener("mouseover", function(){
    menu2.style.color = "#69dac2"; 
}); 

menu1.addEventListener("click", function(){
    window.location.href='/public/inscription';  
}); 

window.onload = function () {
    document.querySelector(".cadreMenu").style.left = document.getElementById("flecheProfil").offsetLeft - 47 + "px"; 
}

function removeCadreProfil(){
    flecheIsClick = false; 
    document.getElementById("flecheProfil").style.borderTop = "15px solid #ffffff"; 
    document.getElementById("flecheProfil").style.borderBottom = "none"; 
    document.getElementById("imageProfil").src = "images/profil.png"; 
    document.getElementById("titreProfil").style.color = "white";
    document.querySelector(".cadreMenu").style.display = 'none';
}
window.addEventListener('resize', function(){
    document.querySelector(".cadreMenu").style.left = document.getElementById("flecheProfil").offsetLeft - 47 + "px"; 
});
document.body.addEventListener('click', removeCadreProfil); 