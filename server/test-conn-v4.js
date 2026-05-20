const { mongoose } = require('mongoose');
const dns = require('dns');

// Try setting default result order
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const MONGODB_URL = "mongodb+srv://TESTER:sCwqAJ8RIgSO27rA@cluster0.ekxaloz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URL).then(() => {
  console.log("database is connected");
  process.exit(0);
}).catch((err) => {
  console.error("Connection error:", err);
  process.exit(1);
});
