DROP DATABASE IF EXISTS worldBuild;

CREATE DATABASE worldBuild;

USE worldBuild;




CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE,
  pass varchar(50) NOT NULL
);

CREATE TABLE worlds (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userid int NOT NULL,
  worldname varchar(50) NOT NULL,
  formfill longtext
);

ALTER TABLE worlds
  ADD FOREIGN KEY (userid) references Users(id);

CREATE TABLE regions (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    worldId integer(10),
    regionName varChar(255),
    formfill longtext
);

  ALTER TABLE regions
  ADD FOREIGN KEY (worldId) REFERENCES Worlds(id);

CREATE TABLE cities (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    regionId integer(10),
    cityName varChar(255),
    formfill longtext
);

  ALTER TABLE cities
  ADD FOREIGN KEY (regionId) REFERENCES Regions(id);
    

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

INSERT INTO Users (id, username, pass) VALUES (1, 'Tay', 'pass');

INSERT INTO Worlds (id, userId, worldName) VALUES (1, 1, 'Ice & Fire');

INSERT INTO Regions (id, worldId, regionName) VALUES (1, 1, 'Westeros');

INSERT INTO Cities (id, regionId, cityName) VALUES (1, 1, "King's Landing");

INSERT INTO Worlds (id, userId, worldName) VALUES (2, 1, "Tay's World");

INSERT INTO Regions (id, worldId, regionName) VALUES (2, 2, 'Animus');

INSERT INTO Cities (id, regionId, cityName) VALUES (2, 2, "Loserville");