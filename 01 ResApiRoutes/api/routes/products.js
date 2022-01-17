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

//PATCH
router.patch('/:productId', (req, res, next)=>{
    
});

//POST
router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'handling POST request /products'
    });
});

module.exports=router;