CREATE TABLE `activityappdb`.`activity` (
  `activityid` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `description` VARCHAR(200) NULL,
  `longdist` TINYINT(1) NULL,
  `indoor` TINYINT(3) NULL,
  `inhouse` TINYINT(1) NULL,
  `daytime` TINYINT(3) NULL,
  PRIMARY KEY (`activityid`));
