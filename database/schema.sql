DROP DATABASE IF EXISTS worldBuild;

CREATE DATABASE worldBuild;

USE worldBuild;




CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE,
  pass varchar(50) NOT NULL
);

CREATE TABLE worlds {
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    regionId integer(10),
    worldName varChar(255)
};

ALTER TABLE worlds
  ADD FOREIGN KEY (regionId) references Users(id);

CREATE TABLE regions {
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    regionId integer(10),
    worldName varChar(255)
};

ALTER TABLE regions
  ADD FOREIGN KEY (worldId) REFERENCES Worlds(id);

CREATE TABLE cities {
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    regionId integer(10),
    regionName varChar(255),
};

ALTER TABLE cities
  ADD FOREIGN KEY (worldId) REFERENCES Worlds(id);
    

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

INSERT INTO Worlds (id, userId, worldName) VALUES (1, 1, 'TayLand');

INSERT INTO Regions (id, worldId, regionName) VALUES (1, 1, 'RegionInWorld');

INSERT INTO Cities (id, regionId, cityName) VALUES (1, 1, 'CityInRegion');