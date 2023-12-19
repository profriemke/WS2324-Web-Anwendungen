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
-- Tabellenstruktur für Tabelle `blog_user`
--

CREATE TABLE `blog_user` (
  `id` bigint(20) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(300) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `blog_user`
--

INSERT INTO `blog_user` (`id`, `login`, `password`, `firstname`, `lastname`) VALUES
(1, 'riemke', '$scrypt$n=16384,r=8,p=1$SN3P0izSMGQHdT4HeP0ghg$m5Z+TOxZo3+DrThgDepcMpGclL/lOomcEmfgzJWHWRn8+sj6MOFIuvukl9FuQo3VcAG9h3RKgEHWWF2yMNDT9w', 'Thorsten', 'Riemke');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `blog_user`
--
ALTER TABLE `blog_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `blog_user`
--
ALTER TABLE `blog_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
