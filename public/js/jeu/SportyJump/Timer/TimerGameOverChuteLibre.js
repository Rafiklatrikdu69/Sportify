let chuteLibre;

function startTimerChuteLibre() {
    chuteLibre = setInterval(function () {
        ActionBoutonBallon();
        reculerAllPlateformsGameOver();
        if (isChuteLibreActivate()) {
            deplacementHautBasBallon();
        }
    }, getRafraichissement());
}
function stopTimerChuteLibre() {
    clearInterval(chuteLibre);
}