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



// function showConfirmation(itemId, itemName) {
//     const modal = document.getElementById('modal');
//     document.getElementById('itemToBuy').textContent = itemName;
//     modal.classList.add('open');

//     const confirmPurchaseBtn = document.getElementById('confirmPurchase');
//     confirmPurchaseBtn.addEventListener('click', function () {
//         // Récupérer l'ID de l'utilisateur depuis votre système (peut-être stocké dans une variable JavaScript ou récupéré depuis le backend)
//         purchaseItem(itemId);

//         // Ferme la boîte modale après l'achat confirmé
//         modal.classList.remove('open');
//     });
// }

function showConfirmation(itemId, itemName) {
    const modal = document.getElementById('modal');
    document.getElementById('itemToBuy').textContent = itemName;
    modal.classList.add('open');

    const confirmPurchaseBtn = document.getElementById('confirmPurchase');

    // Supprimer d'abord l'événement click précédent pour éviter les déclenchements multiples
    confirmPurchaseBtn.removeEventListener('click', handleConfirmPurchase);

    // Ajouter l'événement click avec la fonction handleConfirmPurchase
    confirmPurchaseBtn.addEventListener('click', handleConfirmPurchase);

    // Sans les 2 lignes précédentes, 2 messages d'achat s'afficheraient si l'utilisateur achète 2 items (clique 2 fois sur le bouton achat), 3 si 3, 4 si 4, etc.
    function handleConfirmPurchase() {
        // Récupérer l'ID de l'utilisateur depuis votre système (peut-être stocké dans une variable JavaScript ou récupéré depuis le backend)
        purchaseItem(itemId);

        // Ferme la boîte modale après l'achat confirmé
        modal.classList.remove('open');

        // Supprimer l'événement click après son exécution pour éviter les déclenchements multiples
        confirmPurchaseBtn.removeEventListener('click', handleConfirmPurchase);
    }
}

function purchaseItem(itemId) {
    // Effectuer une requête vers le backend pour exécuter la fonction purchaseItem du fichier ItemsDAO.php
    fetch('../../app/Models/ItemsDAO.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemId: itemId,
        })
    })
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        if (data.success) {
            alert("Achat effectué avec succès");
        } else {
            alert("Achat échoué");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function purchaseItem(itemId) {
    // Effectuer une requête vers le backend pour exécuter la fonction purchaseItem du fichier ItemsDAO.php
    fetch('../../app/Models/ItemsDAO.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemId: itemId,
        })
    })
    .then(response => response.json()) // Utiliser response.json() pour traiter la réponse JSON
    .then(data => {
        // Gérer la réponse du backend ici (peut-être afficher un message à l'utilisateur)
        console.log(data); // Afficher la réponse du backend dans la console à titre d'exemple
        if (data.success) { // Vérifier la propriété 'success' dans la réponse JSON
            alert("Achat effectué avec succès");
        } else {
            alert("Achat échoué");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            // Gérer la réponse du backend ici (peut-être afficher un message à l'utilisateur)
            console.log(data); // Afficher la réponse du backend dans la console à titre d'exemple
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
}





