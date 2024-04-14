-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 14 avr. 2024 à 13:46
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `choixdujour`
--

CREATE TABLE `choixdujour` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `dateduchoix` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `choixdujour`
--

INSERT INTO `choixdujour` (`id`, `nom`, `dateduchoix`) VALUES
(3, 'Jarry Valentine', '2024-04-06'),
(21, 'Mandoux Leo', '2024-04-07'),
(22, 'Rey Leo', '2024-04-08'),
(27, 'Albouze Antoine ', '2024-04-11'),
(28, 'Peridy Theo', '2024-04-14');

--
-- Déclencheurs `choixdujour`
--
DELIMITER $$
CREATE TRIGGER `before_insert_trigger` BEFORE INSERT ON `choixdujour` FOR EACH ROW SET NEW.dateduchoix = CURRENT_DATE
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

CREATE TABLE `etudiants` (
  `id` int(11) NOT NULL,
  `eleve` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `genre` varchar(10) DEFAULT NULL,
  `specialite` varchar(100) DEFAULT NULL,
  `peip` varchar(100) DEFAULT NULL,
  `couleur_cheveux` varchar(50) DEFAULT NULL,
  `etudes_etranger` varchar(100) DEFAULT NULL,
  `pays_etranger` varchar(100) DEFAULT NULL,
  `annee_etude` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etudiants`
--

INSERT INTO `etudiants` (`id`, `eleve`, `age`, `genre`, `specialite`, `peip`, `couleur_cheveux`, `etudes_etranger`, `pays_etranger`, `annee_etude`) VALUES
(1, 'Menage Sarah', 18, 'Femme', 'Peip', 'Oui a Angers', 'Brun(e)', '', '', 'Peip 1'),
(2, 'Chien Chow Chine Mathys', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Espagne', '4A'),
(3, 'Ollivier Veia', 19, 'Femme', 'Peip', 'Oui a Angers', 'Blond(e)', '', '', 'Peip 2'),
(4, 'Denis Kilian', 21, 'Homme', 'GBS', 'Non', 'Blond(e)', 'Semestre', 'Canada', '3A'),
(5, 'Peneau Adam', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Stage', 'Lituanie ', '4A'),
(6, 'Vayre Zoe', 20, 'Femme', 'GBS', 'Oui dans le rezo', 'Brun(e)', 'Stage', 'Suede', '3A'),
(7, 'Rousseau Romain ', 23, 'Homme', 'QIF', 'Oui dans le rezo', 'Brun(e)', 'Semestre', 'Lituanie ', '4A'),
(8, 'Simon Louis', 21, 'Homme', 'QIF', 'Oui dans le rezo', 'Brun(e)', 'Semestre', 'Canada', '4A'),
(9, 'Manet Celia', 20, 'Femme', 'GBS', 'Oui dans le rezo', 'Blond(e)', 'Stage', 'Croatie', '3A'),
(10, 'Lebon Elise', 21, 'Femme', 'QIF', 'Oui a Angers', 'Brun(e)', 'Stage', 'Lituanie ', '4A'),
(11, 'Geille Antonin', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Chatain(e)', 'Semestre', 'Canada', '4A'),
(12, 'El Jaouhari Mohamed', 22, 'Homme', 'QIF', 'Non', 'Brun(e)', 'Double diplome', 'Maroc', '4A'),
(13, 'Flament Charlenn ', 21, 'Femme', 'GBS', 'Non', 'Chatain(e)', 'Semestre', 'Canada', '4A'),
(14, 'Bompard Aurelie', 22, 'Femme', 'GBS', 'Non', 'Brun(e)', 'Stage', 'Italie ', '4A'),
(15, 'Esteguy Mariana', 23, 'Femme', 'QIF', 'Non', 'Brun(e)', 'Stage', 'Italie', '4A'),
(16, 'Fournier Clara ', 21, 'Femme', 'GBS', 'Oui dans le rezo', 'Chatain(e)', 'Stage', 'Danemark ', '4A'),
(17, 'Barbareau Paul', 21, 'Homme', 'QIF', 'Oui a Angers', 'Chatain(e)', 'Semestre', 'Lituanie', '4A'),
(18, 'Chezal Angeline', 21, 'Femme', 'GBS', 'Non', 'Blond(e)', 'Stage', 'Royaume-Uni ', '4A'),
(19, 'Musset Laurine ', 22, 'Femme', 'GBS', 'Non', 'Chatain(e)', 'Stage', 'Angleterre ', '4A'),
(20, 'Green Melissa', 20, 'Femme', 'QIF', 'Oui dans le rezo', 'Teinture', 'Semestre', 'Espagne', '4A'),
(21, 'Chapeau Anne', 21, 'Femme', 'GBS', 'Non', 'Chatain(e)', 'Stage', 'Espagne', '3A'),
(22, 'Billaudeau Clement', 22, 'Homme', 'QIF', 'Oui dans le rezo', 'Chatain(e)', 'Semestre', 'Tchequie', '4A'),
(23, 'Jarry Valentine', 21, 'Femme', 'GBS', 'Oui a Angers', 'Blond(e)', 'Stage', 'Finlande ', '4A'),
(24, 'Chereau Noellie', 21, 'Femme', 'QIF', 'Oui a Angers', 'Chatain(e)', 'Semestre', 'Roumanie', '4A'),
(25, 'Pichon Eleonore ', 21, 'Femme', 'QIF', 'Oui a Angers', 'Blond(e)', 'Stage', 'Etats-Unis', '4A'),
(26, 'Herbreteau Maxime', 21, 'Homme', 'BEMS', 'Oui a Angers', 'Brun(e)', 'Stage', 'Portugal', '4A'),
(27, 'Masson Valentin', 21, 'Homme', 'QIF', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Canada', '4A'),
(28, 'You Noelie', 22, 'Femme', 'GBS', 'Oui a Angers', 'Roux / Rousse', 'Stage', 'Portugal', '4A'),
(29, 'Poupon-Bonnefoi C?leyne', 21, 'Femme', 'GBS', 'Non', 'Blond(e)', 'Stage', 'Australie ', '3A'),
(30, 'Blandin Jonathan', 22, 'Homme', 'QIF', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Tchequie', '4A'),
(31, 'Derrien Morgane ', 21, 'Femme', 'GBS', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Allemagne ', '4A'),
(32, 'Combalot Soren', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Semestre', 'Tchequie', '4A'),
(33, 'Frizzi Kylian ', 22, 'Homme', 'BEMS', 'Non', 'Brun(e)', 'Semestre', 'Italie ', '4A'),
(34, 'Turcaud Baptiste', 21, 'Homme', 'QIF', 'Non', 'Chatain(e)', 'Stage', 'Espagne ', '3A'),
(35, 'Magadur Pierre', 21, 'Homme', 'QIF', 'Oui a Angers', 'Brun(e)', 'Stage', 'Nouvelle-Zelande ', '4A'),
(36, 'Mandoux Leo', 21, 'Homme', 'QIF', 'Oui a Angers', 'Brun(e)', 'Semestre', 'Lituanie', '4A'),
(37, 'Devas Faye', 21, 'Discutable', 'SAGI', 'Oui a Angers', 'Teinture', 'Semestre', 'Finlande', '4A'),
(38, 'Prestifilippo Lena', 21, 'Femme', 'GBS', 'Oui dans le rezo', 'Chatain(e)', 'Stage', 'Angleterre', '4A'),
(39, 'Gueye Sophie', 21, 'Femme', 'GBS', 'Oui dans le rezo', 'Brun(e)', 'Stage', 'Allemagne ', '4A'),
(40, 'Leray Mathieu', 22, 'Homme', 'SAGI', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Angleterre', '4A'),
(41, 'Mercier Robin', 20, 'Homme', 'SAGI', 'Non', 'Brun(e)', 'Stage', 'Espagne', '4A'),
(42, 'Carnot Emeline', 21, 'Femme', 'GBS', 'Oui dans le rezo', 'Blond(e)', 'Semestre', 'Tchequie', '4A'),
(43, 'Rey Leo', 22, 'Homme', 'QIF', 'Non', 'Brun(e)', 'Stage', 'Suisse', '4A'),
(44, 'Sabatte Anaelle', 21, 'Femme', 'QIF', 'Non', 'Chatain(e)', 'Stage', 'Tchequie', '4A'),
(45, 'Mitteau Romain', 18, 'Homme', 'Peip', 'Oui a Angers', 'Brun(e)', '', '', 'Peip 2'),
(46, 'Charron Valentin', 22, 'Homme', 'SAGI', 'Oui dans le rezo', 'Blond(e)', 'Semestre', 'Espagne ', '4A'),
(47, 'Nagmar Mathis', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Semestre', 'Canada', '4A'),
(48, 'Begoc Edgar', 19, 'Homme', 'Peip', 'Oui a Angers', 'Brun(e)', '', '', 'Peip 2'),
(49, 'Coudrin Oriane', 22, 'Femme', 'GBS', 'Oui a Angers', 'Brun(e)', 'Stage', 'Grece', '4A'),
(50, 'Savoye Hugo', 21, 'Homme', 'SAGI', 'Oui dans le rezo', 'Brun(e)', 'Stage', 'Bresil ', '4A'),
(51, 'Peridy Theo', 21, 'Homme', 'SAGI', 'Non', 'Brun(e)', 'Stage', 'Allemagne ', '4A'),
(52, 'Albouze Antoine ', 22, 'Homme', 'GBS', 'Non', 'Brun(e)', 'Stage', 'Danemark ', '4A'),
(53, 'Jaulneau Lisa ', 21, 'Femme', 'GBS', 'Oui a Angers', 'Brun(e)', 'Stage', 'Grece', '4A'),
(54, 'Leroyer Mathieu', 22, 'Homme', 'QIF', 'Non', 'Brun(e)', 'Semestre', 'Espagne', '4A'),
(55, 'Micheneau Chloe', 20, 'Femme', 'QIF', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Angleterre', '3A'),
(56, 'Gagniere Zoe', 21, 'Femme', 'GBS', 'Non', 'Blond(e)', 'Semestre', 'Croatie ', '3A'),
(57, 'Kukla Hippolyte ', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Semestre', 'Lituanie ', '4A'),
(58, 'Navet Titouan', 20, 'Homme', 'SAGI', 'Non', 'Brun(e)', 'Semestre', 'Tchequie', '3A'),
(59, 'Simonin Paul', 19, 'Homme', 'Peip', 'Oui a Angers', 'Brun(e)', '', '', 'Peip 2'),
(60, 'Vivet Amandine', 22, 'Femme', 'GBS', 'Non', 'Chatain(e)', 'Stage', 'Vietnam', '4A'),
(61, 'Grailhe Charly', 21, 'Homme', 'SAGI', 'Oui dans le rezo', 'Brun(e)', 'Stage', 'Nouvelle-Zelande', '3A'),
(62, 'Dalleau Manon', 20, 'Femme', 'GBS', 'Non', 'Chatain(e)', 'Stage', 'Tchequie', '4A'),
(63, 'Judon Raphael', 19, 'Homme', 'Peip', 'Oui a Angers', 'Brun(e)', '', '', 'Peip 1'),
(64, 'Moncoiffet Leo', 21, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Semestre', 'Pologne', '4A'),
(66, 'Creusier Thomas ', 22, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Stage', 'Royaume-Unis', '4A');

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

CREATE TABLE `reponse` (
  `id` int(11) NOT NULL,
  `eleve` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `genre` varchar(10) DEFAULT NULL,
  `specialite` varchar(100) DEFAULT NULL,
  `peip` varchar(100) DEFAULT NULL,
  `couleur_cheveux` varchar(50) DEFAULT NULL,
  `etudes_etranger` varchar(100) DEFAULT NULL,
  `pays_etranger` varchar(100) DEFAULT NULL,
  `annee_etude` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reponse`
--

INSERT INTO `reponse` (`id`, `eleve`, `age`, `genre`, `specialite`, `peip`, `couleur_cheveux`, `etudes_etranger`, `pays_etranger`, `annee_etude`) VALUES
(0, 'Peridy Theo', 21, 'Homme', 'SAGI', 'Non', 'Brun(e)', 'Stage', 'Allemagne ', '4A');

-- --------------------------------------------------------

--
-- Structure de la table `reponsemirroir`
--

CREATE TABLE `reponsemirroir` (
  `id` int(11) NOT NULL,
  `eleve` varchar(250) NOT NULL,
  `age` int(250) NOT NULL,
  `genre` varchar(250) NOT NULL,
  `specialite` varchar(250) NOT NULL,
  `peip` varchar(250) NOT NULL,
  `couleur_cheveux` varchar(250) NOT NULL,
  `etudes_etranger` varchar(250) NOT NULL,
  `pays_etranger` varchar(250) NOT NULL,
  `annee_etude` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reponsemirroir`
--

INSERT INTO `reponsemirroir` (`id`, `eleve`, `age`, `genre`, `specialite`, `peip`, `couleur_cheveux`, `etudes_etranger`, `pays_etranger`, `annee_etude`) VALUES
(11, 'Peridy Theo', 21, 'Homme', 'SAGI', 'Non', 'Brun(e)', 'Stage', 'Allemagne ', '4A');

-- --------------------------------------------------------

--
-- Structure de la table `reponsesagi`
--

CREATE TABLE `reponsesagi` (
  `id` int(11) NOT NULL,
  `eleve` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `genre` varchar(10) DEFAULT NULL,
  `peip` varchar(100) DEFAULT NULL,
  `couleur_cheveux` varchar(50) DEFAULT NULL,
  `etudes_etranger` varchar(100) DEFAULT NULL,
  `pays_etranger` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reponsesagi`
--

INSERT INTO `reponsesagi` (`id`, `eleve`, `age`, `genre`, `peip`, `couleur_cheveux`, `etudes_etranger`, `pays_etranger`) VALUES
(0, 'Moncoiffet Leo', 21, 'Homme', 'Oui a Angers', 'Brun(e)', 'Semestre', 'Pologne');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `choixdujour`
--
ALTER TABLE `choixdujour`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reponsemirroir`
--
ALTER TABLE `reponsemirroir`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `choixdujour`
--
ALTER TABLE `choixdujour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT pour la table `reponsemirroir`
--
ALTER TABLE `reponsemirroir`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
