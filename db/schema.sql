ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'esperAnza#88';

DROP DATABASE if exists burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);