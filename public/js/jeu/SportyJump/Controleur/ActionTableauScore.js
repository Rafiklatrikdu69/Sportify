var bouton = document.getElementById("boutonMenu");
function boutonReleased(){
    bouton.style.fontSize = "35px"; 
    bouton.style.marginTop = "7%"; 
}
function boutonPressed(){
    bouton.style.fontSize = "27px"; 
    bouton.style.marginTop = "7.5%";
}
function boutonClick(){
    window.location.href = "Menu.html"; 
}
bouton.addEventListener("click", boutonClick); 
bouton.addEventListener("mouseover", boutonPressed); 
bouton.addEventListener("mouseout", boutonReleased); 