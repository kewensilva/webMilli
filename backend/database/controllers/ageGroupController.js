const model = require("../../models/");

const { Op } = require("sequelize");

const controllerAge = {}


controllerAge.getAll = async function (req, res) {
    try {
        const ageData = await model.AgeGroup.findAll();
        if (ageData.length > 0) {
            res.status(200).json({ message: "Connection Successful", data: ageData });
        }
        else {
            res.status(200).json({ message: "Connection Failed", data: [] });
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
controllerAge.getAge = async function (req, res) {
    try {
        const ageData = await model.Categories.findAll({
            where: {
                product_name: { [Op.like]: `%${req.params.age_group_name}%` }
            },
        })
        if (ageData.length > 0) {
            res.status(200).json({ data: ageData })
        }
        else {
            res.status(200).json({ data: [] })
        }

    } catch (error) {
        res.status(404).json({ message: error });
    }
}
controllerAge.createAgeGroup = async function (req, res) {
    try {
        await model.AgeGroup.create({
            age_group_name: req.body.age_group_name,
            description: req.body.description,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((result) => {
            res.status(201).json({
                data: {
                    age_group_name: req.body.age_group_name,
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
controllerAge.delete = async function (req, res) {
    try {
        await model.AgeGroup.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await model.AgeGroup.destroy({ where: { id: req.params.id } });
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
controllerAge.edit = async function (req, res) {
    try {
        await model.AgeGroup.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await model.AgeGroup.update({
                        age_group_name: req.body.age_group_name,
                        description: req.body.description,
                        createdAt: new Date(),
                        updatedAt: new Date()

                    }, { where: { id: req.params.id } });
                    res.status(200).json({
                        message: "Update Successful", data: {
                            age_group_name: req.body.age_group_name,
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

module.exports = controllerAge;