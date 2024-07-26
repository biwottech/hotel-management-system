const { Role, RoleResponsibility } = require("../models");

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: {
        model: RoleResponsibility,
        as: "responsibilities",
      },
    });

    res.json(roles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id, {
      include: {
        model: RoleResponsibility,
        as: "responsibilities",
      },
    });

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const [updated] = await Role.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Role not found" });
    }
    const updatedRole = await Role.findByPk(req.params.id);
    res.json(updatedRole);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const deleted = await Role.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
