window.onload = function () {

    setTerrain();
    setImageTerrain();
    DefinirTaillePolice();
    DefinirTailleBallonImage();
    DefinirTailleBallonHitBoxSaut();
    DefinirTailleBallonHitBoxGet();
    PlacementBallonHitBoxSaut();
    PlacementBallonHitBoxGet();
    PlacementBallonImage();

    setImageBallon(getType());

    PlacementRessort();
    DefinirTailleRessort();

    setTableauDeplacementPlateforme();
    setListePlateforme();
    setCooListePlateforme();
    setPlateformeDuRessort();

    PlacementScore();
    PlacementScorePieceImage();
    PlacementScoreNombrePiece();

    PlacementPiece();

    DefinirTailleMonstre();
    PlacementMonstreHitBoxAttack();
    PlacementMonstreImage();
    PlacementMonstreHitBoxVulnerable();

    AjoutDuRessort();
    startTimerBallonDeplacement();
    startTimerConfigurationModels();
}
