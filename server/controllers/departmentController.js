const { where, Op } = require("sequelize");
const { Department } = require("../models");

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll(
      {
        where: {
          parent: {
            [Op.is]: null,
          },
        },
      },
      {
        include: {
          model: Department,
          as: "sections",
        },
      },
      {
        order: [["id", "ASC"]],
      }
    );

    res.json(departments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSections = async (req, res) => {
  try {
    const departments = await Department.findAll(
      {
        where: { parent: req.param.id },
      }
      // {
      //   include: {
      //     model: Department,
      //     as: "departments",
      //   },
      // }
    );

    res.json(departments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id, {
      include: {
        model: Department,
        as: "sections",
      },
    });
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const [updated] = await Department.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Department not found" });
    }
    const updatedDepartment = await Department.findByPk(req.params.id);
    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const deleted = await Department.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
