-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql_db
-- Generation Time: Jan 02, 2024 at 11:24 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Sportify`
--

-- --------------------------------------------------------

--
-- Table structure for table `EVENEMENT`
--

CREATE TABLE `EVENEMENT` (
  `EVENEMENT_ID` int NOT NULL,
  `NOM_EVENEMENT` varchar(25) NOT NULL,
  `DATE_EVENEMENT` date NOT NULL,
  `EQUIPE_DOMICILE` varchar(25) NOT NULL,
  `EQUIPE_EXTERIEUR` varchar(25) NOT NULL,
  `COTE_DOMICILE` float NOT NULL,
  `COTE_EXTERIEUR` float NOT NULL,
  `CAT_SPORT` varchar(25) NOT NULL,
  `ACTIVE` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `EVENEMENT`
--

INSERT INTO `EVENEMENT` (`EVENEMENT_ID`, `NOM_EVENEMENT`, `DATE_EVENEMENT`, `EQUIPE_DOMICILE`, `EQUIPE_EXTERIEUR`, `COTE_DOMICILE`, `COTE_EXTERIEUR`, `CAT_SPORT`, `ACTIVE`) VALUES
(2, 'LIGUE 1', '2024-01-01', 'OL', 'ASSE', 1.8, 2.2, 'Football', 1),
(3, 'LIGA', '2024-01-31', 'BARCELONA', 'REAL MADRID', 1.8, 2, 'Football', 1),
(4, 'LIGA', '2024-01-30', 'ATLETICO MADRID', 'SEVILLE', 1.5, 2.5, 'Football', 1),
(5, 'PREMIER LEAGUE', '2024-02-06', 'MAN U', 'MAN C', 1.5, 2.5, 'Football', 1),
(6, 'World Cup', '2024-02-05', 'FRANCE', 'AFRIQUE DU SUD', 1.5, 2.5, 'Rugby', 1),
(7,'US OPEN','2024-02-01','NADAL','DJOKOVIC',1.5,2.5,'Tennis',1),
(8,'NBA','2024-01-26','LAKERS','BULLS',1.5,2.5,'Basketball',1),
(9,'IUT','2024-01-27','RAMAZAN','RAFIK',1.5,2.5,'Karate',1);


-- --------------------------------------------------------

--
-- Table structure for table `INVENTAIRE`
--

CREATE TABLE `INVENTAIRE` (
  `INVENTAIRE_ID` int NOT NULL,
  `UTILISATEUR_ID` int NOT NULL,
  `ITEM_ID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `INVENTAIRE`
--

INSERT INTO `INVENTAIRE` (`INVENTAIRE_ID`, `UTILISATEUR_ID`, `ITEM_ID`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ITEMS`
--

CREATE TABLE `ITEMS` (
  `ITEM_ID` int NOT NULL,
  `NOM_ITEM` varchar(25) NOT NULL,
  `TYPE` varchar(25) NOT NULL,
  `DESCRIPTION` varchar(256) NOT NULL,
  `PRIX` int NOT NULL,
  `COULEUR` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ITEMS`
--

INSERT INTO `ITEMS` (`ITEM_ID`, `NOM_ITEM`, `TYPE`, `DESCRIPTION`, `PRIX`, `COULEUR`) VALUES
(1, 'Kimono', 'Icone', 'Kimono de Karaté', 250, 'Blanc'),
(2, 'Baseball couronné', 'Icone', 'Balle de Baseball couronné', 150, 'Blanc'),
(3, 'Crampons', 'Icone', 'Crampons de Foot', 150, 'Bleu'),
(4, 'Casque', 'Icone', 'Casque de Rallye', 200, 'Vert'),
(5, 'Rugby', 'Icone', 'Balle de Rugby', 200, 'Bleu'),
(6, 'Pelé', 'Icone', 'Maillot floqué Pelé', 500, 'Bleu'),
(7, 'Vitesse', 'Icone', 'Balle de Baseball en feu', 150, 'Rouge'),
(8, 'Foot', 'Icone', 'Ballon de Foot', 150, 'Blanc'),
(9, 'Ballons', 'Icone', 'Ballons de sports', 200, 'Orange'),
(10, 'Baseball', 'Icone', 'Balle de Baseball', 150, 'Blanc'),
(11, 'Archer', 'Icone', 'Archer profesionnel', 150, 'Vert'),
(12, 'JudoKa', 'Icone', 'Kimono de Judo', 125, 'Blanc'),
(13, 'Hokey', 'Icone', 'Palet de Hokey', 150, 'Noir'),
(14, 'Champion', 'Badge', 'Badge de champion', 125, 'Violet'),
(15, 'Sergent', 'Badge', 'Badge de sergent', 125, 'Jaune'),
(16, 'Buteur', 'Badge', 'Meilleur buteur', 150, 'Jaune'),
(17, 'Foot rétro', 'Icone', 'Ballon de Foot rétro', 350, 'Marron'),
(18, 'Home Run', 'Badge', 'Record Home Run', 150, 'Gris'),
(19, 'Batte Baseball', 'Badge', 'Batte de Baseball stylé', 125, 'Rouge'),
(20, 'Police', 'Badge', 'Shérif de police', 150, 'Jaune'),
(21, 'JO', 'Badge', 'Logo des Jeux Olympiques', 175, 'Noir'),
(22, 'Médaille', 'Badge', 'Médaille de première place', 225, 'Jaune'),
(23, 'Terrain Basket', 'Badge', 'Terrain de Basketball', 250, 'Marron'),
(24, 'Terrain Foot', 'Badge', 'Terrain de Fottball', 275, 'Vert'),
(25, 'Coupe', 'Badge', 'Coupe vainqueur', 250, 'Jaune'),
(26, 'Real Madrid', 'Ecusson', '14 UCL Winners', 500, 'Blanc'),
(27, 'Barcelone', 'Ecusson', 'Nothing Winners', 500, 'Bleu');

-- --------------------------------------------------------

--
-- Table structure for table `POST`
--

CREATE TABLE `POST` (
  `POST_ID` int NOT NULL,
  `AUTEUR_ID` int NOT NULL,
  `AUTEUR_NOM` varchar(50) NOT NULL,
  `NOM_TOPIC` varchar(25) NOT NULL,
  `DESCRIPTION_POST` varchar(255) DEFAULT ' ',
  `NB_LIKE` int DEFAULT '0',
  `PARENT_POST` int DEFAULT '0',
  `NB_COM` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `POST`
--

INSERT INTO `POST` (`POST_ID`, `AUTEUR_ID`, `AUTEUR_NOM`, `NOM_TOPIC`, `DESCRIPTION_POST`, `NB_LIKE`, `PARENT_POST`) VALUES
(6, 10, 'ChocoPops', 'Premier League', ' LIVERPOOL ENCHAINE ET S\'IMPOSE 4 BUTS A 0 FACE A BOURNEMOUTH ! Les Reds sont LEADERS et prennent provisoirement 5 POINTS D\'AVANCE sur Manchester City. Très très gros match de Diogo Jota impliqué dans les trois buts de Liverpool cet après-midi : 2 buts', 4, 0),
(12, 3, 'Keap', 'Super transfert', 'Cool comme transfert', 3, 1),
(13, 10, 'ChocoPops', 'Transfert', 'ACCORD DE PRINCIPE entre le Real Madrid et les représentants de Kylian Mbappé.  Mais avant de tout valider définitivement, Kylian Mbappé veut entendre les arguments du PSG.', 5, 0),
(14, 12, 'Lyollzz', 'Opportunité', 'C\'est pas mal comme transfert j\'espère qu\'il va réussir . La PL est un bon championnat qui pourrait lui permettre de s\'exprimer.', 6, 1),
(15, 1, 'admin', 'Coupe de France', 'LE STADE RENNAIS ÉLIMINE MARSEILLE ET IRA DÉFIER SOCHAUX EN HUITIÈMES DE FINALE !', 8, 0),
(16, 12, 'Lyollzz', 'Pitoresque', 'C\'est bien fait il n\'y a que 1 seul olympique', 3, 15),
(18, 11, 'Lufty', 'Incroyable', 'Je le suivrais personnellement il a un sacré potentiel dommage qu\'une blessure soit venu tout gaché ...', 4, 1),
(19, 1, 'admin', 'Crack', 'Jannik Sinner est le meilleur tenisman italien je pense que la rivalité avec Carlos Alcaraz sera a suivre durant les prochaine année', 8, 5);

INSERT INTO `POST` (`POST_ID`, `AUTEUR_ID`, `AUTEUR_NOM`, `NOM_TOPIC`, `DESCRIPTION_POST`, `NB_LIKE`, `PARENT_POST`) VALUES
(1, 1, 'admin', 'Transfert', 'Le jeune joueur du FC Barcelone Ansu Fati actuellement prêté à Brighton est sur le point d\'être transféré définitivement pour un montant total de 70M et pour une période de 3 ans', 4, 0),
(2, 4, 'RafikLaTrikDu69', 'CAN', 'C\'est maintenant officiel, l\'Équipe nationale du Maroc se qualifie pour les 8èmes de finale de la compétition', 5, 0),
(3, 3, 'Keap', 'Serie A', 'Le portier Français Mike Maignan a subi des chants racistes lors du match face à Udinese', 8, 0),
(4, 2, 'Rameray', 'NBA', 'La déclaration forte de Wemby : « J\’aime être challengé, menacé, et même envoyé en G-League si je ne suis pas bon. J’aime que mes erreurs entraînent des conséquences. »', 6, 0),
(5, 4, 'RafikLaTrikDu69', 'Open d\'Australie', 'MOLTO BENE  Jannik Sinner élimine le demi-finaliste 2023, Karen Khachanov, et se qualifie en 1/4 de finale de l\'Open d\'Australie sans perdre un set.', 9, 0);

UPDATE `POST` SET `NB_COM` = 1 WHERE `POST`.`POST_ID` = 5;
UPDATE `POST` SET `NB_COM` = 3 WHERE `POST`.`POST_ID` = 1;
UPDATE `POST` SET `NB_COM` = 1 WHERE `POST`.`POST_ID` = 15;


-- --------------------------------------------------------

--
-- Table structure for table `PRONOSTIC`
--

CREATE TABLE `PRONOSTIC` (
  `PRONOSTIC_ID` int NOT NULL,
  `PRONOSTIQUEUR_ID` int NOT NULL,
  `MATCH_PRONO` int NOT NULL,
  `COTE_PRONO` decimal(10,1) NOT NULL,
  `DATE_PRONO` date NOT NULL,
  `MISE` int DEFAULT '0',
  `STATUS` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PRONOSTIC`
--

INSERT INTO `PRONOSTIC` (`PRONOSTIC_ID`, `PRONOSTIQUEUR_ID`, `MATCH_PRONO`, `COTE_PRONO`, `DATE_PRONO`, `MISE`, `STATUS`) VALUES
(1, 1, 4, 1.5, '2023-11-24', 200, 0),
(2, 1, 2, 1.8, '2023-11-24', 9000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `UTILISATEUR`
--

CREATE TABLE `UTILISATEUR` (
  `UTILISATEUR_ID` int NOT NULL,
  `PSEUDO` varchar(50) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `MOT_DE_PASSE` varchar(150) NOT NULL,
  `POINT_ACTUEL` decimal(10,2) DEFAULT '0.00',
  `POINT_CLASSEMENT` int DEFAULT '0',
  `STATUS` int DEFAULT '0',
  `SCORE_JEU` int DEFAULT '0',
  `SCORE_CLASSEMENT` int DEFAULT '0', 
  `LAST_CONNECTION` date DEFAULT NULL,
  `PDP_SRC` varchar(100) DEFAULT 'http://localhost/public/images/utilisateur.png',
  `BADGE_SRC` varchar(100) DEFAULT 'http://localhost/public/images/badge.png',
  `ECUSSON_SRC` varchar(100) DEFAULT 'http://localhost/public/images/bouclier.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `UTILISATEUR`
--

INSERT INTO `UTILISATEUR` (`UTILISATEUR_ID`, `PSEUDO`, `EMAIL`, `MOT_DE_PASSE`, `POINT_ACTUEL`, `POINT_CLASSEMENT`, `STATUS`, `SCORE_JEU`, `LAST_CONNECTION`) VALUES
(1, 'admin', 'admin@admin.fr', '$2y$10$Oz1T4KvH6JaDhLg/iKWu5eVt/eEgH17srKnvYPhsJ9vU3z6AjpoFi', 780.00, 10000, 0, 0, '2024-01-02'),
(2, 'Rameray', 'Rameray@example.com', '$2y$10$Oz1T4KvH6JaDhLg/iKWu5eVt/eEgH17srKnvYPhsJ9vU3z6AjpoFi', 100.00, 0, 1, 0, NULL),
(3, 'Keap', 'Keap@example.com', '$2y$10$Oz1T4KvH6JaDhLg/iKWu5eVt/eEgH17srKnvYPhsJ9vU3z6AjpoFi', 100.00, 0, 1, 0, NULL),
(4, 'RafikLaTrikDu69', 'RafikLaTrikDu69@example.com', '$2y$10$Oz1T4KvH6JaDhLg/iKWu5eVt/eEgH17srKnvYPhsJ9vU3z6AjpoFi', 100.00, 0, 1, 0, NULL);


-- REMPLISSAGE DE DONNEE POUR LE CLASSEMENT DU JEU; 
INSERT INTO `UTILISATEUR` (`UTILISATEUR_ID`, `PSEUDO`, `EMAIL`, `MOT_DE_PASSE`,`POINT_ACTUEL`, `POINT_CLASSEMENT`, `STATUS`, `SCORE_JEU`, `SCORE_CLASSEMENT`, `LAST_CONNECTION`) VALUES
(10, 'ChocoPops', 'rahmaninahil@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 1123.00, 500, 1, 0, 427600, null), 
(11, 'Lufty', 'lufty@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 987.00, 670, 1, 0, 294000, null), 
(12, 'Lyollzz', 'leo@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 843.00, 900, 1, 0, 134820, null),
(13, 'LoîsKassis', 'lois@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 620.00, 300, 1, 0, 102027, null), 
(14, 'Pelilikian', 'pelikan@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 340.00, 456, 1, 0, 95760, null), 
(15, 'Mass$$', 'mass@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 170.00, 890, 1, 0, 77490, null), 
(16, 'Shuuss', 'shuus@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 80.00, 230, 1, 0, 16380, null), 
(17, 'AbuTotem', 'Abu@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 50.00, 6000, 1, 0, 13440, null), 
(18, 'Slovenisl', 'nils@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 35.00, 120, 1, 0, 10500, null), 
(19, 'Muhadinibishi', 'mumu@gmail.com', '$2y$10$odqFW26H02RlEP/0Ba7zJOak3zwEW2JPQm49jeFJGz9Wdz09ZQVtq', 10.00, 1150, 1, 0, 2100, null); 

-- changer la photo de profil de quelque utilisateur
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone1.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 1;
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone2.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 2;
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone3.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 3;
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone4.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 4;
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone5.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 10;
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone6.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 11;
-- UPDATE `UTILISATEUR` SET `PDP_SRC` = 'http://localhost/public/images/Icone7.png' WHERE `UTILISATEUR`.`UTILISATEUR_ID` = 12;

--
-- Table structure for table `LIKES`
--

CREATE TABLE `LIKES` (
  `POST_ID` int NOT NULL,
  `UTILISATEUR_ID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `EQUIPE` (
  `id` int NOT NULL,
  `equipe` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `CATEGORIE` (
  `id` int NOT NULL,
  `categorie` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `LIKES`
--
INSERT INTO `LIKES` (`POST_ID`, `UTILISATEUR_ID`) VALUES
(1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `EVENEMENT`
--
ALTER TABLE `EVENEMENT`
  ADD PRIMARY KEY (`EVENEMENT_ID`);

--
-- Indexes for table `INVENTAIRE`
--
ALTER TABLE `INVENTAIRE`
  ADD PRIMARY KEY (`INVENTAIRE_ID`),
  ADD UNIQUE KEY `UTILISATEUR_ID` (`UTILISATEUR_ID`,`ITEM_ID`),
  ADD KEY `FK_ITEM_ID` (`ITEM_ID`);

--
-- Indexes for table `ITEMS`
--
ALTER TABLE `ITEMS`
  ADD PRIMARY KEY (`ITEM_ID`);

--
-- Indexes for table `POST`
--
ALTER TABLE `POST`
  ADD PRIMARY KEY (`POST_ID`),
  ADD KEY `FK_AUTEUR_ID` (`AUTEUR_ID`);

--
-- Indexes for table `PRONOSTIC`
--
ALTER TABLE `PRONOSTIC`
  ADD PRIMARY KEY (`PRONOSTIC_ID`),
  ADD KEY `FK_PRONOSTIQUEUR_ID` (`PRONOSTIQUEUR_ID`),
  ADD KEY `FK_MATCH_PRONO` (`MATCH_PRONO`);

--
-- Indexes for table `UTILISATEUR`
--
ALTER TABLE `UTILISATEUR`
  ADD PRIMARY KEY (`UTILISATEUR_ID`);

--
-- AUTO_INCREMENT for table `POST`
--
ALTER TABLE `POST`
  MODIFY `POST_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `UTILISATEUR`
--
ALTER TABLE `UTILISATEUR`
  MODIFY `UTILISATEUR_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Indexes for table `LIKES`
--
ALTER TABLE `LIKES`
  ADD PRIMARY KEY (`POST_ID`,`UTILISATEUR_ID`),
  ADD KEY `FK_POST_ID_LIKES` (`POST_ID`),
  ADD KEY `FK_UTILISATEUR_ID_LIKES` (`UTILISATEUR_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `EVENEMENT`
--
ALTER TABLE `EVENEMENT`
  MODIFY `EVENEMENT_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `INVENTAIRE`
--
ALTER TABLE `INVENTAIRE`
  MODIFY `INVENTAIRE_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ITEMS`
--
ALTER TABLE `ITEMS`
  MODIFY `ITEM_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;


--
-- AUTO_INCREMENT for table `PRONOSTIC`
--
ALTER TABLE `PRONOSTIC`
  MODIFY `PRONOSTIC_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `EQUIPE`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
ALTER TABLE `CATEGORIE`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `INVENTAIRE`
--
ALTER TABLE `INVENTAIRE`
  ADD CONSTRAINT `FK_ITEM_ID` FOREIGN KEY (`ITEM_ID`) REFERENCES `ITEMS` (`ITEM_ID`),
  ADD CONSTRAINT `FK_USER_ID_INVENTAIRE` FOREIGN KEY (`UTILISATEUR_ID`) REFERENCES `UTILISATEUR` (`UTILISATEUR_ID`),
  ADD CONSTRAINT `FK_UTILISATEUR_ID` FOREIGN KEY (`UTILISATEUR_ID`) REFERENCES `UTILISATEUR` (`UTILISATEUR_ID`);

--
-- Constraints for table `POST`
--
ALTER TABLE `POST`
  ADD CONSTRAINT `FK_AUTEUR_ID` FOREIGN KEY (`AUTEUR_ID`) REFERENCES `UTILISATEUR` (`UTILISATEUR_ID`);

--
-- Constraints for table `PRONOSTIC`
--
ALTER TABLE `PRONOSTIC`
  ADD CONSTRAINT `FK_MATCH_PRONO` FOREIGN KEY (`MATCH_PRONO`) REFERENCES `EVENEMENT` (`EVENEMENT_ID`),
  ADD CONSTRAINT `FK_PRONOSTIQUEUR_ID` FOREIGN KEY (`PRONOSTIQUEUR_ID`) REFERENCES `UTILISATEUR` (`UTILISATEUR_ID`);



--
-- Constraints for table `LIKES
--
ALTER TABLE `LIKES`
  ADD CONSTRAINT `FK_POST_ID_LIKES` FOREIGN KEY (`POST_ID`) REFERENCES `POST` (`POST_ID`);
  -- ADD CONSTRAINT `FK_UTILISATEUR_ID_LIKES` FOREIGN KEY (`UTILISATEUR_ID`) REFERENCES `UTILISATEUR` (`UTILISATEUR_ID`);
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
