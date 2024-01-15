window.onload = function () {
    setTerrain();
    setImageTerrain();
    setImageBallon(getType());

    PlacementBallonHitBoxSaut();
    DefinirTailleBallonHitBoxSaut();

    PlacementBallonHitBoxGet();
    DefinirTailleBallonHitBoxGet();

    PlacementBallonImage();
    DefinirTailleBallonImage();

    PlacementPlateforme();
    DefinirTaillePlateforme();

    PlacementTitre();
    DefinirTailleTitre();

    PlacementBoutonJouer();
    DefinirTailleBoutonJouer();

    PlacementBoutonClassement();
    DefinirTailleBoutonClassement();

    PlacementFlecheDroite();
    DefinirTailleFlecheDroite();

    PlacementFlecheGauche();
    DefinirTailleFlecheGauche();

    PlacementBanderole();
    DefinirTailleBanderole();

    BoutonPressed();
    BoutonReleased();
    BoutonClick();

    startTimerMenu();

    point = document.getElementsByClassName('point-user')[0];
    fetch('/public/json-point-jeu')
    .then(response => response.text())
     .then(data => {
        donnee = JSON.parse(data);
        console.log(donnee); 
        point.innerHTML= "Vous avez "+donnee[1]+" points";
     });
}
