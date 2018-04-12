var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router;
