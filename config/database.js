const mongoose = require('mongoose');
require('../models/User');
require('../models/Trip');





const dbName = 'sharedtrip';
const connectionString = `mongodb://127.0.0.1:27017/${dbName}`;

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err)
        })
    } catch (err) {
        console.error('Error connection to database');
        process.exit(1);
    }

};