const express = require('express')
const app = express()
const PORT = 4000
app.listen(PORT,()=>console.log(`Example app listening on port ${PORT}`))

app.get('/',function(req,res){
    res.send(`<p> Basic Api Rest </p>
        <ul>
            <li>All Posts -<a href="/api/posts"> api/posts</a></li>
            <li>Single Post -<a href="/api/post/1">api/posts/:id </a> </li>
        </ul>`)
})

app.get('/api',function(req,res){
    res.send('Welcome to  the basic API rest!')
})

app.get('/api/posts',function(req,res){
    res.send('All Posts')
})

app.get('/api/post/1',function(req,res){
    res.send('1 Single Post')
})
