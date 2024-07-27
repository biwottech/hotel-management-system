const { Room, RoomType, ComfortLevel } = require("../models");

exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll({
      include: [RoomType, ComfortLevel],
    });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id, {
      include: [RoomType, ComfortLevel],
    });
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const [updated] = await Room.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const room = await Room.findByPk(req.params.id);
      res.status(200).json(room);
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const deleted = await Room.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
