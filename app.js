const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

app.get("/works", (req, res, next) => {
    res.sendFile(path.join(__dirname,'/views/works.html'))
})

app.get("/about", (req, res, next) => {
    res.sendFile(path.join(__dirname,'/views/about.html'))
})

app.listen(5000, () => {
    console.log("Server running on 5000");
})