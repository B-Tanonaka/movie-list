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
    console.log('GET message successful')
    res.end('GET message sucessful');
  });
  },

  post: (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    }).on('end', () => {
      let message = JSON.parse(body);
    });

    models.create(message, (err, response) => {
      if (err) {
        headers['Content-Type'] = 'plain/text';
        res.writeHead(404, headers);
        res.end('Unable to POST message');
      }

      headers['Content-Type'] = 'application/json';
      res.writeHead(201, headers);
      res.end(JSON.stringify(message));
    });
  }
}