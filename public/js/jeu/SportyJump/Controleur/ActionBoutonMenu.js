const btJouer = document.getElementById("boutonJouer");
const btClassement = document.getElementById("boutonClassement");
const btFlecheDroite = document.getElementById("flecheDroite");
const btFlecheGauche = document.getElementById("flecheGauche");

function BoutonPressed() {
    btJouer.addEventListener("mouseover", function () {
        btJouer.src = "Dessin/Menu/boutonJouerPresse.png";
    });
    btClassement.addEventListener("mouseover", function () {
        btClassement.src = "Dessin/Menu/boutonClassementPresse.png";
    });
    btFlecheDroite.addEventListener("mouseover", function () {
        btFlecheDroite.src = "Dessin/Menu/boutonDroitePresse.png";
    });
    btFlecheGauche.addEventListener("mouseover", function () {
        btFlecheGauche.src = "Dessin/Menu/boutonGauchePresse.png";
    });
}
function BoutonReleased() {
    btJouer.addEventListener("mouseout", function () {
        btJouer.src = "Dessin/Menu/boutonJouer.png";
    });
    btClassement.addEventListener("mouseout", function () {
        btClassement.src = "Dessin/Menu/boutonClassement.png";
    });
    btFlecheDroite.addEventListener("mouseout", function () {
        btFlecheDroite.src = "Dessin/Menu/boutonDroite.png";
    });
    btFlecheGauche.addEventListener("mouseout", function () {
        btFlecheGauche.src = "Dessin/Menu/boutonGauche.png";
    });
}
function BoutonClick() {
    btJouer.addEventListener("click", function () {
        AfficherChargement();
    });
    btClassement.addEventListener("click", function () {
        console.log("ta mère la trainé");
    });
    btFlecheDroite.addEventListener("click", function () {
        switch (getType()) {
            case 1: setType(2);
                break;
            case 2: setType(3);
                break;
            case 3: setType(4);
                break;
            case 4: setType(5);
                break;
            case 5: setType(6);
                break;
            default:
                break;
        }
        stopTimerDeplacementDroite();
        stopTimerDeplacementGauche();
        startTimerDeplacementDroite();
    });
    btFlecheGauche.addEventListener("click", function () {
        switch (getType()) {
            case 2: setType(1);
                break;
            case 3: setType(2);
                break;
            case 4: setType(3);
                break;
            case 5: setType(4);
                break;
            case 6: setType(5);
                break;
            default:
                break;
        }
        stopTimerDeplacementDroite();
        stopTimerDeplacementGauche();
        startTimerDeplacementGauche();
    });
}