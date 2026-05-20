const { mongoose } = require('mongoose');
const dns = require('dns');

// Force DNS to use Google servers to bypass local DNS issues with SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

const MONGODB_URL = "mongodb+srv://TESTER:sCwqAJ8RIgSO27rA@cluster0.ekxaloz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URL).then(() => {
  console.log("database is connected");
  process.exit(0);
}).catch((err) => {
  console.error("Connection error:", err);
  process.exit(1);
});
