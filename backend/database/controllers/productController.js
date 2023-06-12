const model = require("../../models/");
const fs = require("fs");

const { Op } = require("sequelize");

const controllerProd = {}


controllerProd.getAll = async function (req, res) {
    try {
        const productData = await model.products.findAll();
        if (productData.length > 0) {
            res.status(200).json({ message: "Connection Successful", data: productData });
        }
        else {
            res.status(200).json({ message: "Connection Failed", data: [] });
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

controllerProd.getProduct = async function (req, res) {
    try {
        const prodData = await model.products.findAll({
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

    } catch (error) {
        res.status(404).json({ message: error });
    }
}
controllerProd.createProduct = async function (req, res) {
    try {
        await model.products.create({
            product_name: req.body.product_name,
            description: req.body.description,
            price: req.body.price,
            inventary: req.body.inventary,
            gender: req.body.gender,
            img: req.file.filename, //fs.readFileSync(__dirname + "/resources/" + req.file.filename),
            last_update_price: new Date(),
            id_category: req.body.id_category,
            id_group_age: req.body.id_group_age,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((result) => {
            res.status(201).json({
                data: {
                    product_name: req.body.product_name,
                    description: req.body.description,
                    price: req.body.price,
                    inventary: req.body.inventary,
                    gender: req.body.gender,
                    img: req.file.filename,//fs.writeFileSync(__dirname+ "/resources/temp/"+ Image.name),
                    last_update_price: new Date(),
                    id_category: req.body.id_category,
                    id_group_age: req.body.id_group_age,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            })
        })
    } catch (error) {
        res.status(404).json({ message: Error })
    }
}

controllerProd.delete = async function (req, res) {
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


controllerProd.edit = async function (req, res) {
    try {
        await model.products.findAll({ where: { id: req.params.id } })
        .then(async (result) => {

            if (result.length > 0) {
                await model.products.update({
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
    } catch (Error) {
        res.status(404).json({ message: Error })
    }
}
module.exports = controllerProd;