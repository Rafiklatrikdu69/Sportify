const succes = document.getElementById("circleSucces"); 
const cadre = document.getElementById("retangleSucces"); 
const icone = document.querySelectorAll(".cadreSucces img"); 

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

icone.forEach(function(e){
    e.addEventListener("mouseover", function(){
        e.style.height = 50 + "px"; 
        e.style.width = 50 + "px"; 

        var id = findSuccesId(e); 
        document.getElementById("desc"+ id).style.opacity = "1"; 
    });

    e.addEventListener("mouseout", function(){
        e.style.height = 60 + "px"; 
        e.style.width = 60 + "px"; 

        var id = findSuccesId(e); 
        document.getElementById("desc"+ id).style.opacity = "0"; 
    });  

    e.addEventListener("click", function(){

    }); 
}); 

function findSuccesId(e){
    var id = 3; 
        switch(e.id){
            case "img1" : id = 1; 
                break;
            case "img2" : id = 2; 
                break; 
            case "img3" : id = 3; 
                break;
            case "img4" : id = 4; 
                break;
            case "img5" : id = 5; 
                break; 
            case "img6" : id = 6; 
                break;
            case "img7" : id = 7; 
                break;
            case "img8" : id = 8; 
                break; 
            case "img9" : id = 9; 
                break;
            case "img10" : id = 10; 
                break;
            case "img11" : id = 11; 
                break; 
            case "img12" : id = 12; 
                break;
            case "img13" : id = 13; 
                break;
            case "img14" : id = 14; 
                break; 
            case "img15" : id = 15; 
                break;
            case "img16" : id = 16; 
                break;
            case "img17" : id = 17; 
                break; 
            case "img18" : id = 18; 
                break;
            case "img19" : id = 19; 
                break;
            case "img20" : id = 20; 
                break; 
            case "img21" : id = 21; 
                break;
            case "img22" : id = 22; 
                break;
            case "img23" : id = 23; 
                break; 
            case "img24" : id = 24; 
                break;
            case "img25" : id = 25; 
                break;
            case "img26" : id = 26; 
                break; 
            case "img27" : id = 27; 
                break;
            case "img28" : id = 28; 
                break;
            case "img29" : id = 29; 
                break; 
            case "img30" : id = 30; 
                break;
        }
    return id; 
}

const categorie = document.getElementById("retangleSucces2"); 

categorie.chi
