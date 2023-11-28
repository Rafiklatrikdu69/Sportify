// Definition des const qui vont être utilisées durant tout le code
const boutique = document.getElementById("boutique");
const actu = document.getElementById('actu');
const prono = document.getElementById('prono');
const deconnexion = document.getElementById('deconnexion');

// Ajout des event listener pour enlever le "surlignage" de boutique dans le header lorsque une autre categorie est selectionné
actu.addEventListener('mouseover', chbgon);
actu.addEventListener('mouseout', chbgout);
prono.addEventListener('mouseover', chbgon);
prono.addEventListener('mouseout', chbgout);
deconnexion.addEventListener('mouseover', chbgon);
deconnexion.addEventListener('mouseout', chbgout);

function chbgon() { 
    //Fonction qui restylise boutique dans header lorsque la souris passe sur une autre categorie   
    boutique.style.backgroundColor = 'black';
    boutique.style.color = 'white';
    boutique.style.transitionDelay = "0s";
}

function chbgout() {    
    //Fonction qui restylise boutique dans header lorsque la souris quitte une autre categorie
    boutique.style.transitionDuration = ".5s";
    boutique.style.backgroundColor = '#40A798';
    boutique.style.color = 'black';
    boutique.style.marginLeft = "10%"
    boutique.style.marginRight = "10%"
}



// pour bouton achat (gestion achat utilisateur)


function showConfirmation(itemId, itemName) {
    const modal = document.getElementById('modal');
    document.getElementById('itemToBuy').textContent = itemName;
    modal.classList.add('open');

    const confirmPurchaseBtn = document.getElementById('confirmPurchase');
    confirmPurchaseBtn.addEventListener('click', function () {
        // Placez ici la logique pour finaliser l'achat de l'article sélectionné
        // Cela peut inclure des appels AJAX pour enregistrer l'achat dans la base de données

        // Ferme la boîte modale après l'achat confirmé
        modal.classList.remove('open');
    });
}

const closeModalBtn = document.getElementById('closeModal');
closeModalBtn.addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
});

