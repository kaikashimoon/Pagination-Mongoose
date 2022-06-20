const { Router } = require("express");
const router = Router()
const Product = require('../models/Product')

router.get('/products', async (req, res)  => {    
    try {
        const products = await Product.find().lean()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
})


router.post('/products', async (req, res)  => {    
    try {
        const newProduct = new Product({name: req.body.name, price: req.body.price,})
        const savedProduct = await newProduct.save();
        console.log(savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
})   

module.exports = router