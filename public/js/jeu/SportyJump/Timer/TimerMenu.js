let intervalId;
const plateforme = document.getElementById("plateforme");
function startTimerMenu() {
    intervalId = setInterval(function () {
        Fall();
        IsPlateformeTouchForMenu(plateforme);
    }, getRafraichissement());
}

function stopTimerMenu() {
    clearInterval(intervalId);
}


