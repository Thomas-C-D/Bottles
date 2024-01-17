// Requirements
const express = require('express')
const router = express.Router()

// Connections
const db = require('../models')

// Routes

// Index

router.get('/', function (req, res) {
    db.Message.find({})
    .then(messages => {
        res.render('message-index', {
            messages: messages
        })
    })
})

// Show

router.get('/:id', function (req, res) {
    db.Message.findById(req.params.id)
    .then(message => {
        res.render('message-details', {
            message: message
        })
    })
})

module.exports = router