const terrain = document.getElementById("terrain");
var type;
if (getParametreUrl("entier") != null) {
    type = parseInt(getParametreUrl("entier"), 10);
} else {
    type = 1;
}
function setTerrain() {
    var terrain = document.getElementById("terrain");
    var nouvelleLargeur = terrain.width / getFacteur();
    var nouvelleHauteur = terrain.height / getFacteur();
    terrain.style.width = nouvelleLargeur + "px";
    terrain.style.height = nouvelleHauteur + "px";
}

function setTerrainScore() {
    terrain.src = "Dessin/Terrain/TableauDesScores.png";
}

function getXTerrain() {
    return terrain.offsetLeft;
}
function getYTerrain() {
    return terrain.offsetTop;
}
function getLongueurTerrain() {
    return terrain.width;
}
function getLargeurTerrain() {
    return terrain.height;
}

function getType() {
    return type;
}
function setType(new_type) {
    return type = new_type;
}
function getParametreUrl(nomParametre) {
    var url = new URL(window.location.href);
    return url.searchParams.get(nomParametre);
}

function setImageTerrain() {
    switch (getType()) {
        case 2: terrain.src = "Dessin/Terrain/basket.png";
            break;
        case 3: terrain.src = "Dessin/Terrain/tennis.png";
            break;
        case 4: terrain.src = "Dessin/Terrain/baseball.png";
            break;
        case 5: terrain.src = "Dessin/Terrain/rugby.png";
            break;
        case 6: terrain.src = "Dessin/Terrain/bowling.png";
            break;
        default: terrain.src = "Dessin/Terrain/foot.png";
            break;
    }
}


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`Clé: ${key}, Valeur: ${value}`);
}
