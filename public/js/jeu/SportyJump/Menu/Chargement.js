let timerChargement;
let timerChargement2;
var creation = false;

function startTimerChargement() {
    timerChargement = setInterval(function () {
        window.location.href = "Game.html?entier=" + encodeURIComponent(getType());
        stopTimerChargement();
    }, 3000);
}

function stopTimerChargement() {
    clearInterval(timerChargement);
}

function AfficherChargement() {
    if (!creation) {
        var chargementContainer = document.createElement('img');
        chargementContainer.src = 'Dessin/Menu/chargement.gif';
        chargementContainer.alt = "mon image";
        chargementContainer.id = "chargementContainer";

        var chargement = document.getElementById("chargementContainer");
        chargement.appendChild(chargementContainer);

        // Attendez que l'image soit chargée avant de récupérer ses dimensions
        chargementContainer.addEventListener('load', function () {
            chargementContainer.style.position = "absolute";
            chargementContainer.style.left = getXTerrain() + 375 / getFacteur() + "px";
            chargementContainer.style.top = getYTerrain() + 1450 / getFacteur() + "px";

            var nouvelleLargeur = chargementContainer.width / getFacteur();
            var nouvelleHauteur = chargementContainer.height / getFacteur();
            chargementContainer.style.width = nouvelleLargeur + "px";
            chargementContainer.style.height = nouvelleHauteur + "px";
        });
        creation = true;
    }
    startTimerChargement();
}

