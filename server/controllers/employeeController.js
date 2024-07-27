const {
  Employee,
  User,
  Role,
  Department,
  RoleResponsibility,
} = require("../models");
const { sendEmail } = require("../services/emailService");
require("dotenv").config();

exports.createEmployee = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      departmentId,
      sectionId,
      roleId,
      password,
    } = req.body;

    const employee = await Employee.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      departmentId: departmentId,
      sectionId: sectionId,
      roleId: roleId,
    });

    const user = await User.create({
      email: email,
      password: password,
      confirmed: false,
      employeeId: employee.id,
    });

    const personnel = await Employee.findByPk(employee.id, {
      include: [
        {
          model: Department,
          as: "department",
        },
        {
          model: Department,
          as: "section",
        },
        {
          model: Role,
          as: "role",
          include: [
            {
              model: RoleResponsibility,
              as: "responsibilities",
            },
          ],
        },
      ],
    });

    res.status(201).json(personnel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [
        {
          model: Department,
          as: "department",
        },
        {
          model: Department,
          as: "section",
        },
        {
          model: Role,
          as: "role",
          include: [
            {
              model: RoleResponsibility,
              as: "responsibilities",
            },
          ],
        },
      ],
    });

    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          as: "department",
        },
        {
          model: Department,
          as: "section",
        },
        {
          model: Role,
          as: "role",
          include: [
            {
              model: RoleResponsibility,
              as: "responsibilities",
            },
          ],
        },
      ],
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const [updated] = await Employee.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmployee = await Employee.findByPk(req.params.id);
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
