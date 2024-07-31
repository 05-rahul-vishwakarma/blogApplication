const User = require("../models/user");
const jwt = require('jsonwebtoken');
const CustomError = require('../helper/customError');

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
            message:'something went wrong',
            status: 500,
        })
    }

}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username,password);

        if (!username || !password) throw new CustomError('404', 'please fill all the fields');

        const user = await User.findOne({ username });

        if (!user) throw new CustomError(404, "user not found please enter valid username");

        if (password !== user.password) throw new CustomError(401, 'please fill the correct password');

        const tokenData = {
            userId: user._id,
            username: user.username,
            email: user.email,
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            sameSite: 'None',
            secure: true,
            httpOnly: true
        });

        return res.json({
            status: 200,
            message: "user login successfully",
            token
        })


    } catch (error) {
        return res.json({
            status: 501,
            message:"something went wrong",
        })

    }
}

module.exports = { register, login }