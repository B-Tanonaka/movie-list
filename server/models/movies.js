const db = require('../database');

module.exports = {

  getAll: (callback) => {
    db.connection.query('SELECT * FROM list', (err, results) => {
      callback(err, response);
    });
  },

  create: (messsage, callback) => {

  }
}
