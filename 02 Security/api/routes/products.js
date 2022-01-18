const express = require('express');
const router = express.Router();

//to register route url 
// router.get('/products'); //is not necesary call products because we are on api/routes/products.js
// the second arg is a handler

//GET
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'handling GET request /products'
    });
});
//GET a spesifict product
router.get('/:productId', (req, res, next)=>{
    //request productId
    const id = req.params.productId;
    if(id){
        res.status(200).json({
            message: 'You request product',
            id: id
        }); 
    }
});

//update
router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: 'update'
    });
});

//add
router.post('/', (req, res, next)=>{
    const productFromClient={
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'product created',
        createdProduct: productFromClient
    });
});

module.exports=router;