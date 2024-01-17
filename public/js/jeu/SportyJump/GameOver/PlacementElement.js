function PlacementBallonHitBoxSaut() {
    var ballonHitBoxSaut = document.getElementById("ballonHitBoxSaut");
    ballonHitBoxSaut.style.position = "absolute";
    var cooBallon = JSON.parse(localStorage.getItem("cooBallon"));
    ballonHitBoxSaut.style.left = cooBallon[0] + "px";
    ballonHitBoxSaut.style.top = cooBallon[1] + "px";
}
function PlacementBallonHitBoxGet() {
    var ballon = document.getElementById("ballonHitBoxGet");
    ballon.style.position = "absolute";
}
function PlacementBallonImage() {
    var ballon = document.getElementById("ballonImage");
    ballon.style.position = "absolute";
    egaliserCoo();
}

function PlacementMonstre() {
    var cooMonstre = JSON.parse(localStorage.getItem("cooMonstre"));
    var monstreHitBoxAttack = document.getElementById("monstreHitBoxAttack");
    monstreHitBoxAttack.style.position = "absolute";
    monstreHitBoxAttack.style.left = cooMonstre[0] + "px";
    monstreHitBoxAttack.style.top = cooMonstre[1] + "px";

    var monstreHitBoxVulnerable = document.getElementById("monstreHitBoxVulnerable");
    monstreHitBoxVulnerable.style.position = "absolute";
    var monstreImage = document.getElementById("monstreImage");
    monstreImage.style.position = "absolute";
    setImageMonstreGameover();
    egaliserCooMonstre();
}
function PlacementPiece() {
    var piece = document.getElementById("piece");
    var bool = JSON.parse(localStorage.getItem("pieceIsNull"));
    if (bool) {
        piece.classList.add("invisible");
    } else {
        var cooPiece = JSON.parse(localStorage.getItem("cooPiece"));
        piece.style.position = "absolute";
        piece.style.left = cooPiece[0] + "px";
        piece.style.top = cooPiece[1] + "px";
    }
}

const placement1 = 3000 / getFacteur();
const placement2 = 4200 / getFacteur();
const placement3 = 4800 / getFacteur();
const placement4 = 5800 / getFacteur();
const placement5 = 6400 / getFacteur();
function PlacementTitre() {
    var titre = document.getElementById("titre");
    titre.style.position = "absolute";
    titre.style.left = getXTerrain() + 80 / getFacteur() + "px";
    titre.style.top = getYTerrain() + 140 / getFacteur() + placement1 + "px";
}
function PlacementScore() {
    var scoreTexte = JSON.parse(localStorage.getItem("scoreTexte"));
    var nbPieceTexte = JSON.parse(localStorage.getItem("nbPieceTexte"));
    
    function Score (score){
        this.score = score;
    }
    e = new Score(scoreTexte*1)

    fetch('/public/json-jeu-UpdateScoreJeu', {
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

    var s = document.getElementById("actuelScore");
    s.innerHTML = "VOTRE SCORE:" + scoreTexte;
    s.style.position = "absolute";
    s.style.left = getXTerrain() + 160 / getFacteur() + "px";
    s.style.top = getYTerrain() + 1000 / getFacteur() + placement2 + "px";

    var s2 = document.getElementById("meilleurScorePersonnel");
    s2.style.position = "absolute";
    s2.style.left = getXTerrain() + 50 / getFacteur() + "px";
    s2.style.top = getYTerrain() + 1100 / getFacteur() + placement2 + "px";
    s2.style.fontSize = 45 / getFacteur() + "px";

    var s3 = document.getElementById("meilleurScore");
    s3.style.position = "absolute";
    s3.style.left = getXTerrain() + 15 / getFacteur() + "px";
    s3.style.top = getYTerrain() + 1185 / getFacteur() + placement2 + "px";
    s3.style.fontSize = 45 / getFacteur() + "px";

    //FETCH => MEILLEUR SCORE GLOBAL DU JEU; 
    fetch('/public/json-jeu-getMeilleurScore')
    .then(response => response.text())
     .then(data => {
        donnee = JSON.parse(data);
        console.log(donnee); 
        s3.innerHTML = "Meilleur score global:" + donnee[1]; 
     });

    //FETCH => MEILLEUR SCORE PERSONNEL DU JOUEUR; 
    fetch('/public/json-jeu-getMeilleurScoreUser')
    .then(response => response.text())
     .then(data => {
        donnee = JSON.parse(data);
        console.log(donnee); 
        s2.innerHTML = "Votre meilleur score:" + donnee[1];  
     });

    var s4 = document.getElementById("pieceScore");
    s4.innerHTML = "×" + nbPieceTexte;

    var activer = JSON.parse(localStorage.getItem("activerModification"));
    console.log(activer); 
    if(activer){
         function Score (score){
            this.score = score;
        }
        e = new Score(nbPieceTexte*1)
        fetch("/public/json-jeu-insere", {
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
        localStorage.setItem("activerModification", JSON.stringify(false));
    }
    point = document.getElementsByClassName('point-user')[0];
    fetch('/public/json-point-jeu')
        .then(response => response.text())
        .then(data => {
            donnee = JSON.parse(data);
            point.innerHTML= "Vous avez "+donnee[1]+" points";
        });
    
    s4.style.position = "absolute";
    s4.style.left = getXTerrain() + 350 / getFacteur() + "px";
    s4.style.top = getYTerrain() + 1435 / getFacteur() + placement3 + "px";
    s4.style.fontSize = 80 / getFacteur() + "px";
}
function PlacementNbPiece() {
    var nbPiece = document.getElementById("nbPiece");
    nbPiece.style.position = "absolute";
    nbPiece.style.left = 200 / getFacteur() + "px";
    nbPiece.style.top = 1400 / getFacteur() + placement3 + "px"
}
function PlacementBoutonJouer() {
    var btJouer = document.getElementById("boutonJouer");
    btJouer.style.position = "absolute";
    btJouer.style.left = getXTerrain() + 690 / getFacteur() + "px";
    btJouer.style.top = getYTerrain() + 1350 / getFacteur() + placement4 + "px";
}
function PlacementBoutonMenu() {
    var btMenu = document.getElementById("boutonMenu");
    btMenu.style.position = "absolute";
    btMenu.style.left = getXTerrain() + 200 / getFacteur() + "px";
    btMenu.style.top = getYTerrain() + 1650 / getFacteur() + placement5 + "px";
}

