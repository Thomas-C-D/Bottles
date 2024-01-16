const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    addition: {type: String, required: true}
});

module.exports = commentSchema;