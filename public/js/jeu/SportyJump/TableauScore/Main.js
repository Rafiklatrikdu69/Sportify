
var tab; 
function getClassement(){ 
   fetch('/public/json-jeu-getClassement')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
    })
    .then(data => {
         setClassement(data);   
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        return null; 
    });
}

function setClassement(tab){
   for(let i=0; i<tab.length; i++){
      var score = document.getElementById("s" + (i + 1)); 
      var pseudo = document.getElementById("p" + (i + 1)); 
      score.innerHTML = tab[i][0];
      pseudo.innerHTML = tab[i][1];
   }
}

window.onload = function () {
    var interface = document.querySelector(".interfaceJeu"); 
    interface.style.backgroundColor = "black"; 
    interface.style.alignItems = "center"; 
    interface.style.justifyContent = "center"; 
    getClassement(); 

    setTerrain();
    document.getElementById("terrain").style.position = "absolute"; 
    document.getElementById("terrain").style.top = 0 + "px"; 
    document.getElementById("terrain").style.opacity = "0"; 
    document.getElementById("terrain").style.zIndex = "-3";
    PlacementBallonHitBoxSaut();
    DefinirTailleBallonHitBoxSaut();

    PlacementBallonHitBoxGet();
    DefinirTailleBallonHitBoxGet();

    PlacementBallonImage();
    DefinirTailleBallonImage();

    PlacementJetPack(); 
    document.getElementById("jet").src = "Dessin/Plateforme/jetpackDecollage.gif";

    startTimerDecollage(); 
}