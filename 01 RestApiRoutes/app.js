const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// simple body with encode data (when client send object. Ex in POST request to add objects)
app.use(bodyParser.urlencoded({extended: false}));
//to parse data embled on body in json format
app.use(bodyParser.json());

//run middleware with routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//manage errors
app.use((req, res, next)=>{
    const error =  new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});
module.exports = app;