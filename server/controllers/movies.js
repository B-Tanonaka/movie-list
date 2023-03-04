const models = require('../models/movies.js');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json',
};

module.exports = {

  get: (req, res) => {
    models.getAll((err, response) => {
    if (err) {
      headers['Content-Type'] = 'plain/text'
      res.writeHead(404, headers);
      res.end('Unable to GET message');
    }
    headers['Content-Type'] = 'application/json';
    res.writeHead(200, headers);
    res.end(JSON.stringify(response));
  });
  },

  post: (req, res) => {
    // console.log(req);
    // console.log('req.body: ', req.body);

    models.create(req.body, (err, response) => {
      if (err) {
        console.log(err);
        res.end('Unable to POST message');
        return;
      }
      res.end(JSON.stringify(req.body));
    });
  }
}