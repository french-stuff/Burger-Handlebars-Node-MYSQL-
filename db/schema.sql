CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN default false,
PRIMARY KEY(id)

);