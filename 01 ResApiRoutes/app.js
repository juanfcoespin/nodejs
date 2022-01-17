const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');

//run middleware with routes
app.use('/products', productRoutes);

module.exports = app;