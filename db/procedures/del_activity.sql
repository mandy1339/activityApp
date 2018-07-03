USE `activityappdb`;
DROP procedure IF EXISTS `_SYNTAX_ERROR`;

DELIMITER $$

USE `activityappdb`$$
CREATE PROCEDURE `del_activity`
(
    IN activityid_in INT
)
BEGIN
DELETE FROM activity
WHERE activityid = activityid_in;
END$$

DELIMITER ;


-- EXAMPLE USE:
-- CALL `activityappdb`.`del_activity`(14);