const { Model, DataTypes } = require("sequelize");

class Image extends Model {
    static init(sequelize) {
        super.init({
            url: DataTypes.STRING,
            product_id: DataTypes.INTEGER
        }, {
            sequelize

        })
    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'images' });
    }
}

module.exports = Image;