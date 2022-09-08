const express = require('express');
const postRouter = require("./routes/posts.route")


const app = express();


app.get("/" ,(req,res) =>{
    res
    .status(200)
    .send("welcome to my server .please use / posts to get all posts")
})

app.use('/posts',postRouter);

app.listen(4000 ,(err)=>{
    console.log(" Server listening on http://localhost:4000");
});