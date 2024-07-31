const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const isAuthenticated = async (req, res, next) => {
    const token = req.headers['authorization'] || req?.cookies?.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.id = decoded.userId;
        req.username = decoded.username;
        req.email = decoded.email;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = isAuthenticated;


