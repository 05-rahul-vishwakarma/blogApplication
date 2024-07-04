const express = require('express');
const dotevv = require('dotenv').config();
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter')
const session = require('express-session');
const app = express();
const port = 8000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("database is connented");
}).catch((err) => {
    console.log(err);
})


app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: process.env.JWT_SECRET, // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: Date.now() + 24 * 60 * 60 * 1000 },
    expires: Date.now() + 24 * 60 * 60 * 1000,
}));

app.use('', authRouter)
app.use('', userRouter)

app.listen(port, () => {
    console.log(`app is listing ${port}`);
})