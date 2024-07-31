const express = require('express');
const router = express.Router();
const { getProfile, blogPost, allBlogpost, getBlogDetails, uploadProfilePhoto } = require('../controler/userControler');
const isAuthenticated = require('../middleware/isAuthenticated');


router.get('/isAuthenticated', isAuthenticated, (req, res) => {
    return res.json({
        status: 200
    })
});

router.get('/profile', isAuthenticated, getProfile);
router.post('/blogPost', isAuthenticated, blogPost);
router.get('/allBlogpost', allBlogpost);
router.get('/getBlogDetails', getBlogDetails)
router.post('/uploadProfilePhoto', isAuthenticated, uploadProfilePhoto)

module.exports = router;