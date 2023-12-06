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
}
