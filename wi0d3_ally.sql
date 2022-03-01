-- phpMyAdmin SQL Dump
-- version 4.9.6
-- https://www.phpmyadmin.net/
--
-- Hôte : wi0d3.myd.infomaniak.com
-- Généré le :  mar. 01 mars 2022 à 09:17
-- Version du serveur :  10.4.19-MariaDB-1:10.4.19+maria~stretch-log
-- Version de PHP :  7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `wi0d3_ally`
--

-- --------------------------------------------------------

--
-- Structure de la table `equipe_dev`
--

CREATE TABLE `equipe_dev` (
  `id_dev` int(11) NOT NULL,
  `dev_nom` varchar(50) NOT NULL,
  `dev_prenom` varchar(50) NOT NULL,
  `github` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipe_dev`
--

INSERT INTO `equipe_dev` (`id_dev`, `dev_nom`, `dev_prenom`, `github`) VALUES
(1, 'Esteves', 'Tania', 'es-tania'),
(2, 'Nguyen', 'Léa', 'lea-nguyen'),
(3, 'Andriamiraho', 'Mathieu', 'domesday');

-- --------------------------------------------------------

--
-- Structure de la table `mentions_legales`
--

CREATE TABLE `mentions_legales` (
  `id_mentions` int(11) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `texte` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id_message` int(11) NOT NULL,
  `msg_email` varchar(100) NOT NULL,
  `msg_nom` varchar(50) NOT NULL,
  `msg_prenom` varchar(50) NOT NULL,
  `msg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `photos_salon`
--

CREATE TABLE `photos_salon` (
  `id_photo` int(11) NOT NULL,
  `lien_photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photos_salon`
--

INSERT INTO `photos_salon` (`id_photo`, `lien_photo`) VALUES
(1, 'https://cdn1.treatwell.net/images/view/v2.i2500358.w720.h480.xB8AD3311/'),
(2, 'https://cdn1.treatwell.net/images/view/v2.i2500346.w720.h480.x122C1F52/'),
(3, 'https://cdn1.treatwell.net/images/view/v2.i2500347.w720.h480.xE91B43C6/'),
(4, 'https://cdn1.treatwell.net/images/view/v2.i2500348.w720.h480.xF78FF188/'),
(5, 'https://cdn1.treatwell.net/images/view/v2.i2500349.w720.h480.xE325FEAC/'),
(6, 'https://cdn1.treatwell.net/images/view/v2.i2500349.w720.h480.xE325FEAC/'),
(7, 'https://cdn1.treatwell.net/images/view/v2.i2500350.w720.h480.x4DA6D777/');

-- --------------------------------------------------------

--
-- Structure de la table `prestations`
--

CREATE TABLE `prestations` (
  `id_prestation` int(11) NOT NULL,
  `prest_nom` varchar(100) NOT NULL,
  `prest_temps` time NOT NULL DEFAULT current_timestamp(),
  `prix` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `prestations`
--

INSERT INTO `prestations` (`id_prestation`, `prest_nom`, `prest_temps`, `prix`) VALUES
(1, 'Traitement + Shampoing + Brushing', '01:05:00', '60.00'),
(2, 'Traitement + Shampoing + Coupe', '01:20:00', '50.00'),
(3, 'Traitement + Shampoing + Coupe + Séchage', '01:10:00', '60.00');

-- --------------------------------------------------------

--
-- Structure de la table `rel_prest_msg`
--

CREATE TABLE `rel_prest_msg` (
  `ext_msg` int(11) NOT NULL,
  `ext_prest` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `salon`
--

CREATE TABLE `salon` (
  `salon_nom` varchar(100) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `salon_telephone` int(11) NOT NULL,
  `salon_adresse` varchar(255) NOT NULL,
  `horaires` varchar(100) NOT NULL,
  `facebook` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `salon`
--

INSERT INTO `salon` (`salon_nom`, `logo`, `salon_telephone`, `salon_adresse`, `horaires`, `facebook`) VALUES
('ICON Paris', 'https://static.wixstatic.com/media/827e6d_070e6be94fc84d4a98fa18b96cc40b1e~mv2.jpg/v1/fill/w_249,h_150,al_c,q_80,usm_0.66_1.00_0.01/LOGO-FOND-NOIR-RECA.webp', 140790018, '13 Villa Saint Michel, Paris, 75018', '9h-18h', 'https://www.facebook.com/lesaloniconparis');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `equipe_dev`
--
ALTER TABLE `equipe_dev`
  ADD PRIMARY KEY (`id_dev`);

--
-- Index pour la table `mentions_legales`
--
ALTER TABLE `mentions_legales`
  ADD PRIMARY KEY (`id_mentions`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`);

--
-- Index pour la table `photos_salon`
--
ALTER TABLE `photos_salon`
  ADD PRIMARY KEY (`id_photo`);

--
-- Index pour la table `prestations`
--
ALTER TABLE `prestations`
  ADD PRIMARY KEY (`id_prestation`);

--
-- Index pour la table `salon`
--
ALTER TABLE `salon`
  ADD PRIMARY KEY (`salon_nom`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `equipe_dev`
--
ALTER TABLE `equipe_dev`
  MODIFY `id_dev` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `mentions_legales`
--
ALTER TABLE `mentions_legales`
  MODIFY `id_mentions` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `photos_salon`
--
ALTER TABLE `photos_salon`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `prestations`
--
ALTER TABLE `prestations`
  MODIFY `id_prestation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
