const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        default:"",
    },
    posts: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;