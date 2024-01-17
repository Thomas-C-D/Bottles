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

// New

router.get('/new', (req, res) => {
    res.render('new-message')
})


// Create

router.post('/', (req, res) => {
    db.Message.create(req.body)
    .then(res.redirect('/'))
})

// Edit

router.get('/:id/edit', (req, res) => {
    db.Message.findById(req.params.id)
    .then(message => res.render('edit-message', {message: message}))
})


// Update

router.put('/:id', (req, res) => {
    db.Message.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    .then(res.redirect('/'))
})


// Destroy

router.delete('/:id', (req, res) => {
    db.Message.findByIdAndDelete(req.params.id)
    .then(res.redirect('/'))
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