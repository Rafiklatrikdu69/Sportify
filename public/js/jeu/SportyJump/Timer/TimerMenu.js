let intervalId;
const plateforme = document.getElementById("plateforme");
function startTimerMenu() {
    intervalId = setInterval(function () {
        Fall();
        IsPlateformeTouch(plateforme);
    }, getRafraichissement());
}

function stopTimerMenu() {
    clearInterval(intervalId);
}


