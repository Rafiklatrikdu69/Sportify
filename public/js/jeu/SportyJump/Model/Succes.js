const succes = document.getElementById("circleSucces"); 
const cadre = document.getElementById("rectangleSucces"); 
const icone = document.querySelectorAll(".cadreSucces"); 

var visible = false; 
var fixed = false; 
var timer; 

function start(){
    timer = setInterval(function(){
        cadre.style.visibility = "hidden";
        cadre.style.transition = "height 0.3s";
    }, 200); 
}
function stop(){
    clearInterval(timer); 
}

succes.addEventListener("click", function(){
    if(!fixed){
        fixed = true; 
        cadre.style.transition = "height 0.5s"; 
        cadre.style.height = "85%"; 
    }else{
        fixed = false;
        visible = false; 
        cadre.style.height = "10%";  
    }
}); 
succes.addEventListener("mouseover", function(){
    document.getElementById("circleSucces").style.backgroundColor = "#40A798";
    document.getElementById("trophée").src = "../../../images/succès/trophée2.png"; 
    stop(); 
    if(!fixed){
        visible = true;    
        cadre.style.display = "block";
        cadre.style.visibility = "visible";  
        cadre.style.height = "10%";
    }
}); 
succes.addEventListener("mouseout", function(){
    document.getElementById("circleSucces").style.backgroundColor = "#000";
    document.getElementById("trophée").src = "../../../images/succès/trophée.png"; 
    stop(); 
    if(!fixed){
        visible = false; 
        cadre.style.height = "0%"; 
        start(); 
    }
}); 

const suce = document.querySelectorAll(".categorieSucces"); 
suce.forEach(function(categorie){
    var cadre = categorie.querySelectorAll(".cadreSucces .descriptionSucces"); 
    var id = 1; 
    cadre.forEach(function(s){ 
        if(id%5 == 2){
            s.style.left = "25%"; 
            s.style.transform = "translateX(-25%)"; 
        }else if(id%5 == 3){
            s.style.left = "50%"; 
            s.style.transform = "translateX(-50%)"; 
        }else if(id%5 == 4){
            s.style.left = "75%"; 
            s.style.transform = "translateX(-75%)"; 
        }else if(id%5 == 0){
            s.style.left = "95%"; 
            s.style.transform = "translateX(-95%)"; 
        }
        id++; 
    })    
}); 


icone.forEach(function(e){
    var desc = e.querySelector(".descriptionSucces2"); 
    var img = e.querySelector("img");

    img.addEventListener("mouseover", function(){
        img.style.height = 50 + "px"; 
        img.style.width = 50 + "px"; 
        desc.style.opacity = "1"; 
    });

    img.addEventListener("mouseout", function(){ 
        img.style.height = 60 + "px"; 
        img.style.width = 60 + "px"; 
        desc.style.opacity = "0"; 
    });  
}); 
