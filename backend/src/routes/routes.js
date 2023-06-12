const express = require("express");
const router = express.Router();
const multer = require("multer");
const controllerAge = require("../../database/controllers/ageGroupController");
const controllerCat = require("../../database/controllers/categoryController");
const controllerProd = require("../../database/controllers/productController");
const path = require("path");

const storage = multer.diskStorage({
    destination: '../src/img/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})
router.post("/create-produto", upload.single('img'), controllerProd.createProduct);

router.post("/create-categoria", controllerCat.createCategory);

router.post("/create-age", controllerAge.createAgeGroup);

router.get("/categorias", controllerCat.getAll);

router.get("/age", controllerAge.getAll);

router.get("/produtos", controllerProd.getAll);

router.get("/categoria/:category_name", controllerCat.getCategory);

router.get("/age/:age_group_name", controllerAge.getAge);

router.get("/produto/:id", upload.single('img'), controllerProd.getProduct);

router.delete("/delete-produto/:id", controllerProd.delete);

router.put("/edit-produto/:id", controllerProd.edit);

router.put("/edit-categoria/:id", controllerCat.edit);

router.put("/edit-age/:id", controllerAge.edit);

router.delete("/delete-categoria/:id", controllerCat.delete);

router.delete("/delete-age/:id", controllerAge.delete);

module.exports = router;