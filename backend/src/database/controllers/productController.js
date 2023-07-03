const Product = require("../../models/Product");

const { Op } = require("sequelize");

module.exports = {

    async getAll(req, res) {

        const productData = await Product.findAll();

        return res.json(productData)
    },

    async getProduct(req, res) {

        const prodData = await Product.findAll({
            where: {
                id: { [Op.like]: `%${req.params.id}%` }
            },
        })
        if (prodData.length > 0) {
            res.status(200).json({ data: prodData })
        }
        else {
            res.status(200).json({ data: [] })
        }

        res.status(404).json({ message: error });
    },
    async createProduct(req, res) {
        const prodcreate = await Product.create({
            product_name: req.body.product_name,
            description: req.body.description,
            price: req.body.price,
            inventary: req.body.inventary,
            gender: req.body.gender,
            img: req.file,
            last_update_price: new Date(),
            id_category: req.body.id_category,
            id_group_age: req.body.id_group_age,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((result) => {
            res.status(201).json(prodcreate)
        })
        res.status(404).json({ message: Error })
    },
    async delete(req, res) {

        await Product.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await Product.destroy({ where: { id: req.params.id } });
                    res.status(200).json({ message: "Delete Product Successful" });

                }
                else {
                    res.tstaus(404).json({ message: "id não encontrado!" });
                }
            })
        res.status(404).json({ message: erro })
    },
    async edit(req, res) {
        await Product.findAll({ where: { id: req.params.id } })
            .then(async (result) => {

                if (result.length > 0) {
                    await Product.update({
                        product_name: req.body.product_name,
                        description: req.body.description,
                        price: req.body.price,
                        inventary: req.body.inventary,
                        gender: req.body.gender,
                        img: req.file.filename,
                        last_update_price: new Date(),
                        id_category: req.body.id_category,
                        id_group_age: req.body.id_group_age,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }, { where: { id: req.params.id } });
                    res.status(200).json({
                        message: "Update Successful", data: {
                            id: req.body.id,
                            product_name: req.body.product_name,
                            description: req.body.description,
                            price: req.body.price,
                            inventary: req.body.inventary,
                            gender: req.body.gender,
                            img: req.file.filename,
                            last_update_price: new Date(),
                            id_category: req.body.id_category,
                            id_group_age: req.body.id_group_age,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        }
                    })
                } else {
                    res.status(500).json({ message: "Update failed" })
                }
            })
        res.status(404).json({ message: Error })
    }
}