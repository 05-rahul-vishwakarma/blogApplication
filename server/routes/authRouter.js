const express = require('express');
const router = express.Router();
const cors = require('cors');
const isAuthenticated = require('../middleware/isAuthenticated');
const { register, login , isAuth} = require('../controler/authControler')


// middleware 
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173"
    })
)

router.post('/register', register)
router.post('/login',login)
router.get('/auth',isAuthenticated,isAuth)


module.exports = router;
