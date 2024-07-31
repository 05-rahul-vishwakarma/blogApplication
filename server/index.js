const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("database is connented");
}).catch((err) => {
  console.log(err);
})


app.use(cookieParser())

app.use(express.json({ limit: '50mb' }));

// Increase the limit for URL-encoded payload
app.use(express.urlencoded({ limit: '50mb', extended: true }));



app.use(cors({
  // origin: 'http://localhost:5173',// allow this origin to access the server
  // origin: 'https://blogapplicatonfrontend.onrender.com',
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/auth', authRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`app is listing ${port}`);
})
