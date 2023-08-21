const AgeGroup = require("../models/AgeGroup");

module.exports = {
  async store(req, res) {
    const { age_name, description } = req.body;

    const age = await AgeGroup.create({
      age_name,
      description
    });
    return res.json(age)
  },
  async getAge(req, res) {
    const { id } = req.params
    const age = await AgeGroup.findByPk(id, {
      include: { association: 'age_prod' }
    });

    return res.json({ age });
  },
  async index(req, res) {
    const age = await AgeGroup.findAll({
      include: { association: 'age_prod' }
    })
    return res.json(age);
  },
  async delete(req, res) {
    const { id } = req.params
    const age = await AgeGroup.findByPk(id)
    await age.destroy();
    return res.json(age)
  },
  async edit(req, res) {
    const { id } = req.params
    const { age_name, description } = req.body;
    const age = await AgeGroup.findOne({ id });
    age.age_name = age_name,
      age.description = description
    await age.save();
    return res.json(age);
  }
}