var express = require('express');
var router = express.Router();
let authController = require('../controllers/auth-controller');

router.post('/',authController.createToken.bind(authController));
module.exports = router;