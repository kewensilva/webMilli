var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/models/Category.js
var require_Category = __commonJS({
  "src/models/Category.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Category2 = class extends Model {
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
    module2.exports = Category2;
  }
});

// src/controllers/CategoryController.js
var Category = require_Category();
module.exports = {
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
