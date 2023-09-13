const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/postModel')
const app = express();
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

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


//----------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname)); 
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/posts', upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
  
      const imageUrl = '/uploads/' + req.file.filename;
  
      const post = await Post.create({
        title: req.body.title,
        description: req.body.description,
        image: imageUrl,
      });
  
      res.status(200).json({ post });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Serve uploaded images publicly
  app.use('/uploads', express.static('public/uploads'));

