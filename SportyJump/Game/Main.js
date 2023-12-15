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

    setTableauDeplacementPlateforme();
    setListePlateforme();
    setCooListePlateforme();

    PlacementScore();
    PlacementScorePieceImage();
    PlacementScoreNombrePiece();

    PlacementPiece();

    DefinirTailleMonstre();
    PlacementMonstreHitBoxAttack();
    PlacementMonstreImage();
    PlacementMonstreHitBoxVulnerable();

    startTimerBallonDeplacement();
    startTimerConfigurationModels();
}
