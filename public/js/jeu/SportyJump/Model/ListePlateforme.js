var nbPlateforme;
if (getType() == 5) {
    nbPlateforme = 12;
} else {
    nbPlateforme = 20;
}

function setListePlateforme() {
    var plateforme = document.getElementById("plateforme");
    var nouvelleLargeur = 160 / getFacteur();
    var nouvelleHauteur = 40 / getFacteur();
    plateforme.style.position = "absolute";
    plateforme.style.width = nouvelleLargeur + "px";
    plateforme.style.height = nouvelleHauteur + "px";
    setImagePlateforme(getType(), 1, plateforme);
    for (let i = 0; i < nbPlateforme; i++) {
        var p = plateforme.cloneNode(true);
        p.classList.add("plateforme");
        p.id = "plateforme" + i;
        document.getElementById("plateforms").appendChild(p);
    }
    plateforme.classList.add("invisible");
}
function getNbPlateforme() {
    return nbPlateforme;
}
function setCooListePlateforme() {
    var p = document.getElementById("plateforme0");
    p.style.left = getXTerrain() + 80 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1520 / getFacteur() + "px";
    var p = document.getElementById("plateforme1");
    p.style.left = getXTerrain() + 1030 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1520 / getFacteur() + "px";
    var p = document.getElementById("plateforme2");
    p.style.left = getXTerrain() + 263 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1620 / getFacteur() + "px";
    var p = document.getElementById("plateforme3");
    p.style.left = getXTerrain() + 874 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1620 / getFacteur() + "px";
    var p = document.getElementById("plateforme4");
    p.style.left = getXTerrain() + 457 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1700 / getFacteur() + "px";
    var p = document.getElementById("plateforme5");
    p.style.left = getXTerrain() + 653 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1700 / getFacteur() + "px";

    var p = document.getElementById("plateforme6");
    p.style.left = getXTerrain() + 160 / getFacteur() + "px";
    p.style.top = getYTerrain() + 900 / getFacteur() + "px";
    var p = document.getElementById("plateforme7");
    p.style.left = getXTerrain() + 950 / getFacteur() + "px";
    p.style.top = getYTerrain() + 900 / getFacteur() + "px";
    var p = document.getElementById("plateforme8");
    p.style.left = getXTerrain() + 555 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1080 / getFacteur() + "px";

    var p = document.getElementById("plateforme9");
    p.style.left = getXTerrain() + 160 / getFacteur() + "px";
    p.style.top = getYTerrain() + 330 / getFacteur() + "px";
    var p = document.getElementById("plateforme10");
    p.style.left = getXTerrain() + 950 / getFacteur() + "px";
    p.style.top = getYTerrain() + 330 / getFacteur() + "px";
    var p = document.getElementById("plateforme11");
    p.style.left = getXTerrain() + 555 / getFacteur() + "px";
    p.style.top = getYTerrain() + 500 / getFacteur() + "px";

    if (getNbPlateforme() > 12) {
        for (let i = 12; i < getNbPlateforme(); i++) {
            let p = document.getElementById("plateforme" + i);
            p.style.left = -100 + "px";
            p.style.top = 0 + "px";
        }
    }

}

function TransfererCooPlateforme() {
    var x_plateforme = [];
    var y_plateforme = [];
    document.querySelectorAll(".plateforme").forEach(function (p) {
        x_plateforme.push(p.offsetLeft);
        y_plateforme.push(p.offsetTop);
    });
    localStorage.setItem("x_plateforme", JSON.stringify(x_plateforme));
    localStorage.setItem("y_plateforme", JSON.stringify(y_plateforme));
}

function setCooPlateformeForGameOver() {
    var x_plateforme = JSON.parse(localStorage.getItem("x_plateforme"));
    var y_plateforme = JSON.parse(localStorage.getItem("y_plateforme"));
    var i = 0;
    document.querySelectorAll(".plateforme").forEach(function (p) {
        p.style.left = x_plateforme[i] + "px";
        p.style.top = y_plateforme[i] + "px";
        i++;
    });
}
