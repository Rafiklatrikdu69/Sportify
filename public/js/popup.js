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
let d = null;
let cote = null;
function reply_click(clicked_id){
    var parties = clicked_id.split(/\+/);
   d =  document.getElementById("match_joue").value = parties[1];
    document.getElementById("cote_joue").innerHTML = parties[0];
   cote =  document.getElementById("cote_joue").value = parties[0];
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
    let pronostique1 = null;
    // Ajouter un gestionnaire d'événements pour le formulaire
    pariForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var mise = parseFloat(miseInput.value);
        console.log(d);
         pronostique1 = new Pronostique(123,  d, cote, '2023-11-24', mise, 0);
        console.log(pronostique1);

        let resultatElement = document.getElementById("resultat");

fetch("../../app/Models/EvenementDAO.php", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json; charset=utf-8"
    },
    "body": JSON.stringify(pronostique1)
})
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        // Mettre à jour le contenu de l'élément avec le résultat
        resultatElement.textContent = data;
    })
    .catch(function (error) {
        console.error('Erreur lors de la requête :', error);
    });


    });


});

function Pronostique(pronostiqueur_id,match_prono,cote_prono,date_prono,mise,status) {
    this.pronostiqueur_id = pronostiqueur_id;
    this.match_prono = match_prono;
    this.cote_prono = cote_prono;
    this.date_prono = date_prono;
    this.mise = mise;
    this.status = status;
}




// Sélectionner un élément avec l'ID "resultat" (ajustez selon votre structure HTML)
