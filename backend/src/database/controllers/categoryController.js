const Category = require("../../models/Category");

const { Op } = require("sequelize");

module.exports = {
    async getAll(req, res) {

        const categorytData = await Category.findAll();
        return res.json(categorytData)
    },
    async getCategory(req, res) {
        const categorytData = await Category.findAll({
            where: {
                category_name: { [Op.like]: `%${req.params.category_name}%` }
            },
        })
        if (categorytData.length > 0) {
            res.status(200).json({ data: categorytData })
        }
        else {
            res.status(200).json({ data: [] })
        }

        res.status(404).json({ message: error });
    },

    async createCategory(req, res) {
        const catCreate = await Category.create({
            category_name: req.body.category_name,
            description: req.body.description,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((result) => {
            res.status(201).json({ catCreate })
        })
        res.status(404).json({ error })
    },
    async delete(req, res) {
        await products.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await products.destroy({ where: { id: req.params.id } });
                    res.status(200).json({ message: "Delete Product Successful" });
                }
                else {
                    res.tstaus(404).json({ message: "id não encontrado!" });
                }
            })
        res.status(404).json({ message: erro })
    },
    async edit(req, res) {
        await Category.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await Category.update({
                        age_group_name: req.body.category_name,
                        description: req.body.description,
                        createdAt: new Date(),
                        updatedAt: new Date()

                    }, { where: { id: req.params.id } });
                    res.status(200).json({
                        message: "Update Successful", data: {
                            age_group_name: req.body.category_name,
                            description: req.body.description,
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