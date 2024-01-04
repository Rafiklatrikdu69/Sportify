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

    PlacementJetPack();
    DefinirTailleJetPack();
    PlacementRessort();
    DefinirTailleRessort();

    setTableauDeplacementPlateforme();
    setListePlateforme();
    setCooListePlateforme();
    setPlateformeDuRessort();
    setPlateformeDuJetPack();

    PlacementScore();
    PlacementScorePieceImage();
    PlacementScoreNombrePiece();
    PlacementScoreMonstre();

    PlacementPiece();

    DefinirTailleMonstre();
    PlacementMonstreHitBoxAttack();
    PlacementMonstreImage();
    PlacementMonstreHitBoxVulnerable();

    ConfigurationPause();

    startTimerBallonDeplacement();
    startTimerConfigurationModels();
}
