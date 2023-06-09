const controller = require('./controllers/movies');
const router = require('express').Router();

router.get('/movies', controller.get);

router.post('/movies', controller.post);

module.exports = router;