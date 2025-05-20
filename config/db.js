const mongoose = require('mongoose');

const connectDB = mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

module.exports = connectDB;
// kya mei vscode bnd kar du? ooooooye hellwoooo gadhi