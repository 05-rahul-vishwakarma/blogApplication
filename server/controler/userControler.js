const Post = require("../models/postModel");
const User = require("../models/user")

const getProfile = async (req, res) => {
  try {
    const username = req.username;
    const user = await User.findOne({ username: username })

    return res.json({
      message: "user data fetched succesfully",
      status: 200,
      user
    })

  } catch (error) {
    return res.json({
      message: "something went wrong",
      status: 501,
    })
  }

}

const blogPost = async (req, res) => {
  try {
    if (!req.username) throw new Error("please login first after that you can share your blog");
    const username = req.username;
    const user = await User.findOne({ username: username });

    const { blogTopic, blogImage, blogWriting } = req.body;

    const postBlog = {
      creatorId: user._id,
      username: user.username,
      blogTopic,
      blogImage,
      blogWriting
    }

    const newBlog = Post.create(postBlog);

    if (!newBlog) throw new Error("something went wrong post not created please try again");

    return res.json({
      message: "successfully posted blog",
      status: 200
    })

  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "something went wrong",
      status: 500
    })
  }
}

const allBlogpost = async (req, res) => {
  try {
    const allBlogPosts = await Post.find();
    return res.json({
      message: "success",
      status: 200,
      allBlogPosts
    })
  } catch (error) {
    console.log(error.message);
    return res.json({
      message: "failed",
      status: 500,
    })
  }
}

const getBlogDetails = async (req, res) => {
  try {
    const id = req.query.id;
    const post = await Post.findById(id);
    return res.json({
      message: "successfully data is fetched",
      status: 200,
      post
    })
  } catch (error) {
    console.log(error);
    return res.json({
      message: "something went wrong",
      status: 500
    })
  }
}


module.exports = { getProfile, blogPost, allBlogpost, getBlogDetails }