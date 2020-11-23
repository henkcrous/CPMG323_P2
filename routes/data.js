var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


/* GET data page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('data', { title: 'Additional Data !' });
});

module.exports = router;
