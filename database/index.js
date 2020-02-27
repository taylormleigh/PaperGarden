const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getWorld = function(callback) {
  connection.query(`Select * from worlds`, (err, data) => {
    if (err) {
      console.error('jinkies: ', err);
    } else {
      callback(null, data);
    }
  })
};

const addWorld = function(world, callback) {
  console.log(`"${JSON.stringify(world)}"`);
  connection.query(`Insert into worlds (worldname, userid, formfill) values ('${world.worldName}', 1, '${JSON.stringify(world)}')`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  addWorld,
  getWorld
};
