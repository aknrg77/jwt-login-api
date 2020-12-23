const mongoose = require('mongoose');
require('dotenv').config();



mongoose.connect(process.env.MONGO_URL, {
useUnifiedTopology: true,
useNewUrlParser: true,
}).then(() => console.log('DB Connected!')).catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});

const db = mongoose.connection;

module.exports = db;