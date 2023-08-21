const Category = require("../models/Category");

module.exports = {
  async store(req, res) {
    const { category_name, description } = req.body;

    const category = await Category.create({
      category_name,
      description
    });
    return res.json(category)
  },
  async getCategory(req, res) {
    const { id } = req.params
    const category = await Category.findByPk(id, {
      include: { association: 'cat_prod' }
    });

    return res.json({ category });
  },
  async index(req, res) {
    const category = await Category.findAll({
      include: { association: 'cat_prod' }
    });
    return res.json(category);
  },
  async delete(req, res) {
    const { id } = req.params
    const category = await Category.findByPk(id)
    await category.destroy();
    return res.json(category)
  },
  async edit(req, res) {
    const { id } = req.params
    const { category_name, description } = req.body;
    const category = await Category.findOne({ id });
    category.category_name = category_name,
      category.description = description
    await category.save();
    return res.json(category);
  }
}
