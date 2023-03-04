DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE list (

  id int PRIMARY KEY AUTO_INCREMENT,
  movie varchar(255)

);