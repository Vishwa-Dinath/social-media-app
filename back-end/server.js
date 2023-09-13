const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/postModel')
const app = express();
const cors = require('cors')
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200
}

app.use(express.json());
app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send("");
})

app.get('/posts',async(req,res)=>{
    try {
        const posts = await Post.find({});
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.post('/posts',async(req,res)=>{
    try {
        const post = await Post.create(req.body);
        res.status(200).json({"posts":[post]});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

mongoose.connect('mongodb+srv://vishwadinath97:MongoDB@dvd.lih33lt.mongodb.net/post?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000,()=>{
        console.log("hello");
    })
    console.log("Connected to the databse");
}).catch((error)=>{
    console.log(error);
})
