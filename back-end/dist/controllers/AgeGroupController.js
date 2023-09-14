var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/models/AgeGroup.js
var require_AgeGroup = __commonJS({
  "src/models/AgeGroup.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var AgeGroup2 = class extends Model {
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
    module2.exports = AgeGroup2;
  }
});

// src/controllers/AgeGroupController.js
var AgeGroup = require_AgeGroup();
module.exports = {
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
