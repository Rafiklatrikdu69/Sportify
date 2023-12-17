document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.getElementById("closeModalR");
    const modal = document.getElementById("modalR");
    const activate = document.getElementById("DailyReward");

    if(activate.textContent == "Vous avez gagné 10 points pour votre connexion quotidienne !"){
        modal.classList.add("open");
    }


    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
        window.location.reload();
    });


});


