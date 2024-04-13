-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 11 avr. 2024 à 17:41
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

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
(27, 'Albouze Antoine ', '2024-04-11');

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
(66, 'Creusier Thomas ', 22, 'Homme', 'SAGI', 'Oui a Angers', 'Brun(e)', 'Stage', 'Royaume-Unis', '4A')
(67, 'Jagueneau Katia', 21, 'Femme', 'SAGI', 'Non', 'Chatain(e)', 'Semestre', 'Malte', '4A');

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
(0, 'Albouze Antoine ', 22, 'Homme', 'GBS', 'Non', 'Brun(e)', 'Stage', 'Danemark ', '4A');

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
(0, 'Chien Chow Chine Mathys', 21, 'Homme', 'Oui a Angers', 'Chatain(e)', 'Stage', 'Espagne');


-- --------------------------------------------------------

--
-- Structure de la table `polyguessr`
--
CREATE TABLE `polyguessr` (
  `id` int(11) NOT NULL,
  `ecole` varchar(100) NOT NULL,
  `num_guess` int(11) DEFAULT NULL,
  `lien` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `polyguessr` (`id`, `ecole`, `num_guess`, `lien`) VALUES
(1, 'ENSIBS Lorient', 1, 'https://files.u-angers.fr/data/f-89eba1a631fdb3f99389b2b0.png'),
(2, 'ENSIBS Lorient', 2, 'https://files.u-angers.fr/data/f-da40089d33d5a7dec97d3c07.png'),
(3, 'ENSIBS Lorient', 3, 'https://files.u-angers.fr/data/f-826c69fd2b49f9ba0e937a4f.png'),

(4, 'ENSIBS Vannes', 1, 'https://files.u-angers.fr/data/f-561020ef9e58213e433292f3.png'),
(5, 'ENSIBS Vannes', 2, 'https://files.u-angers.fr/data/f-a3b58b086b35536a9d02d9ea.png'),
(6, 'ENSIBS Vannes', 3, 'https://files.u-angers.fr/data/f-226c19158c2fe2bcc9b8eb9d.png'),

(7, 'ENSIM', 1, 'https://files.u-angers.fr/data/f-790eaf77c4cee135e207c94e.png'),
(8, 'ENSIM', 2, 'https://files.u-angers.fr/data/f-bc99290bcd78bc939490a752.png'),
(9, 'ENSIM', 3, 'https://files.u-angers.fr/data/f-5ca90f8967bfc3051a54a9d7.png'),

(10, 'ISEL', 1, 'https://files.u-angers.fr/data/f-e2ace55600c9348b9288047c.png'),
(11, 'ISEL', 2, 'https://files.u-angers.fr/data/f-309a0c205fe4b7759a7a015c.png'),
(12, 'ISEL', 3, 'https://files.u-angers.fr/data/f-2fcefb72f5d390e25fb66b02.png'),

(13, 'ESGT', 1, 'https://files.u-angers.fr/data/f-64374de87ae7955d9f550f9d.png'),
(14, 'ESGT', 2, 'https://files.u-angers.fr/data/f-16fbb50b853e7b789b40159a.png'),
(15, 'ESGT', 3, 'https://files.u-angers.fr/data/f-5ca90f8967bfc3051a54a9d7.png'),

(16, 'Polytech Lille', 1, 'https://files.u-angers.fr/data/f-6588271cad7efe2a3f819cc9.png'),
(17, 'Polytech Lille', 2, 'https://files.u-angers.fr/data/f-bc195bd1211fad00e2af0f19.png'),
(18, 'Polytech Lille', 3, 'https://files.u-angers.fr/data/f-b405b5610ea26271c31833f1.png'),

(19, 'Polytech Paris Sorbonne', 1, 'https://files.u-angers.fr/data/f-ba2691907af9cc6640a1e3e6.png'),
(20, 'Polytech Paris Sorbonne', 2, 'https://files.u-angers.fr/data/f-aef80c8dfa13c4d17ac1eee0.png'),
(21, 'Polytech Paris Sorbonne', 3, 'https://files.u-angers.fr/data/f-9c56fabad7d296da10dd4b64.png'),

(22, 'Polytech Paris Saclay', 1, 'https://files.u-angers.fr/data/f-4dc410ece8b41c6eaba1978a.png'),
(23, 'Polytech Paris Saclay', 2, 'https://files.u-angers.fr/data/f-af6eb2e5f5e3beaab37f6487.png'),
(24, 'Polytech Paris Saclay', 3, 'https://files.u-angers.fr/data/f-f880a92a3c2e695bae1832f1.png'),

(25, 'Polytech Nancy', 1, 'https://files.u-angers.fr/data/f-1879c2e05d6670d8fd44b2a3.png'),
(26, 'Polytech Nancy', 2, 'https://files.u-angers.fr/data/f-2760447989be1cd2fa8e14bc.png'),
(27, 'Polytech Nancy', 3, 'https://files.u-angers.fr/data/f-c664b90f84ea7e9cb0584dcc.png'),

(28, 'Polytech Orléans', 1, 'https://files.u-angers.fr/data/f-99b3da6e29ccf28c57dbbc4d.png'),
(29, 'Polytech Orléans', 2, 'https://files.u-angers.fr/data/f-63cd9ee020661b663da4eaaf.png'),
(30, 'Polytech Orléans', 3, 'https://files.u-angers.fr/data/f-fd152471450ea081a69f78bb.png'),

(31, 'Polytech Dijon', 1, 'https://files.u-angers.fr/data/f-34bb367304a0002d4542a7ea.png'),
(32, 'Polytech Dijon', 2, 'https://files.u-angers.fr/data/f-06f87d3cbc7230f15e3b72f1.png'),
(33, 'Polytech Dijon', 3, 'https://files.u-angers.fr/data/f-219d1a6423d7cd436db31f50.png'),

(34, 'Polytech Tours', 1, 'https://files.u-angers.fr/data/f-e1078307c9d117f3256956dd.png'),
(35, 'Polytech Tours', 2, 'https://files.u-angers.fr/data/f-05d55bcadff4b6dd2814a3dc.png'),
(36, 'Polytech Tours', 3, 'https://files.u-angers.fr/data/f-3244c7b215b0e48cf6433794.png'),

(37, 'Polytech Angers', 1, 'https://files.u-angers.fr/data/f-0053403c84c500cf014fb507.png'),
(38, 'Polytech Angers', 2, 'https://files.u-angers.fr/data/f-b39ae6748c89f47e00bcf553.png'),
(39, 'Polytech Angers', 3, 'https://files.u-angers.fr/data/f-1f04e38ee2e4c710bfa5a11f.png'),

(40, 'Polytech Nantes-Gavy', 1, 'https://files.u-angers.fr/data/f-f0e0f900b763a30f871abad7.png'),
(41, 'Polytech Nantes-Gavy', 2, 'https://files.u-angers.fr/data/f-4c532b54de38151f2d7e41ad.png'),
(42, 'Polytech Nantes-Gavy', 3, 'https://files.u-angers.fr/data/f-78368dc20d180885919f62df.png'),

(43, 'Polytech Annecy-Chambéry', 1, 'https://files.u-angers.fr/data/f-fa29dbff79480562f3813b47.png'),
(44, 'Polytech Annecy-Chambéry', 2, 'https://files.u-angers.fr/data/f-0e6a279f0ec492b4b5d1ae06.png'),
(45, 'Polytech Annecy-Chambéry', 3, 'https://files.u-angers.fr/data/f-d150ed74bfa0e25771b89862.png'),

(46, 'Polytech Lyon', 1, 'https://files.u-angers.fr/data/f-75dfa75783c0c02879bc122b.png'),
(47, 'Polytech Lyon', 2, 'https://files.u-angers.fr/data/f-710ecd2cb612286ecae3803b.png'),
(48, 'Polytech Lyon', 3, 'https://files.u-angers.fr/data/f-7f9c93bbb8a26b1447eee732.png'),

(49, 'Polytech Clermont', 1, 'https://files.u-angers.fr/data/f-359c187031b9c5d3f3832e04.png'),
(50, 'Polytech Clermont', 2, 'https://files.u-angers.fr/data/f-6f3c95a07b0384d8a53f30e9.png'),
(51, 'Polytech Clermont', 3, 'https://files.u-angers.fr/data/f-1ddf5531f5247c426a79085f.png'),

(52, 'Polytech Nice Sophia', 1, 'https://files.u-angers.fr/data/f-19abc1f924f29195c1536a55.png'),
(53, 'Polytech Nice Sophia', 2, 'https://files.u-angers.fr/data/f-726d531633ad08e6073c54d5.png'),
(54, 'Polytech Nice Sophia', 3, 'https://files.u-angers.fr/data/f-d7872f726d0ec45fdf70beee.png'),

(55, 'Polytech Marseille', 1, 'https://files.u-angers.fr/data/f-6b1ee0fc0b472ba74007d714.png'),
(56, 'Polytech Marseille', 2, 'https://files.u-angers.fr/data/f-0df7feef0b0fb91039fc9c56.png'),
(57, 'Polytech Marseille', 3, 'https://files.u-angers.fr/data/f-37180a564ccb84694ea2ac40.png'),

(58, 'Polytech Montpellier', 1, 'https://files.u-angers.fr/data/f-d9f7030a1614cd2eecbed230.png'),
(59, 'Polytech Montpellier', 2, 'https://files.u-angers.fr/data/f-c44eca2438b678604d9bd3a3.png'),
(60, 'Polytech Montpellier', 3, 'https://files.u-angers.fr/data/f-18cd7f7c993697a345b13abc.png');

ALTER TABLE `polyguessr`
  ADD PRIMARY KEY (`id`);
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
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `choixdujour`
--
ALTER TABLE `choixdujour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
