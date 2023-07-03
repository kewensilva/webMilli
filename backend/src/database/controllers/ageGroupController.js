const AgeGroup = require('../../models/AgeGroup');

const { Op } = require("sequelize");

module.exports = {

    async getAll(req, res) {

        const ageData = await AgeGroup.findAll();
        if (ageData.length > 0) {
            res.status(200).json({ message: "Connection Successful", data: ageData });
        }
        else {
            res.status(200).json({ message: "Connection Failed", data: [] });
        }
        res.status(400).json({ message: error });
    }
    ,
    async getAge(req, res) {
        const ageData = await Categories.findAll({
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

        res.status(404).json({ message: error });
    },
    async createAgeGroup(req, res) {
        await AgeGroup.create({
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
        res.status(404).json({ message: Error })
    },
    async delete(req, res) {
        await AgeGroup.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await AgeGroup.destroy({ where: { id: req.params.id } });
                    res.status(200).json({ message: "Delete Product Successful" });

                }
                else {
                    res.tstaus(404).json({ message: "id não encontrado!" });
                }
            })
        res.status(404).json({ message: erro })
    },
    async edit(req, res) {
        await AgeGroup.findAll({ where: { id: req.params.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await AgeGroup.update({
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
        res.status(404).json({ message: Error })
    }
}