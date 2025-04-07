-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 06, 2025 at 04:01 PM
-- Server version: 8.0.40
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coworking`
--

-- --------------------------------------------------------

--
-- Table structure for table `Members`
--

CREATE TABLE `Members` (
  `id` int NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_email` varchar(100) DEFAULT NULL,
  `customer_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Members`
--

INSERT INTO `Members` (`id`, `customer_name`, `customer_email`, `customer_password`, `is_admin`) VALUES
(2, 'Bob Smith', 'bob@example.com', '555-5678', 0),
(3, 'Dzebni Smith', 'alice@example.com', '$2y$12$YqiUfJ0T11rNIVF/9P4SPuzP0YYexrq5MJHrDJlXC8Ezd0MOY/aFe', 0),
(4, 'Dzebni Smith', 'alice@example.com', '$2y$12$I4grhOyKabTt1Obb6NXBn.YHzBH3tJa/SBGY.tzA8yp91hBqfcLNK', 0),
(5, 'Dzebni Smith', 'alice@example.com', '$2y$12$5aIOW0Q69lT2qu0T2O2C2eY2hOA.7CuLqfaY3dDPVnxMBY8/s2H2y', 0),
(6, 'Dzebni Smith', 'alice@example.com', '$2y$12$FYvPwz.xc5yDDaBXnMibn.2tZ9xBC89HvjmJbXR6Y7m.fok4ClxNy', 0),
(7, 'Dzebni Smith', 'alice@example.com', '$2y$12$.7CL4aT/rHBi2vmFsf7kDeSSymAXaJ4/PJy2xdwU3a1KlbwxEmmUq', 0),
(8, 'Dzebni Smith', 'alice@example.com', '$2y$12$Nd7QqiQpXqe.JiRJBiyhrelvZwzhLuV1Jtkx4bG9crRXTpr3dZ94C', 0),
(9, 'Dzebni Smith', 'alice@example.com', '$2y$12$boITjeX5LvyCci7mkzu8E.qS75V6aETUUfeqjvlHzoiEhEtl/hucK', 0),
(10, 'Dzebni Smith', 'alice@example.com', '$2y$12$eJv55Siv6tYdpdEP1cwKYO//BbeErojmYNTnJliMvj37jII.lYqBK', 0),
(11, 'Dzebni Smith', 'alice@example.com', '$2y$12$4Tlk1MCGxUGb49TT49K64uKmt0ltup6OH85lwomJ/.JJTTC6B25qm', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Messages`
--

CREATE TABLE `Messages` (
  `id` int NOT NULL,
  `message_content` varchar(300) NOT NULL,
  `customer_id` int NOT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Messages`
--

INSERT INTO `Messages` (`id`, `message_content`, `customer_id`, `submitted_at`) VALUES
(2, 'Hello MESSAGE', 2, '2025-04-06 12:31:26'),
(3, 'Hello MESSAGE', 2, '2025-04-06 12:32:46'),
(4, 'Hello MESSAGE', 2, '2025-04-06 12:33:51');

-- --------------------------------------------------------

--
-- Table structure for table `Plans`
--

CREATE TABLE `Plans` (
  `id` int NOT NULL,
  `plan_price` decimal(10,2) NOT NULL,
  `plan_title` varchar(50) NOT NULL,
  `plan_description` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Plans`
--

INSERT INTO `Plans` (`id`, `plan_price`, `plan_title`, `plan_description`) VALUES
(1, 0.00, 'Daily Pass', 'Single-day coworking access'),
(2, 19.00, 'Flex 7', '7 days per month coworking plan'),
(3, 29.00, 'Flex 30', '30 days per month coworking plan'),
(4, 49.00, 'Professional', 'Premium monthly plan with private space'),
(5, 19.99, 'Basic Plan', 'Basic plan with limited features.'),
(6, 19.99, 'Basic Plan', 'Basic plan with limited features.'),
(7, 19.99, 'Basic Plan', 'Basic plan with limited features.');

-- --------------------------------------------------------

--
-- Table structure for table `Reservations`
--

CREATE TABLE `Reservations` (
  `id` int NOT NULL,
  `customer_id` int NOT NULL,
  `plan_id` int NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Reservations`
--

INSERT INTO `Reservations` (`id`, `customer_id`, `plan_id`, `order_date`) VALUES
(2, 2, 3, '2025-04-02'),
(3, 2, 1, '2025-04-06'),
(4, 2, 1, '2025-04-06');

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `id` int NOT NULL,
  `service_title` varchar(50) NOT NULL,
  `service_desc` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Services`
--

INSERT INTO `Services` (`id`, `service_title`, `service_desc`) VALUES
(1, 'Virtual Office', 'A business address and mail handling'),
(2, 'Conference Room', 'Book private meeting rooms as needed'),
(3, 'Premium Service', 'Premium service with all features.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Members`
--
ALTER TABLE `Members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_messages_customer` (`customer_id`);

--
-- Indexes for table `Plans`
--
ALTER TABLE `Plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Reservations`
--
ALTER TABLE `Reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_reservations_customer` (`customer_id`),
  ADD KEY `fk_reservations_plan` (`plan_id`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Members`
--
ALTER TABLE `Members`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Plans`
--
ALTER TABLE `Plans`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Reservations`
--
ALTER TABLE `Reservations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Services`
--
ALTER TABLE `Services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Messages`
--
ALTER TABLE `Messages`
  ADD CONSTRAINT `fk_messages_customer` FOREIGN KEY (`customer_id`) REFERENCES `Members` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Reservations`
--
ALTER TABLE `Reservations`
  ADD CONSTRAINT `fk_reservations_customer` FOREIGN KEY (`customer_id`) REFERENCES `Members` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservations_plan` FOREIGN KEY (`plan_id`) REFERENCES `Plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
