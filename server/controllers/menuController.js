const { Menu } = require("../models");

exports.createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu
      .findAll
      //   {
      //   include: {
      //     model: MenuResponsibility,
      //     as: "responsibilities",
      //   },
      // }
      ();

    res.json(menus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id, {
      include: {
        model: MenuResponsibility,
        as: "responsibilities",
      },
    });

    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const [updated] = await Menu.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Menu not found" });
    }
    const updatedMenu = await Menu.findByPk(req.params.id);
    res.json(updatedMenu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const deleted = await Menu.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
