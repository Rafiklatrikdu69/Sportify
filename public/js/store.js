// Definition des const qui vont être utilisées durant tout le code
const boutique = document.getElementById("boutique");
const actu = document.getElementById('actu');
const prono = document.getElementById('prono');
const deconnexion = document.getElementById('deconnexion');
let achat = document.querySelectorAll('#achat');

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



//const closeModalBtn = document.getElementById('closeModal');
// closeModalBtn.addEventListener('click', function () {
//     const modal = document.getElementById('modal');
//     modal.classList.remove('open');
// });


const confirmPurchaseBtn = document.getElementById('confirmPurchase');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

function showConfirmation(itemId, itemPrice, itemName) {
    document.getElementById('itemToBuy').textContent = itemName + ' à ' + itemPrice + ' points';
    modal.classList.add('open');

    confirmPurchaseBtn.addEventListener('click', function confirmHandler() {
        handleConfirmPurchase(itemId, itemPrice);
        modal.classList.remove('open');
        confirmPurchaseBtn.removeEventListener('click', confirmHandler);
    });
}

closeModalBtn.addEventListener('click', function() {
    modal.classList.remove('open');
    //confirmPurchaseBtn.removeEventListener('click', confirmHandler);
});

function handleConfirmPurchase(itemId, itemPrice) {
    let items = new item(itemId, itemPrice);

    fetch('/public/json-item', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(items)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function item(item_id, points) {
    this.item_id = item_id;
    this.points = points;
}

//let achat = document.querySelectorAll('#achat');

achat.forEach(function (achatBtn) {
    achatBtn.addEventListener("click", function (event) {
        let parentCard = event.target.closest('.card');
        let itemId = parentCard.querySelector('.nom').id;
        let itemPrice = parentCard.querySelector('.price').id;
        let itemName = parentCard.querySelector('.nom').textContent;

        showConfirmation(itemId, itemPrice, itemName);
    });
});



