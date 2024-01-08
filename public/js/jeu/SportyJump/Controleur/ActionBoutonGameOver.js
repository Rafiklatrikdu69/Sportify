const btJouer = document.getElementById("boutonJouer");
const btMenu = document.getElementById("boutonMenu");

function BoutonPressed() {
    btJouer.addEventListener("mouseover", function () {
        setImageBoutonPressed(btJouer, "Jouer");
        btJouer.style.cursor = "pointer"; 
    });
    btMenu.addEventListener("mouseover", function () {
        setImageBoutonPressed(btMenu, "Menu");
        btMenu.style.cursor = "pointer"; 
    });
}
function BoutonReleased() {
    btJouer.addEventListener("mouseout", function () {
        setImageBoutonReleased(btJouer, "Jouer");
        btJouer.style.cursor = "default"; 
    });
    btMenu.addEventListener("mouseout", function () {
        setImageBoutonReleased(btMenu, "Menu");
        btMenu.style.cursor = "default"; 
    });
}
function BoutonClick() {
    btJouer.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "Game.html?entier=" + encodeURIComponent(getType());
    });
    btMenu.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "Menu.html";
    });
}
