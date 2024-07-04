const express = require('express');
const router = express.Router();
const {getProfile , blogPost , allBlogpost , getBlogDetails} = require('../controler/userControler');
const isAuthenticated = require('../middleware/isAuthenticated');



router.get  ('/profile',isAuthenticated,getProfile);
router.post ('/blogPost',isAuthenticated,blogPost);
router.get  ('/allBlogpost',isAuthenticated,allBlogpost);
router.get  ('/getBlogDetails',isAuthenticated,getBlogDetails)

module.exports = router;