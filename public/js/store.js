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


// function showConfirmation(itemId, itemName) {
//     const modal = document.getElementById('modal');
//     document.getElementById('itemToBuy').textContent = itemName;
//     modal.classList.add('open');

//     const confirmPurchaseBtn = document.getElementById('confirmPurchase');
//     confirmPurchaseBtn.addEventListener('click', function () {
//         // vérifier si l'utilisateur à assez de Sporticoins (en utilisant la fonction: purchaseItem($itemId, $userId) dans ItemsDAO.php)
        

//         // Ferme la boîte modale après l'achat confirmé
//         modal.classList.remove('open');
//     });
// }

// listener pour bouton annuler (de la confirmation)
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
    confirmPurchaseBtn.addEventListener('click', function () {
        // Récupérer l'ID de l'utilisateur depuis votre système (peut-être stocké dans une variable JavaScript ou récupéré depuis le backend)
        const userId = getUserIdSomehow(); // Mettez ici la logique pour obtenir l'ID de l'utilisateur

        // Vérifier si l'utilisateur a assez de Sporticoins
        fetch('../../app/Models/ItemsDAO.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemId: itemId,
                userId: userId
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // L'utilisateur a suffisamment de Sporticoins pour acheter l'article
                // Appelez ici une fonction pour finaliser l'achat ou effectuer d'autres actions nécessaire

                console.log('Achat effectué avec succès');
            } else {
                // L'utilisateur n'a pas assez de Sporticoins pour acheter l'article
                console.log('Fonds insuffisants pour l\'achat');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la requête : ', error);
        });

        // Ferme la boîte modale après l'achat confirmé
        modal.classList.remove('open');
    });
}

// Fonction factice pour récupérer l'ID de l'utilisateur
function getUserIdSomehow() {
    return 1; // test à 1 pour l'instant
}

