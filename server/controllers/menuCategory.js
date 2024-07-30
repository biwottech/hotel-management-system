const { MenuCategory, Menu } = require("../models");

exports.createMenuCategory = async (req, res) => {
  try {
    const menuCategory = await MenuCategory.create(req.body);
    res.status(201).json(menuCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMenuCategorys = async (req, res) => {
  try {
    const menuCategorys = await MenuCategory.findAll({
      include: {
        model: Menu,
        as: "menus",
      },
    });

    res.json(menuCategorys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMenuCategoryById = async (req, res) => {
  try {
    const menuCategory = await MenuCategory.findByPk(req.params.id, {
      include: {
        model: Menu,
        as: "menus",
      },
    });

    if (!menuCategory) {
      return res.status(404).json({ message: "MenuCategory not found" });
    }
    res.json(menuCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMenuCategory = async (req, res) => {
  try {
    const [updated] = await MenuCategory.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) {
      return res.status(404).json({ message: "MenuCategory not found" });
    }
    const updatedMenuCategory = await MenuCategory.findByPk(req.params.id);
    res.json(updatedMenuCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMenuCategory = async (req, res) => {
  try {
    const deleted = await MenuCategory.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "MenuCategory not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
