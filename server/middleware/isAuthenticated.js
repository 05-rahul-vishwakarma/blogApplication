const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req?.cookies?.token || "";
        // console.log(token);
        if (!token) {
            return res.json({
                message: "user is not authenticated",
                status: 401
            })
        };
        const decode = await jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.json({
                message: "something went wrong",
                status: 500
            })
        }
        req.id = decode.userId;   
        req.username = decode.username;
        req.email = decode.email;
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = isAuthenticated;