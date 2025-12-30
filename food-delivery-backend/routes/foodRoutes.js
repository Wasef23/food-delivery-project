const express = require("express");
const Food = require("../models/Food");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all foods
router.get("/", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

// Add food (Admin)
router.post("/", protect, adminOnly, async (req, res) => {
  const food = await Food.create(req.body);
  res.status(201).json(food);
});

module.exports = router;
