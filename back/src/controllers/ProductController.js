const Product = require("../models/Product");

module.exports = {
  async store(req, res) {
    const { sku, cod_reference, product_name, description, price, inventary, gender, status_product, last_update_price } = req.body
    const img = req.file.filename
    const product = await Product.create({
      sku, cod_reference, product_name, description, price, inventary, gender, img, status_product, last_update_price,
    });
    return res.json(product)
  },
  async index(req, res) {
    const product = await Product.findAll()

    return res.json({ product, url: 'http://localhost:3333/files/'})
  },
}