const model = require("../../models/");

const { Op } = require("sequelize");

const controllerCat = {}

controllerCat.getAll = async function (req, res) {
    try {
        const categorytData = await model.Categories.findAll();
        if (categorytData.length > 0) {
            res.status(200).json({ message: "Connection Successful", data: categorytData });
        }
        else {
            res.status(200).json({ message: "Connection Failed", data: [] });
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
controllerCat.getCategory = async function (req, res) {
    try {
        const categorytData = await model.Categories.findAll({
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

    } catch (error) {
        res.status(404).json({ message: error });
    }
}
controllerCat.createCategory = async function (req, res) {
    try {
        await model.Categories.create({
            category_name: req.body.category_name,
            description: req.body.description,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((result) => {
            res.status(201).json({
                data: {
                    category_name: req.body.category_name,
                    description: req.body.description,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })
        })
    } catch (error) {
        res.status(404).json({ error })
    }
}
controllerCat.delete = async function (req, res) {
    try {
        await model.products.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await model.products.destroy({ where: { id: req.params.id } });
                    res.status(200).json({ message: "Delete Product Successful" });
                }
                else {
                    res.tstaus(404).json({ message: "id não encontrado!" });
                }
            })
    } catch (error) {
        res.status(404).json({ message: erro })
    }
}
controllerCat.edit = async function (req, res) {
    try {
        await model.Categories.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await model.Categories.update({
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
    } catch (error) {
        res.status(404).json({ message: Error })
    }
}
module.exports = controllerCat;