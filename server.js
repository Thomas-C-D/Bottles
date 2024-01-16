// Requirements
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

// Connection
const db = require('./models');

// Express
const app = express();

// Refresh configuration
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

// App configuration

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware

app.use(express.static('public'))
app.use(connectLiveReload());

// Mount routes

app.get('/', function (req, res) {
    res.send('Bottles')
});

// Seed Route
app.get('/seed', function (req, res) {
    db.Message.deleteMany({})
    .then(removedMessages => {
        console.log(`Removed ${removedMessages.deletedCount} messages from the database`)
        db.Message.insertMany(db.seedMessages)
        .then(addedMessages => {
            console.log(`Added ${addedMessages.length} messages to the database`)
            res.json(addedMessages)
        })
    })
});
// Listening
app.listen(process.env.PORT, function () {
    console.log(`Listening on port `, process.env.PORT);
});