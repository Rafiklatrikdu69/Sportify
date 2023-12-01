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



const closeModalBtn = document.getElementById('closeModal');
closeModalBtn.addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
});




function showConfirmation(itemId, itemName) {
    const modal = document.getElementById('modal');
    document.getElementById('itemToBuy').textContent = itemName;
    modal.classList.add('open');

    const confirmPurchaseBtn = document.getElementById('confirmPurchase');


    confirmPurchaseBtn.removeEventListener('click', handleConfirmPurchase);

   
    confirmPurchaseBtn.addEventListener('click', handleConfirmPurchase);


 
}

function handleConfirmPurchase() {
       
       
    modal.classList.remove('open');


    confirmPurchaseBtn.removeEventListener('click', handleConfirmPurchase);
}


function item (item_id,points) {
    this.item_id = item_id;
    this.points = points;
    
}



achat.forEach(function (achat, i) {
    achat.addEventListener("click", function () {
        let items = new item(
            document.getElementsByClassName('nom')[i].id,
            document.getElementsByClassName('price')[i].id
        );

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
    });
});

    