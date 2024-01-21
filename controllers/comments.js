// Requirements
const express = require('express')
const router = express.Router()

const db = require('../models')

// Routes
// ------------

router.get('/comments/new/:messageId', (req, res) => {
    db.Message.findById(
        req.params.messageId
    )
    .then(message => res.render('new-comment', {message: message}))
})

router.post('/comments/create/:messageId', (req, res) => {
    db.Message.findByIdAndUpdate(
        req.params.messageId,
        {$push: {comments: req.body}},
        {$new: true}
    )
    .then(res.redirect(`/messages`))
})

module.exports = router