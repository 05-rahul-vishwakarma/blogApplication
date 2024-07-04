const express = require('express');
const router = express.Router();
const {getProfile , blogPost , allBlogpost , getBlogDetails} = require('../controler/userControler');
// const isAuthenticated = require('../middleware/isAuthenticated');



router.get  ('/profile',getProfile);
router.post ('/blogPost',blogPost);
router.get  ('/allBlogpost',allBlogpost);
router.get  ('/getBlogDetails',getBlogDetails)

module.exports = router;