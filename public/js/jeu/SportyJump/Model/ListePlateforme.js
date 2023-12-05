const nbPlateforme = 12;

function setListePlateforme() {
    for (let i = 0; i < nbPlateforme; i++) {
        var container = document.createElement("img");
        setImagePlateforme(getType(), 1, container);
        container.classList.add("plateforme");
        var nouvelleLargeur = 160 / getFacteur();
        var nouvelleHauteur = 40 / getFacteur();
        container.style.width = nouvelleLargeur + "px";
        container.style.height = nouvelleHauteur + "px";
        document.getElementById("plateforme").appendChild(container);
    }
}
function getNbPlateforme() {
    return nbPlateforme;
}
function setCooListePlateforme() {
    var p = document.querySelector(".plateforme:nth-child(1)");
    p.style.left = getXTerrain() + 80 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1520 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(2)");
    p.style.left = getXTerrain() + 1030 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1520 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(3)");
    p.style.left = getXTerrain() + 263 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1620 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(4)");
    p.style.left = getXTerrain() + 874 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1620 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(5)");
    p.style.left = getXTerrain() + 457 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1700 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(6)");
    p.style.left = getXTerrain() + 653 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1700 / getFacteur() + "px";

    var p = document.querySelector(".plateforme:nth-child(7)");
    p.style.left = getXTerrain() + 160 / getFacteur() + "px";
    p.style.top = getYTerrain() + 900 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(8)");
    p.style.left = getXTerrain() + 950 / getFacteur() + "px";
    p.style.top = getYTerrain() + 900 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(9)");
    p.style.left = getXTerrain() + 555 / getFacteur() + "px";
    p.style.top = getYTerrain() + 1080 / getFacteur() + "px";

    var p = document.querySelector(".plateforme:nth-child(10)");
    p.style.left = getXTerrain() + 160 / getFacteur() + "px";
    p.style.top = getYTerrain() + 330 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(11)");
    p.style.left = getXTerrain() + 950 / getFacteur() + "px";
    p.style.top = getYTerrain() + 330 / getFacteur() + "px";
    var p = document.querySelector(".plateforme:nth-child(12)");
    p.style.left = getXTerrain() + 555 / getFacteur() + "px";
    p.style.top = getYTerrain() + 500 / getFacteur() + "px";
}

function TransfererCooPlateforme() {
    var x_plateforme = [];
    var y_plateforme = [];
    for (let i = 0; i < getNbPlateforme(); i++) {
        let j = i + 1;
        let p = document.querySelector(".plateforme:nth-child(" + j + ")");
        x_plateforme.push(p.offsetLeft);
        y_plateforme.push(p.offsetTop);
    }
    localStorage.setItem("x_plateforme", JSON.stringify(x_plateforme));
    localStorage.setItem("y_plateforme", JSON.stringify(y_plateforme));
}

function setCooPlateformeForGameOver() {
    var x_plateforme = JSON.parse(localStorage.getItem("x_plateforme"));
    var y_plateforme = JSON.parse(localStorage.getItem("y_plateforme"));
    for (let i = 0; i < getNbPlateforme(); i++) {
        let j = i + 1;
        let p = document.querySelector(".plateforme:nth-child(" + j + ")");
        p.style.left = x_plateforme[i] + "px";
        p.style.top = y_plateforme[i] + "px";
    }
}