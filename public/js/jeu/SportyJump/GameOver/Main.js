window.onload = function () {
    setImageTerrain();
    setTerrain();

    setListePlateforme();
    setCooPlateformeForGameOver();

    DefinirTailleBallonHitBoxSaut();
    DefinirTailleBallonHitBoxGet();
    DefinirTailleBallonImage();
    PlacementBallonHitBoxSaut();
    PlacementBallonHitBoxGet();
    PlacementBallonImage();
    setImageBallon(getType());

    DefinirTailleMonstre();
    PlacementMonstre();
    PlacementPiece();

    DefinirTailleTitre();
    PlacementTitre();

    DefinirTailleBoutonJouer();
    PlacementBoutonJouer();

    DefinirTailleBoutonMenu();
    PlacementBoutonMenu();

    PlacementScore();
    PlacementNbPiece();

    setImageBoutonReleased(document.getElementById("boutonJouer"), "Jouer");
    setImageBoutonReleased(document.getElementById("boutonMenu"), "Menu");
    BoutonPressed();
    BoutonReleased();
    BoutonClick();

    startTimerDefilementObjets();
    startTimerChuteLibre();
    // console.log("Le score :"+ localStorage.getItem("scoreTexte"))
}