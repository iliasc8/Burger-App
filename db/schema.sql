-- Drops the burger_db if it already exists --
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Create the burger_db and specified it for use.
USE burgers_db;
DROP TABLE IF EXISTS burgers;


-- Create the table burgers.
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(200) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

