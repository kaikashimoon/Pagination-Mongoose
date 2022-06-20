const { Router } = require("express");
const router = Router()
const Product = require('../models/Product')

router.get('/products', (req, res)  => {    
    res.send('Hello world') }
)   
router.post('/products', async (req, res)  => {    
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
})   

module.exports = router