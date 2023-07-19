const Category = require("../models/Category");

module.exports = {
  async store(req, res) {
    const { category_name, description } = req.body;

    const category = await Category.create({
      category_name,
      description
    });
    return res.json(category)
  }
}