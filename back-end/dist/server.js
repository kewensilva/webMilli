var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/uploader.js
var require_uploader = __commonJS({
  "src/uploader.js"(exports, module2) {
    var multer = require("multer");
    var storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./src/public/uploads");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      }
    });
    var upload = multer({ storage });
    module2.exports = upload;
  }
});

// src/models/Category.js
var require_Category = __commonJS({
  "src/models/Category.js"(exports, module2) {
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
  "src/controllers/CategoryController.js"(exports, module2) {
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
  "src/models/Product.js"(exports, module2) {
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
  "src/models/Image.js"(exports, module2) {
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
  "src/controllers/ProductController.js"(exports, module2) {
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
  "src/models/AgeGroup.js"(exports, module2) {
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
  "src/controllers/AgeGroupController.js"(exports, module2) {
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
var require_routes = __commonJS({
  "src/routes.js"(exports, module2) {
    var express2 = require("express");
    var routes2 = express2.Router();
    var upload = require_uploader();
    var CategoryController = require_CategoryController();
    var ProductController = require_ProductController();
    var AgeGroupController = require_AgeGroupController();
    routes2.post("/register-category", CategoryController.store);
    routes2.get("/categories", CategoryController.index);
    routes2.get("/category/:id", CategoryController.getCategory);
    routes2.put("/edit/:id", CategoryController.edit);
    routes2.delete("/delete/:id", CategoryController.delete);
    routes2.post("/register-age", AgeGroupController.store);
    routes2.get("/ages", AgeGroupController.index);
    routes2.get("/age/:id", AgeGroupController.getAge);
    routes2.put("/age/edit/:id", AgeGroupController.edit);
    routes2.delete("/age/delete/:id", AgeGroupController.delete);
    routes2.post("/register-product", upload.array("img"), ProductController.store);
    routes2.get("/products", ProductController.index);
    routes2.put("/edit-product/:id", upload.array("img"), ProductController.edit);
    routes2.get("/product/:id", ProductController.getProduct);
    routes2.delete("/product/:id", ProductController.delete);
    module2.exports = routes2;
  }
});

// src/config/database.js
var require_database = __commonJS({
  "src/config/database.js"(exports, module2) {
    require("dotenv").config();
    module2.exports = {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": process.env.DB_DIALECT,
      define: {
        timestamps: true,
        underscored: true
      }
    };
  }
});

// src/database/index.js
var require_database2 = __commonJS({
  "src/database/index.js"(exports, module2) {
    var Sequelize = require("sequelize");
    var configdb = require_database();
    var Product = require_Product();
    var Category = require_Category();
    var Image = require_Image();
    var AgeGroup = require_AgeGroup();
    var connection = new Sequelize(configdb);
    Product.init(connection);
    Category.init(connection);
    AgeGroup.init(connection);
    Image.init(connection);
    Product.associate(connection.models);
    Image.associate(connection.models);
    Category.associate(connection.models);
    AgeGroup.associate(connection.models);
    module2.exports = connection;
  }
});

// src/server.js
var express = require("express");
var cors = require("cors");
var path = require("path");
var routes = require_routes();
require_database2();
var app = express();
app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-access-key");
  next();
});
app.use(routes);
app.use("/files", express.static(__dirname + "/public/uploads"));
app.listen(process.env.PORT);
console.log("server iniciado! na porta:" + process.env.PORT);
