function PressedDroite(event) {
    if (event.key === 'ArrowRight') {
        setKeyDroite(true);
    }
}
function ReleasedDroite(event) {
    if (event.key === 'ArrowRight') {
        setKeyDroite(false);
    }
}

function PressedGauche(event) {
    if (event.key === 'ArrowLeft') {
        setKeyGauche(true);
    }
}
function ReleasedGauche(event) {
    if (event.key === 'ArrowLeft') {
        setKeyGauche(false);
    }
}
document.addEventListener("keyup", ReleasedGauche);
document.addEventListener("keydown", PressedGauche);
document.addEventListener("keyup", ReleasedDroite);
document.addEventListener("keydown", PressedDroite);