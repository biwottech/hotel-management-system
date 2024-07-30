const { ComfortLevel, Room } = require("../models");

exports.createComfortLevel = async (req, res) => {
  try {
    const role = await ComfortLevel.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllComfortLevels = async (req, res) => {
  try {
    const comfortLevel = await ComfortLevel.findAll({
      include: {
        model: Room,
        as: "rooms",
      },
    });

    res.json(comfortLevel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComfortLevelById = async (req, res) => {
  try {
    const role = await ComfortLevel.findByPk(req.params.id, {
      include: {
        model: Room,
        as: "rooms",
      },
    });

    if (!role) {
      return res.status(404).json({ message: "ComfortLevel not found" });
    }
    res.json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateComfortLevel = async (req, res) => {
  try {
    const [updated] = await ComfortLevel.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "ComfortLevel not found" });
    }
    const updatedComfortLevel = await ComfortLevel.findByPk(req.params.id);
    res.json(updatedComfortLevel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteComfortLevel = async (req, res) => {
  try {
    const deleted = await ComfortLevel.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Comfort Level not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
