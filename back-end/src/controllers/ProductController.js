// const multer = require("multer");
const Product = require("../models/Product");
const Image = require("../models/Image");
const BackBlazeB2 = require("backblaze-b2");
const dotenv = require("dotenv");
dotenv.config();



const b2 = new BackBlazeB2({
  applicationKeyId: process.env.KEY_ID,
  applicationKey: process.env.KEY
});

module.exports = {
  async store(req, res, next) {
    try {
      const auth = await b2.authorize();
      const { downloadUrl } = auth.data;
      const resp = await b2.getUploadUrl({ bucketId: process.env.BUCKET_ID });
      const { authorizationToken, uploadUrl } = resp.data;
      const urls = [];

      const { sku, cod_reference, product_name, description, price, stock, gender } = req.body;

      const product = await Product.create({
        sku,
        cod_reference,
        product_name,
        description,
        price,
        stock,
        gender,
      });

      const uploadsPromises = [];

      for (const file of req.files) {
        const img2 = `${Date.now()}${file.originalname}`; // Nome único para cada imagem
        const img = img2.replace(/\s/g, '')
        const params = {
          uploadUrl,
          uploadAuthToken: authorizationToken,
          fileName: `uploads/${img}`,
          data: file.buffer,
        };

        const namefile = await b2.uploadFile(params);
        const url = `${downloadUrl}/file/${process.env.BUCKET_NAME}/${namefile.data.fileName}`;
        urls.push(url);

        const image = await Image.create({
          product_id: product.id,
          url: url,
        });
      }

      return res.json({ product });
    } catch (error) {
      next(error);
    }
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
    const { sku, cod_reference, product_name, description, price, stock, gender } = req.body

    const product = await Product.findOne({ id });
    if (product.price)
      product.sku = sku,
        product.cod_reference = cod_reference,
        product.product_name = product_name,
        product.description = description,
        product.price = price,
        product.stock = stock,
        product.gender = gender,
        product.status_product = product.stock == 0 ? false : true,
        product.last_update_price = product.price != price ? new Date() : product.price
    const img = req.files.map(file => ({ url: file.filename }))
    await Image.bulkCreate(img, {
      updateOnDuplicate: ['url']
    });
    await product.save();
    return res.json(product)
  }
}