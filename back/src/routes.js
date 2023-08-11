const express = require("express");

const routes = express.Router();
const upload = require('./uploader');

const CategoryController = require("./controllers/CategoryController");
const ProductController = require("./controllers/ProductController");

routes.post('/register-category', CategoryController.store);

routes.post('/register-product', upload.single('img'), ProductController.store);

routes.get('/products', ProductController.index);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes; 