const openBtn = document.getElementsByClassName("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");


for (i of openBtn) {
    i.addEventListener("click",()=>{
        modal.classList.add("open");
    });
  }


closeBtn.addEventListener("click",()=>{
    modal.classList.remove("open")
})

function reply_click(clicked_id){
    var parties = clicked_id.split(/\+/);
    document.getElementById("match_joue").innerHTML = parties[1];
    document.getElementById("cote_joue").innerHTML = parties[0];
}

document.addEventListener('DOMContentLoaded', function () {

    var miseInput = document.getElementById('mise');
    var gainOutput = document.getElementById('gain');
    var pariForm = document.getElementById('pariForm');


    miseInput.addEventListener('input', function () {
        var mise = parseFloat(miseInput.value);
        
        var cote = parseFloat(document.getElementById('cote_joue').innerText);
        if (!isNaN(mise) && !isNaN(cote)) {
            var gainPotentiel = mise * cote;
            gainOutput.textContent = 'Votre gain potentiel est de : ' + gainPotentiel.toFixed(2);
        }
        else {
            gainOutput.textContent = 'Veuillez entrer des valeurs valides pour la mise.';
        }
    });

    // Ajouter un gestionnaire d'événements pour le formulaire
    pariForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Ajouter ici la logique pour soumettre le formulaire si nécessaire
    });


});