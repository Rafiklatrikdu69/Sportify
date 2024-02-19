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


function setSucces(){
    fetch("/public/json-jeu-getAffichageSucces")
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
        changeOpacitySucces(data); 
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        return null; 
    });
}
 
function changeOpacitySucces(tab){
    var img = document.querySelectorAll(".cadreSucces img");
    let indice = 0;  
    img.forEach(function(e){
        if(tab[indice][0] == "TRUE"){
            e.style.opacity = "100%"; 
        }
        indice ++; 
    })
}

function updateSuccesById(id){
    function Score (score){
        this.score = score;
    }
    e = new Score(id);
    fetch("/public/json-jeu-UpdateSucces", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json; charset=utf-8"
        },
      
        "body": JSON.stringify(e)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
}