// Module requirements
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');


// db requirements
const db = require('./models');

// Controller requirements
const messagesCtrl = require('./controllers/messages')
const commentsCtrl = require('./controllers/comments')

// Express
const app = express();

// method-override

const methodOverride = require('method-override')


// App configuration

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware

if (process.env.ON_HEROKU === 'false') {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once('connection', () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(methodOverride('_method'));


// Mount routes

app.get('/', function (req, res) {
    res.redirect('/messages')
});

// Seed Route
app.get('/seed', function (req, res) {
    db.Message.deleteMany({})
    .then(removedMessages => {
        console.log(`Removed ${removedMessages.deletedCount} messages from the database`)
        db.Message.insertMany(db.seedMessages)
        .then(addedMessages => {
            console.log(`Added ${addedMessages.length} messages to the database`)
            res.redirect('/messages')
        })
    })
});

// About route

app.get('/info', function (req, res) {
    res.render('info')
});



//  Controller routes

app.use('/messages', messagesCtrl)

app.use('/', commentsCtrl)

// 404 route

app.get('*', function (req, res) {
    res.render('404')
})

// Listening
app.listen(process.env.PORT, function () {
    console.log(`Listening on port `, process.env.PORT);
});