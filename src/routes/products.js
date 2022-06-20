const { Router } = require("express");
const router = Router()
const Product = require('../models/Product')

router.get('/products', async (req, res)  => {    
    try {
        const options = req.query;
        const products = await Product.paginate({}, options)
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


router.get("/products/:id", async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({
        message: "The Product was not found",
      });
  
    res.status(201).json(product);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
  });


  router.put("/products/:id", async (req, res) => {
  try {
    const productUpdated = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(201).json(productUpdated);
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
  });

  router.delete("/products/:id", async (req, res) => {
    try {
        const productRemoved = await Product.findByIdAndDelete(req.params.id);
        res.status(201).json(productRemoved);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error });
    }
  });
  

module.exports = router