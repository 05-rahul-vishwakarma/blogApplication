const express = require('express');
const dotevv = require('dotenv').config();
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter')
const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("database is connented");
}).catch((err) => {
    console.log(err);
})


app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

const corsOption={
    origin:'https://blogapplicatonfrontend.onrender.com',
    credentials:true
};
app.use(cors(corsOption)); 

app.use('', authRouter)
app.use('', userRouter)

app.listen(port, () => {
    console.log(`app is listing ${port}`);
})
