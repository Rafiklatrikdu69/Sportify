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
    PlacementScoreMonstre();

    PlacementPiece();

    DefinirTailleMonstre();
    PlacementMonstreHitBoxAttack();
    PlacementMonstreImage();
    PlacementMonstreHitBoxVulnerable();

    startTimerBallonDeplacement();
    startTimerConfigurationModels();
}
