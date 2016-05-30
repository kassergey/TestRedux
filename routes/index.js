var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/storeCart', function(req, res, next) {
    res.render('storeCart', { title: 'Express' });
});

module.exports = router;
