var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('card_69/index', { name: 'Tao Shao Yu', id: '210410469' });
});

module.exports = router;
