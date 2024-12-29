const Hotel = require("../models/Hotel");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/", (req, res) => {
  res.json({ message: "User Page" });
});

module.exports = router;
