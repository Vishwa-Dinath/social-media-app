const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required: [true,"Please enter a title"]
        },
        description:{
            type:String,
            required: false,
        },
        image:{
            type:String,
            required: true,
        }
    },
    {
        timestamps:true
    }
)

const Post =mongoose.model('Post',postSchema);

module.exports = Post;