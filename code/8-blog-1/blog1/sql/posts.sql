-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 19. Dez 2023 um 11:17
-- Server-Version: 10.11.4-MariaDB-1
-- PHP-Version: 8.2.10-2ubuntu1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `s23wdb`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `title` varchar(300) NOT NULL,
  `teaser` varchar(500) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL,
  `author` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `posts`
--

INSERT INTO `posts` (`id`, `title`, `teaser`, `text`, `date`, `author`) VALUES
(1, 'Dienstag ist toll', 'Dienstags ist immer was los an der HdM.', 'Dienstags ist immer was los an der HdM. Lecker essen und lange Pausen.', '2023-11-28', 1),
(2, 'Neuer Blog', 'Wir haben jetzt einen Blog.', 'Wir haben jetzt einen Blog. Da wird gebloggt.', '2023-11-28', 1),
(3, 'Ein dritter Post', 'Der dritte Post ist der Beste.', 'Der dritte Post ist der Beste. Hat auch keinen Inhalt', '2023-11-28', 1),
(4, 'Ein vierter Post', 'Der vierter Post ist der Beste.', 'Der vierter Post ist der Beste. Hat auch keinen Inhalt', '2023-11-28', 1),
(5, 'Ein vierter Post', 'Der vierter Post ist der Beste.', 'Der vierter Post ist der Beste. Hat auch keinen Inhalt', '2023-11-28', 1),
(6, 'Ein vierter Post', 'Der vierter Post ist der Beste.', 'Der vierter Post ist der Beste. Hat auch keinen Inhalt', '2023-11-28', 1),
(7, 'Adventspost', 'Advent ist jetzt', 'Bald Weihnachten', '2023-12-05', 1),
(8, 'Adventspost', 'Advent ist jetzt', 'Bald Weihnachten', '2023-12-05', 1),
(9, 'Adventspost', 'Advent ist jetzt', 'Bald Weihnachten', '2023-12-05', 1),
(10, 'sicherer Post', 'sicher?', 'sicher!', '2023-12-12', 1),
(11, 'sicher', 'abe', 'ja', '2023-12-12', 1);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
