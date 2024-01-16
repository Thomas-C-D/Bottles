// Requirements
const mongoose = require('mongoose');
require('dotenv').config()

// Connections
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
});

module.exports = {
    Message: require('./message'),
    seedMessages: require('./seed')
}