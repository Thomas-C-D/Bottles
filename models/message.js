const mongoose = require('mongoose');
const commentSchema = require('./comment.js')


const messageSchema = new mongoose.Schema({
    content: {type: String, required: true},
    comments: [commentSchema]
});

module.exports = mongoose.model('Message', messageSchema)