const mongoose = require('mongoose');
//mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/book-app');

module.exports = mongoose.connection;