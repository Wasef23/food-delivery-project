const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create order
router.post("/", protect, async (req, res) => {
  const order = await Order.create({
    user: req.user._id,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
  });
  res.status(201).json(order);
});

// User order history
router.get("/my-orders", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("items.food");
  res.json(orders);
});

module.exports = router;
