CREATE TABLE `webuser` (
  `webuserkey` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `userpassword` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`webuserkey`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
