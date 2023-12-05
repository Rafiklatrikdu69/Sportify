const banderole = document.getElementById("banderole");
const vitesseBanderole = 80 / getFacteur();

function getXBanderole() {
    return banderole.offsetLeft;
}
function getYBanderole() {
    return banderole.offsetTop;
}
function setXBanderole(new_x) {
    banderole.style.left = new_x + "px";
}
function setYBanderole(new_y) {
    banderole.style.top = new_y + "px";
}
function defilementBanderoleDroite() {
    banderole.style.left = banderole.offsetLeft - vitesseBanderole + "px";
}
function defilementBanderoleGauche() {
    banderole.style.left = banderole.offsetLeft + vitesseBanderole + "px";
}