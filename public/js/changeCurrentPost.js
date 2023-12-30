function changeCurrentPost(nouvelleValeur) {
    console.log('Nouvelle valeur:', nouvelleValeur);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/app/Controllers/changeCurrentPost.php?valeur=" + nouvelleValeur, true);
    xhr.onreadystatechange = function() {
        console.log(this)
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log('Réponse du serveur:', xhr.responseText);
                console.log('Type de la réponse:', typeof xhr.responseText);
                console.log('Longueur de la réponse:', xhr.responseText.length);
            } else {
                console.error('Erreur de la requête:', xhr.status, xhr.statusText);
            }
        }
    };
    xhr.send();
    window.location.reload();
}