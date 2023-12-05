function setImageBoutonReleased(bouton, nomBouton) {
    switch (getType()) {
        case 2: bouton.src = "Dessin/GameOver/basket/bouton" + nomBouton + ".png";
            break;
        case 3: bouton.src = "Dessin/GameOver/tennis/bouton" + nomBouton + ".png";
            break;
        case 4: bouton.src = "Dessin/GameOver/baseball/bouton" + nomBouton + ".png";
            break;
        case 5: bouton.src = "Dessin/GameOver/rugby/bouton" + nomBouton + ".png";
            break;
        case 6: bouton.src = "Dessin/GameOver/bowling/bouton" + nomBouton + ".png";
            break;
        default: bouton.src = "Dessin/GameOver/bouton" + nomBouton + ".png";
            break;
    }
}

function setImageBoutonPressed(bouton, nomBouton) {
    switch (getType()) {
        case 2: bouton.src = "Dessin/GameOver/basket/bouton" + nomBouton + "Presse.png";
            break;
        case 3: bouton.src = "Dessin/GameOver/tennis/bouton" + nomBouton + "Presse.png";
            break;
        case 4: bouton.src = "Dessin/GameOver/baseball/bouton" + nomBouton + "Presse.png";
            break;
        case 5: bouton.src = "Dessin/GameOver/rugby/bouton" + nomBouton + "Presse.png";
            break;
        case 6: bouton.src = "Dessin/GameOver/bowling/bouton" + nomBouton + "Presse.png";
            break;
        default: bouton.src = "Dessin/GameOver/bouton" + nomBouton + "Presse.png";
            break;
    }
}