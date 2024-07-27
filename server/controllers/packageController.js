const {
  Package,
  PackageInclusion,
  RoomPackage,
  ReservationPackage,
} = require("../models");

exports.createPackage = async (req, res) => {
  try {
    const pkg = await Package.create(req.body);
    res.status(201).json(pkg);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.findAll({
      include: [{ model: PackageInclusion, as: "packageInclusions" }],
    });
    res.status(200).json(packages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPackage = async (req, res) => {
  try {
    const pkg = await Package.findByPk(req.params.id, {
      include: [{ model: PackageInclusion, as: "packageInclusions" }],
    });

    if (pkg) {
      res.status(200).json(pkg);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const [updated] = await Package.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const pkg = await Package.findByPk(req.params.id);
      res.status(200).json(pkg);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const deleted = await Package.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
