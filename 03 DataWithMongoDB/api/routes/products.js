const express = require('express');
const mongoose = require('mongoose');
const { response } = require('../../app');
const router = express.Router();
const Product = require('../models/product');

//to register route url 
// router.get('/products'); //is not necesary call products because we are on api/routes/products.js
// the second arg is a handler

//GET
router.get('/', (req, res, next)=>{
    var top=100;
    Product.find().limit(top).exec().then(docs=>{
       res.status(200).json({
           message: 'Top '+top+' products:',
           products: docs
       }).catch(err=>responseError(res,err));
   })
});

//GET a spesifict product
router.get('/:productId', (req, res, next)=>{
    //request productId
    const id = req.params.productId;
    Product.findById(id).exec().then(doc=>{
        console.log(doc);
        if(doc)
            res.status(200).json(doc);
        else{
            res.status(404).json({
                message: 'No object found with id provided'
            });
        }
    }).catch(err=>responseError(res,err));
});

//update
router.patch('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    Product.findByIdAndUpdate(id, {$set: req.body}).then(result=>{
        res.status(200).json(result);
    }).catch(err=>responseError(res, err));
});

//add
router.post('/', (req, res, next)=>{
    //store data
    const product=new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message: 'product created',
            createdProduct: result
        });
    }).catch(err=>responseError(res, err));
});

//delete
router.delete('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    Product.remove({_id: id}).exec().then(result=>{
        res.status(200).json(result);
    }).catch(err=>responseError(res, err));
});

function responseError(res, err){
    res.status(500).json({
        error: err
    });
}

module.exports=router;