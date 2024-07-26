const { Role, RoleResponsibility } = require("../models");

exports.createRoleResponsibility = async (req, res) => {
  try {
    const roleResponsibility = await RoleResponsibility.create(req.body);
    res.status(201).json(roleResponsibility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllRoleResponsibilitys = async (req, res) => {
  try {
    const roleResponsibilitys = await RoleResponsibility.findAll({
      include: {
        model: Role,
        as: "responsibilities",
      },
    });
    res.json(roleResponsibilitys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoleResponsibilityById = async (req, res) => {
  try {
    const roleResponsibility = await RoleResponsibility.findByPk(
      req.params.id,
      {
        include: {
          model: Role,
          as: "responsibilities",
        },
      }
    );

    if (!roleResponsibility) {
      return res.status(404).json({ message: "RoleResponsibility not found" });
    }
    res.json(roleResponsibility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRoleResponsibility = async (req, res) => {
  try {
    const [updated] = await RoleResponsibility.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "RoleResponsibility not found" });
    }
    const updatedRoleResponsibility = await RoleResponsibility.findByPk(
      req.params.id
    );
    res.json(updatedRoleResponsibility);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoleResponsibility = async (req, res) => {
  try {
    const deleted = await RoleResponsibility.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "RoleResponsibility not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
