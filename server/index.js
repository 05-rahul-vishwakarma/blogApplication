const express = require('express');
const dns = require('dns');
const dotenv = require('dotenv').config();

// Force DNS to use Google servers to bypass local DNS issues with SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

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



// app.use(cors({
//   origin: 'http://localhost:5174',// allow this origin to access the server
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true // if your backend requires credentials
// }));


app.use(cors({
  origin: 'https://blogapplicationfront-end.onrender.com',// allow this origin to access the server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if your backend requires credentials
}));

app.use(authRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`app is listing ${port}`);
})
