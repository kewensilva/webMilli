const db = require ("../database/connect");


const getCategory = (_, res) => {
    const cat = `SELECT * FROM category`;

    db.query(cat, (err, data) => {
        if (err) {
            return res.json(err);
        }
        else
            return res.status(200).json(data);
    });  
};
module.exports = getCategory
