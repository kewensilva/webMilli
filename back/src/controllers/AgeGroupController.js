const AgeGroup = require("../models/AgeGroup");

module.exports = {
  async store(req, res) {
    const { age_name, description } = req.body;

    const age = await AgeGroup.create({
      age_name,
      description
    });
    return res.json(age)
  }
}