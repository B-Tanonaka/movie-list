const db = require('../database');

module.exports = {

  getAll: (callback) => {
    db.connection.query('SELECT * FROM list', (err, response) => {
      callback(err, response);
    });
  },

  create: (message, callback) => {
    db.connection.query('INSERT INTO list (movie) VALUES (?)', [message.movie], (err, response) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, response);
    });
  }
}
