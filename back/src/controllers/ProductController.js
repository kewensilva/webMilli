const Product = require("../models/Product");
const Image = require("../models/Image");

module.exports = {
  async store(req, res) {
    const { sku, cod_reference, product_name, description, price, inventary, gender, status_product, last_update_price } = req.body
    const product = await Product.create({
      sku, cod_reference, product_name, description, price, inventary, gender, status_product, last_update_price,
    });

    const img = req.files.map(file => ({ url: file.filename, product_id: product.id }));
    await Image.bulkCreate(img);
    return res.json(product)
  },
  async index(req, res) {
    const product = await Product.findAll({
      include: { association: 'images', attributes: ['url'] }
    })

    return res.json({ product })
  },
  async delete(req, res) {
    const { id } = req.params

    const product = await Product.destroy(id);

    return res.json({ product });
  },
  async getProduct(req, res) {
    const { id } = req.params
    const product = await Product.findByPk(id, {
      include: { association: 'images' }
    });

    return res.json({ product });
  },
  async edit(req, res) {
    const { id } = req.params
    const { sku, cod_reference, product_name, description, price, inventary, gender, status_product, last_update_price } = req.body
    const product = await Product.findOne({ id });
    product.sku = sku,
      product.cod_reference = cod_reference,
      product.product_name = product_name,
      product.description = description,
      product.price = price,
      product.inventary = inventary,
      product.gender = gender,
      product.status_product = status_product,
      product.last_update_price = last_update_price
  
    const img = req.files.map(file => ({ url: file.filename }))
    await Image.bulkCreate(img, {
      updateOnDuplicate: ['url']
    });
    await product.save();
    return res.json(product)
  }
}