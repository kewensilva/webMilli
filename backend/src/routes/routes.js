const getCategory = require("../controllers/Category");
const express = require("express");

const router = express.Router();

router.get("/category", getCategory);


module.exports = router;