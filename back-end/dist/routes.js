var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/uploader.js
var require_uploader = __commonJS({
  "src/uploader.js"(exports2, module2) {
    var multer = require("multer");
    var storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./src/public/uploads");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      }
    });
    var upload2 = multer({ storage });
    module2.exports = upload2;
  }
});

// src/models/Category.js
var require_Category = __commonJS({
  "src/models/Category.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Category = class extends Model {
      static init(sequelize) {
        super.init({
          category_name: DataTypes.STRING,
          description: DataTypes.STRING
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.belongsToMany(models.Product, { foreignKey: "category_id", through: "product_categories", as: "cat_prod" });
      }
    };
    module2.exports = Category;
  }
});

// src/controllers/CategoryController.js
var require_CategoryController = __commonJS({
  "src/controllers/CategoryController.js"(exports2, module2) {
    var Category = require_Category();
    module2.exports = {
      async store(req, res) {
        const { category_name, description } = req.body;
        const category = await Category.create({
          category_name,
          description
        });
        return res.json(category);
      },
      async getCategory(req, res) {
        const { id } = req.params;
        const category = await Category.findByPk(id, {
          include: { association: "cat_prod" }
        });
        return res.json({ category });
      },
      async index(req, res) {
        const category = await Category.findAll({
          include: { association: "cat_prod" }
        });
        return res.json(category);
      },
      async delete(req, res) {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        await category.destroy();
        return res.json(category);
      },
      async edit(req, res) {
        const { id } = req.params;
        const { category_name, description } = req.body;
        const category = await Category.findOne({ id });
        category.category_name = category_name, category.description = description;
        await category.save();
        return res.json(category);
      }
    };
  }
});

// src/models/Product.js
var require_Product = __commonJS({
  "src/models/Product.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Product = class extends Model {
      static init(sequelize) {
        super.init({
          sku: DataTypes.STRING,
          cod_reference: DataTypes.STRING,
          product_name: DataTypes.STRING,
          description: DataTypes.STRING,
          price: DataTypes.FLOAT,
          stock: DataTypes.INTEGER,
          gender: DataTypes.STRING,
          status_product: DataTypes.BOOLEAN,
          last_update_price: DataTypes.DATE
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.hasMany(models.Image, { foreignKey: "product_id", as: "images" });
        this.belongsToMany(models.Category, { foreignKey: "product_id", through: "product_categories", as: "cat_prod" });
        this.belongsToMany(models.AgeGroup, { foreignKey: "product_id", through: "product_ages", as: "age_prod" });
      }
    };
    module2.exports = Product;
  }
});

// src/models/Image.js
var require_Image = __commonJS({
  "src/models/Image.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Image = class extends Model {
      static init(sequelize) {
        super.init({
          url: DataTypes.STRING,
          product_id: DataTypes.INTEGER
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.belongsTo(models.Product, { foreignKey: "product_id", as: "images" });
      }
    };
    module2.exports = Image;
  }
});

// src/controllers/ProductController.js
var require_ProductController = __commonJS({
  "src/controllers/ProductController.js"(exports2, module2) {
    var Product = require_Product();
    var Image = require_Image();
    module2.exports = {
      async store(req, res) {
        const { sku, cod_reference, product_name, description, price, stock, gender } = req.body;
        const product = await Product.create({
          sku,
          cod_reference,
          product_name,
          description,
          price,
          stock,
          gender
        });
        const img = req.files.map((file) => ({ url: file.filename, product_id: product.id }));
        await Image.bulkCreate(img);
        return res.json({ product });
      },
      async index(req, res) {
        const product = await Product.findAll({
          include: { association: "images", attributes: ["url"] }
        });
        return res.json({ product });
      },
      async delete(req, res) {
        const { id } = req.params;
        const product = await Product.destroy(id);
        return res.json({ product });
      },
      async getProduct(req, res) {
        const { id } = req.params;
        const product = await Product.findByPk(id, {
          include: { association: "images" }
        });
        return res.json({ product });
      },
      async edit(req, res) {
        const { id } = req.params;
        const { sku, cod_reference, product_name, description, price, stock, gender } = req.body;
        const product = await Product.findOne({ id });
        if (product.price)
          product.sku = sku, product.cod_reference = cod_reference, product.product_name = product_name, product.description = description, product.price = price, product.stock = stock, product.gender = gender, product.status_product = product.stock == 0 ? false : true, product.last_update_price = product.price != price ? /* @__PURE__ */ new Date() : product.price;
        const img = req.files.map((file) => ({ url: file.filename }));
        await Image.bulkCreate(img, {
          updateOnDuplicate: ["url"]
        });
        await product.save();
        return res.json(product);
      }
    };
  }
});

// src/models/AgeGroup.js
var require_AgeGroup = __commonJS({
  "src/models/AgeGroup.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var AgeGroup = class extends Model {
      static init(sequelize) {
        super.init({
          age_name: DataTypes.STRING,
          description: DataTypes.STRING
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.belongsToMany(models.Product, { foreignKey: "age_id", through: "product_ages", as: "age_prod" });
      }
    };
    module2.exports = AgeGroup;
  }
});

// src/controllers/AgeGroupController.js
var require_AgeGroupController = __commonJS({
  "src/controllers/AgeGroupController.js"(exports2, module2) {
    var AgeGroup = require_AgeGroup();
    module2.exports = {
      async store(req, res) {
        const { age_name, description } = req.body;
        const age = await AgeGroup.create({
          age_name,
          description
        });
        return res.json(age);
      },
      async getAge(req, res) {
        const { id } = req.params;
        const age = await AgeGroup.findByPk(id, {
          include: { association: "age_prod" }
        });
        return res.json({ age });
      },
      async index(req, res) {
        const age = await AgeGroup.findAll({
          include: { association: "age_prod" }
        });
        return res.json(age);
      },
      async delete(req, res) {
        const { id } = req.params;
        const age = await AgeGroup.findByPk(id);
        await age.destroy();
        return res.json(age);
      },
      async edit(req, res) {
        const { id } = req.params;
        const { age_name, description } = req.body;
        const age = await AgeGroup.findOne({ id });
        age.age_name = age_name, age.description = description;
        await age.save();
        return res.json(age);
      }
    };
  }
});

// src/routes.js
var express = require("express");
var routes = express.Router();
var upload = require_uploader();
var CategoryController = require_CategoryController();
var ProductController = require_ProductController();
var AgeGroupController = require_AgeGroupController();
routes.post("/register-category", CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.get("/category/:id", CategoryController.getCategory);
routes.put("/edit/:id", CategoryController.edit);
routes.delete("/delete/:id", CategoryController.delete);
routes.post("/register-age", AgeGroupController.store);
routes.get("/ages", AgeGroupController.index);
routes.get("/age/:id", AgeGroupController.getAge);
routes.put("/age/edit/:id", AgeGroupController.edit);
routes.delete("/age/delete/:id", AgeGroupController.delete);
routes.post("/register-product", upload.array("img"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/edit-product/:id", upload.array("img"), ProductController.edit);
routes.get("/product/:id", ProductController.getProduct);
routes.delete("/product/:id", ProductController.delete);
module.exports = routes;
