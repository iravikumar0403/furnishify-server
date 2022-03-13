const Product = require("../models/Product");
const router = require("express").Router();

// Get product by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// Insert products
router.post("/", async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
