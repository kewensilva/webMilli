var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/config/database.js
var require_database = __commonJS({
  "src/config/database.js"(exports2, module2) {
    require("dotenv").config();
    module2.exports = {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": process.env.DB_DIALECT,
      define: {
        timestamps: true,
        underscored: true
      }
    };
  }
});

// src/models/Product.js
var require_Product = __commonJS({
  "src/models/Product.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Product2 = class extends Model {
      static init(sequelize) {
        super.init({
          sku: DataTypes.STRING,
          cod_reference: DataTypes.STRING,
          product_name: DataTypes.STRING,
          description: DataTypes.STRING,
          price: DataTypes.FLOAT,
          stock: DataTypes.INTEGER,
          gender: DataTypes.STRING,
          status_product: DataTypes.BOOLEAN,
          last_update_price: DataTypes.DATE
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.hasMany(models.Image, { foreignKey: "product_id", as: "images" });
        this.belongsToMany(models.Category, { foreignKey: "product_id", through: "product_categories", as: "cat_prod" });
        this.belongsToMany(models.AgeGroup, { foreignKey: "product_id", through: "product_ages", as: "age_prod" });
      }
    };
    module2.exports = Product2;
  }
});

// src/models/Category.js
var require_Category = __commonJS({
  "src/models/Category.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Category2 = class extends Model {
      static init(sequelize) {
        super.init({
          category_name: DataTypes.STRING,
          description: DataTypes.STRING
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.belongsToMany(models.Product, { foreignKey: "category_id", through: "product_categories", as: "cat_prod" });
      }
    };
    module2.exports = Category2;
  }
});

// src/models/Image.js
var require_Image = __commonJS({
  "src/models/Image.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var Image2 = class extends Model {
      static init(sequelize) {
        super.init({
          url: DataTypes.STRING,
          product_id: DataTypes.INTEGER
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.belongsTo(models.Product, { foreignKey: "product_id", as: "images" });
      }
    };
    module2.exports = Image2;
  }
});

// src/models/AgeGroup.js
var require_AgeGroup = __commonJS({
  "src/models/AgeGroup.js"(exports2, module2) {
    var { Model, DataTypes } = require("sequelize");
    var AgeGroup2 = class extends Model {
      static init(sequelize) {
        super.init({
          age_name: DataTypes.STRING,
          description: DataTypes.STRING
        }, {
          sequelize
        });
      }
      static associate(models) {
        this.belongsToMany(models.Product, { foreignKey: "age_id", through: "product_ages", as: "age_prod" });
      }
    };
    module2.exports = AgeGroup2;
  }
});

// src/database/index.js
var Sequelize = require("sequelize");
var configdb = require_database();
var Product = require_Product();
var Category = require_Category();
var Image = require_Image();
var AgeGroup = require_AgeGroup();
var connection = new Sequelize(configdb);
Product.init(connection);
Category.init(connection);
AgeGroup.init(connection);
Image.init(connection);
Product.associate(connection.models);
Image.associate(connection.models);
Category.associate(connection.models);
AgeGroup.associate(connection.models);
module.exports = connection;
