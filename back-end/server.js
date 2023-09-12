const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("");
})

app.post('/post',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

mongoose.connect('mongodb+srv://vishwadinath97:MongoDB@dvd.lih33lt.mongodb.net/post?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log("hello");
    })
    console.log("Connected to the databse");
}).catch((error)=>{
    console.log(error);
})
