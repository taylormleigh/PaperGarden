const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// const getAllTransactions = function(callback) {
//   connection.query(`Select * from transactions`, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       callback(null, data);
//     }
//   })
// };

const addWorld = function(world, callback) {
  console.log('you added a world');
  // connection.query(`Insert ignore into categories (category, budget) values ('${cat}', '${budg}')`, (err, data) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     callback(null, data);
  //   }
  // })
};


module.exports = {
  addWorld
};
