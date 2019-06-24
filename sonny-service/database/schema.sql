-- DROP DATABASE IF EXISTS airbnb;

-- CREATE DATABASE airbnb;

-- USE airbnb;

-- USE ebdb;

USE airbnb;

CREATE TABLE `reviews` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `avatar` VARCHAR(25) NOT NULL,
  `numDaysAgo` INT NOT NULL,
  `content` VARCHAR(1500)
);

CREATE EVENT IF NOT EXISTS `updateage`
    ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 24 HOUR
    DO
      UPDATE airbnb.reviews SET numDaysAgo = numDaysAgo + 1;
