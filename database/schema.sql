DROP DATABASE worldBuild;

CREATE DATABASE worldBuild;

USE worldBuild;


CREATE TABLE Habitat (
  id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  habitat_id int,
  habitat_name varchar(50)
);

CREATE TABLE Users (
  id integer NOT NULL AUTO_INCREMENT primary key,
  username varchar(50) UNIQUE,
  password varchar(80)
);

CREATE TABLE Worlds {
    id integer NOT NULL AUTO_INCREMENT primary key,
    user_id integer,
    worldName varChar(255),
    FOREIGN KEY (user_id) REFERENCES Users(id)
};

CREATE TABLE Regions {
  id integer NOT NULL AUTO_INCREMENT primary key,
  world_id integer,
  regionName varChar(255),
  habitat_id int,

  FOREIGN KEY (world_id) REFERENCES Worlds(id),
  FOREIGN KEY (habitat_id) REFERENCES Habitats(habitat_id)
}

CREATE TABLE Animals (
  id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
  habitat_id integer,
  animal_name varchar(255),
  predator boolean,
  FOREIGN KEY (habitat_id) references habitat(habitat_id)
);

-- CREATE TABLE Plants (

-- );

-- ALTER TABLE userInput
--   ADD FOREIGN KEY (habitat_id) references habitat(habitat_id);

-- ALTER TABLE Animals
--   ADD FOREIGN KEY (habitat_id) references habitat(habitat_id);

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

INSERT INTO habitat (habitat_id, habitat_name)  VALUES (1, 'Desert');

INSERT INTO habitat (habitat_id, habitat_name)  VALUES (2, 'Tundra');

INSERT INTO habitat (habitat_id, habitat_name)  VALUES (3, 'Grassland');

INSERT INTO habitat (habitat_id, habitat_name)  VALUES (4, 'Forest');

INSERT INTO habitat (habitat_id,
 habitat_name)  VALUES (5, 'Rainforest');

INSERT INTO habitat (habitat_id, habitat_name)  VALUES (6, 'Wetland');

INSERT INTO habitat (habitat_id, habitat_name)  VALUES (7, 'Aquatic');

INSERT INTO Animals (animal_name, habitat_id,predator)  VALUES ('alligator', 6, true);

INSERT INTO Users (username, password) VALUES ('testTay', 'password')

INSERT INTO Worlds (user_id, worldName) VALUES (1, 'WetlandWorld');
