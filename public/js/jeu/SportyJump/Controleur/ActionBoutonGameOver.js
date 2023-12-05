const btJouer = document.getElementById("boutonJouer");
const btMenu = document.getElementById("boutonMenu");

function BoutonPressed() {
    btJouer.addEventListener("mouseover", function () {
        setImageBoutonPressed(btJouer, "Jouer");
    });
    btMenu.addEventListener("mouseover", function () {
        setImageBoutonPressed(btMenu, "Menu");
    });
}
function BoutonReleased() {
    btJouer.addEventListener("mouseout", function () {
        setImageBoutonReleased(btJouer, "Jouer");
    });
    btMenu.addEventListener("mouseout", function () {
        setImageBoutonReleased(btMenu, "Menu");
    });
}
function BoutonClick() {
    btJouer.addEventListener("click", function () {
        removeKeyStorage();
        window.location.href = "Game.html?entier=" + encodeURIComponent(getType());
    });
    btMenu.addEventListener("click", function () {
        removeKeyStorage();
        window.location.href = "Menu.html";
    });
}

function removeKeyStorage() {
    localStorage.removeItem("cooBallon");
    localStorage.removeItem("scoreTexte");
    localStorage.removeItem("typeMonstre");
    localStorage.removeItem("nbPieceTexte");
    localStorage.removeItem("monstreIsNull");
    localStorage.removeItem("cooPiece");
    localStorage.removeItem("x_plateforme");
    localStorage.removeItem("y_plateforme");
    localStorage.removeItem("cooMonstre");
    localStorage.removeItem("pieceIsNull");
}