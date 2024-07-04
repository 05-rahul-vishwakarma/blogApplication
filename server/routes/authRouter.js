const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated');
const { register, login , isAuth} = require('../controler/authControler')



router.post('/register', register)
router.post('/login',login)
router.get('/auth',isAuthenticated,isAuth)


module.exports = router;
