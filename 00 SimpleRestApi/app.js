const express = require('express');
const app = express();

//run middleware
app.use((req, res, next)=>{
    res.status(200).json({
        message: 'This is a simple rest api!!'
    });
});

module.exports = app;