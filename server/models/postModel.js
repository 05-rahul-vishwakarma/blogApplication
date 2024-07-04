const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    blogTopic:{
      type:String,
      required:true,
    },
    blogImage:{
        type:String,
        required:true,
    },
    blogWriting:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Post = mongoose.model('Post',postSchema);
module.exports = Post;

