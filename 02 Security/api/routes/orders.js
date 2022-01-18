const express = require('express');
const router = express.Router();

//READ
router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Orders fetched'
    });
});
router.get('/:orderId',(req, res, next)=>{
    res.status(200).json({
        message: 'Order detail',
        id: req.params.orderId
    });
});

//ADD
router.post('/',(req, res, next)=>{
    const order={
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});
//DELETE
router.delete('/:orderId',(req, res, next)=>{
    res.status(200).json({
        message: 'Order Deleted',
        id: req.params.orderId
    });
});
module.exports=router;