const {
  Order,
  OrderItem,
  MenuItem,
  Department,
  Specification,
  OrderItemSpecification,
} = require("../models");

const createOrder = async (req, res) => {
  try {
    const { items } = req.body; // Assume items is an array of { menuItemId, quantity, specifications }
    let total = 0;

    const order = await Order.create({ status: "pending", total: 0 });

    for (const item of items) {
      const menuItem = await MenuItem.findByPk(item.menuItemId);
      if (!menuItem) {
        return res.status(404).json({ error: "Menu item not found" });
      }

      const price = menuItem.price * item.quantity;
      total += price;

      const orderItem = await OrderItem.create({
        orderId: order.id,
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        price,
      });

      for (const specId of item.specifications) {
        await OrderItemSpecification.create({
          orderItemId: orderItem.id,
          specificationId: specId,
        });
      }
    }

    order.total = total;
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          as: "orderItems",
        },
        {
          model: Department,
          as: "sections",
        },
        {
          model: MenuItem,
          as: "menuItems",
        },
      ],
    });

    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: OrderItem,
          as: "orderItems",
        },
        {
          model: Department,
          as: "sections",
        },
        {
          model: MenuItem,
          as: "menuItems",
        },
      ],
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
};
