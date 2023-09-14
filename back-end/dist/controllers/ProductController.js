var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/models/Product.js
var require_Product = __commonJS({
  "src/models/Product.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Product2 = class extends Model {
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
    module2.exports = Product2;
  }
});

// src/models/Image.js
var require_Image = __commonJS({
  "src/models/Image.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Image2 = class extends Model {
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
    module2.exports = Image2;
  }
});

// src/controllers/ProductController.js
var Product = require_Product();
var Image = require_Image();
module.exports = {
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
