const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    topic:{
        type:String,
        required:true
    },
    authorId:{
        type:String,
        required:true
    },
    message:{
        type: String,
        required: true
    }
})

const Blog = mongoose.model('BLOG',blogSchema);

module.exports = Blog;