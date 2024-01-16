const btInscription = document.getElementById("btInscription"); 
const btConnection = document.getElementById("btConnecter"); 

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

btConnection.addEventListener("click", btConnectionClick);
btConnection.addEventListener("mouseout", buttonReleasedC);
btConnection.addEventListener("mouseover", buttonPressedC);
