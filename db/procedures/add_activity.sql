USE `activityappdb`;
DROP procedure IF EXISTS `_SYNTAX_ERROR`;

DELIMITER $$
USE `activityappdb`$$
CREATE PROCEDURE `add_activity` 
(
IN name_in VARCHAR(45),
IN date_in date,
IN description_in VARCHAR(200),
IN longdist_in TINYINT(1),
IN indoor_in TINYINT(3),
IN inhouse_in TINYINT(1),
IN daytime_in TINYINT(3)
)
BEGIN
INSERT INTO activity VALUES
(
NULL,
name_in,
date_in,
description_in,
longdist_in,
indoor_in,
inhouse_in, 
daytime_in
);
END$$

DELIMITER ;


-- EXAMPLE USE:
-- call activityappdb.add_activity('qqwer', '2018-05-05', '213sdaf sadfsjaldfk ', 1, 1, 1, 1);
