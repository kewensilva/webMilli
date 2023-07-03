const express = require("express");
const multer = require("multer");


const productController = require('./database/controllers/productController');

const categoryController = require("./database/controllers/categoryController");

const ageGroupController = require("./database/controllers/ageGroupController");

const routes = express.Router();
const path = require("path");

const storage = multer.diskStorage({
    destination: '../src/img/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    // limits: { fileSize: '1000000' }
}).array('img', 5);
routes.post("/create-produto", upload, productController.createProduct);

routes.post("/create-categoria", categoryController.createCategory);

routes.post("/create-age", ageGroupController.createAgeGroup);

routes.get("/categorias", categoryController.getAll);

routes.get("/age", ageGroupController.getAll);

routes.get("/produtos", productController.getAll);

routes.get("/categoria/:category_name", categoryController.getCategory);

routes.get("/age/:age_group_name", ageGroupController.getAge);

routes.get("/produto/:id", productController.getProduct);

routes.delete("/delete-produto/:id", productController.delete);

routes.put("/edit-produto/:id", productController.edit);

routes.put("/edit-categoria/:id", categoryController.edit);

routes.put("/edit-age/:id", ageGroupController.edit);

routes.delete("/delete-categoria/:id", categoryController.delete);

routes.delete("/delete-age/:id", ageGroupController.delete);

module.exports = routes;