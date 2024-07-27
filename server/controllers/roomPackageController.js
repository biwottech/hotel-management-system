const {
  Package,
  PackageInclusion,
  RoomPackage,
  ReservationPackage,
  Room,
} = require("../models");

exports.createRoomPackage = async (req, res) => {
  try {
    const roomPkg = await RoomPackage.create(req.body);
    res.status(201).json(roomPkg);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoomPackages = async (req, res) => {
  try {
    const roomPackages = await RoomPackage.findAll({
      include: [
        { model: Room, as: "rooms" },
        { model: Package, as: "packages" },
      ],
    });
    res.status(200).json(roomPackages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoomPackage = async (req, res) => {
  try {
    const roomPkg = await RoomPackage.findByPk(req.params.id, {
      include: [
        { model: Room, as: "rooms" },
        { model: Package, as: "packages" },
      ],
    });

    if (roomPkg) {
      res.status(200).json(roomPkg);
    } else {
      res.status(404).json({ message: "Room Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRoomPackage = async (req, res) => {
  try {
    const [updated] = await Package.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const roomPkg = await RoomPackage.findByPk(req.params.id);
      res.status(200).json(roomPkg);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoomPackage = async (req, res) => {
  try {
    const deleted = await RoomPackage.destroy({
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
