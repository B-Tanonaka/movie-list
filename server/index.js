const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const router = require('./routes.js')

app.use(express.json());

app.use('/', router);

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports.app = app;