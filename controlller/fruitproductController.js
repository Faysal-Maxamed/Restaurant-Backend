import FruitProduct from "../models/fruitProductModel.js";

// Get all fruit products
export const getFruitProducts = async (req, res) => {
  try {
    const products = await FruitProduct.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Get a specific fruit product by ID
export const getFruitProductById = async (req, res) => {
  try {
    const product = await FruitProduct.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Create a new fruit product
export const createFruitProduct = async (req, res) => {
  try {
    const { name, category, image, description, price, oldPrice, countInStock } = req.body;
    
    const product = await FruitProduct.create({
      name,
      category,
      image,
      description,
      price,
      oldPrice,
      countInStock
    });
    
    res.status(201).json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Update an existing fruit product
export const updateFruitProduct = async (req, res) => {
  try {
    const { name, category, image, description, price, oldPrice, countInStock } = req.body;
    const product = await FruitProduct.findById(req.params.id);

    if (product) {
      product.name = name;
      product.category = category;
      product.image = image;
      product.description = description;
      product.price = price;
      product.oldPrice = oldPrice;
      product.countInStock = countInStock;

      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Delete a fruit product
export const deleteFruitProduct = async (req, res) => {
  try {
    const product = await FruitProduct.findByIdAndDelete(req.params.id);
    if (product) {
      res.status(200).json({ message: "Product deleted!" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
