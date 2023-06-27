const { Product } = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send(product);
};

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Product deleted successfully' });
};
