const express = require("express");

const routes = express.Router();
const upload = require('./uploader');

const CategoryController = require("./controllers/CategoryController");
const ProductController = require("./controllers/ProductController");
const AgeGroupController = require("./controllers/AgeGroupController");

routes.post('/register-category', CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.get('/category/:id', CategoryController.getCategory);
routes.put('/edit/:id', CategoryController.edit);
routes.delete('/delete/:id', CategoryController.delete);

routes.post('/register-age', AgeGroupController.store);
routes.get('/ages', AgeGroupController.index);
routes.get('/age/:id', AgeGroupController.getAge);
routes.put('/age/edit/:id', AgeGroupController.edit);
routes.delete('/age/delete/:id', AgeGroupController.delete);

routes.post('/register-product', upload.array('img', 10), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/edit-product/:id', upload.array('img', 10), ProductController.edit);
routes.get('/product/:id', ProductController.getProduct);
routes.delete('/product/:id', ProductController.delete);
module.exports = routes; 