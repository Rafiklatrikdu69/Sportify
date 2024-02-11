const succes = document.getElementById("circleSucces"); 

succes.addEventListener("click", function(){

}); 
succes.addEventListener("mouseover", function(){
    document.getElementById("circleSucces").style.backgroundColor = "#40A798";
    document.getElementById("trophée").src = "../../../images/succès/trophée2.png"; 
}); 
succes.addEventListener("mouseout", function(){
    document.getElementById("circleSucces").style.backgroundColor = "#000";
    document.getElementById("trophée").src = "../../../images/succès/trophée.png"; 
}); 

const icone = document.querySelectorAll(".cadreSucces img"); 

icone.forEach(function(e){
    e.addEventListener("mouseover", function(){
        e.style.height = 50 + "px"; 
        e.style.width = 50 + "px"; 
    });

    e.addEventListener("mouseout", function(){
        e.style.height = 60 + "px"; 
        e.style.width = 60 + "px"; 
    });  
}); 