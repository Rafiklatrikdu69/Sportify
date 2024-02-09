// function getClassement(nom){
//     fetch('/public/json-classement', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//         body: JSON.stringify({nom: nom})
//     })
//     .then(response => response.text())
//     .then(data => {
//         console.log(data);
//         window.location.reload();
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }





// clique sur le bouton de la photo de profil
// ouvre la fenetre modal
let buttonpdp = document.getElementById('buttonpdp');
let modalpdp = document.getElementById('modalpdp');
let closemodalpdp = document.getElementById('closemodalpdp');
let submitpdp = document.getElementById('submitpdp');

buttonpdp.addEventListener('click', function () {
    modalpdp.classList.add('open');
}
);

closemodalpdp.addEventListener('click', function () {
    modalpdp.classList.remove('open');
}
);

// clique sur une image de la modal
// change la photo de profil
let images = document.querySelectorAll('.imgpdp');
let pdp;
let imageSelected;

images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Supprimer la classe 'image-selected' de toutes les images
        images.forEach(function(img) {
            img.classList.remove('image-selected');
            img.classList.remove('selected');
        });

        // Ajouter les classes 'image-selected' et 'selected' à l'image cliquée
        // L'ajout de deux classes est nécessaire pour que l'image soit correctement stylisée
        // Car une même propriété peut être définie dans deux classes différentes
        // Le problème ici venait de l'opacité qui était définie dans les deux classes
        // Avec ces deux classes (à première vue inutiles), la classe selected devient plus précis
        // Et donc l'opacité prise en compte est celle de la classe selected
        image.classList.add('image-selected');
        image.classList.add('selected');

        // Mettre à jour l'image sélectionnée
        imageSelected = image;
        pdp = image.src;
    });
});



// clique sur le bouton submit de la modal
// change la photo de profil dans la base de données
submitpdp.addEventListener('click', function () {
    fetch('/public/json-pdp', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({pdp: pdp})
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
);



// button badge
let buttonbadge = document.getElementById('buttonbadge');
let modalbadge = document.getElementById('modalbadge');
let closemodalbadge = document.getElementById('closemodalbadge');
let submitbadge = document.getElementById('submitbadge');

buttonbadge.addEventListener('click', function () {
    modalbadge.classList.add('open');
});

closemodalbadge.addEventListener('click', function () {
    modalbadge.classList.remove('open');
});

// clique sur une image de la modal
let imagesBadges = document.querySelectorAll('.imgbadge');
let badge;
let imageBadgeSelected;

imagesBadges.forEach(function(image) {
    image.addEventListener('click', function() {
        // Supprimer la classe 'image-selected' de toutes les images
        imagesBadges.forEach(function(img) {
            img.classList.remove('image-selected');
            img.classList.remove('selected');
        });

        // Ajouter les classes 'image-selected' et 'selected' à l'image cliquée
        // L'ajout de deux classes est nécessaire pour que l'image soit correctement stylisée
        // Car une même propriété peut être définie dans deux classes différentes
        // Le problème ici venait de l'opacité qui était définie dans les deux classes
        // Avec ces deux classes (à première vue inutiles), la classe selected devient plus précis
        // Et donc l'opacité prise en compte est celle de la classe selected
        image.classList.add('image-selected');
        image.classList.add('selected');

        // Mettre à jour l'image sélectionnée
        imageBadgeSelected = image;
        badge = image.src;
    });
});



// clique sur le bouton submit de la modal
// change la photo de profil dans la base de données
submitbadge.addEventListener('click', function () {
    console.log("envoie badge");
    fetch('/public/json-badge', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({badge: badge})
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
);




// button ecusson
let buttonecu = document.getElementById('buttonecu');
let modalecu = document.getElementById('modalecu');
let closemodalecu = document.getElementById('closemodalecu');
let submitecu = document.getElementById('submitecu');

buttonecu.addEventListener('click', function () {
    modalecu.classList.add('open');
});

closemodalecu.addEventListener('click', function () {
    modalecu.classList.remove('open');
});

// clique sur une image de la modal
let imagesEcus = document.querySelectorAll('.imgecu');
let ecu;
let imageEcuSelected;

imagesEcus.forEach(function(image) {
    image.addEventListener('click', function() {
        // Supprimer la classe 'image-selected' de toutes les images
        imagesEcus.forEach(function(img) {
            img.classList.remove('image-selected');
            img.classList.remove('selected');
        });

        // Ajouter les classes 'image-selected' et 'selected' à l'image cliquée
        // L'ajout de deux classes est nécessaire pour que l'image soit correctement stylisée
        // Car une même propriété peut être définie dans deux classes différentes
        // Le problème ici venait de l'opacité qui était définie dans les deux classes
        // Avec ces deux classes (à première vue inutiles), la classe selected devient plus précis
        // Et donc l'opacité prise en compte est celle de la classe selected
        image.classList.add('image-selected');
        image.classList.add('selected');

        // Mettre à jour l'image sélectionnée
        imageEcuSelected = image;
        ecu = image.src;
    });
});



// clique sur le bouton submit de la modal
// change la photo de profil dans la base de données
submitecu.addEventListener('click', function () {
    fetch('/public/json-ecu', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ecu: ecu})
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
);
