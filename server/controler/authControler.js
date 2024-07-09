const User = require("../models/user");
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        if (!username || !email || !password || !confirmPassword) throw new Error("field is missing");
        if (password !== confirmPassword) throw new Error("password and confirm password not matched");
        const user = await User.findOne({
            $or: [{ username: username }, { email: email }]
        });
        if (user) throw new Error("user is already exits")

        const newUser = await User.create({
            username,
            email,
            password
        })

        if (newUser) {
            return res.json({
                message: "user is registered successfully",
                status: 200
            })
        } else {
            return res.json({
                message: "failed try again latter",
                status: 501
            })
        }

    } catch (error) {
        return res.json({
            message: error.message,
            status: 500,
        })
    }

}


const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Error("field is missing");
        const user = await User.findOne({ username });
        if (!user) throw new Error("user is not found");
        if (password === user.password) {
            const tokenData = {
                userId: user._id,
                username: user.username,
                email: user.email,
            }

            const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

            res.cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000 , sameSite: 'None', secure : true });
             return res.send({
                message: "successfully login",
                status: 200,
                _id: user._id,
                username: user.username,
                email: user.email,
                token
            });
            
            } else {
                return res.json({
                    message: "password is incorrect",
                    status: 500
                })
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            message: "something went wrong",
            status: 500
        })
    }
}

const isAuth = async (req, res) => {
    return res.json({
        message: "okay working authniticated",
        status: 200
    })
}


module.exports = { register, login, isAuth }