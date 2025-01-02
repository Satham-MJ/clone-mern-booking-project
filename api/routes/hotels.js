const {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotel,
} = require("../controllers/hotelController");
const createError = require("../utils/error");

const router = require("express").Router();

//CREATE
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getSingleHotel);
// GET ALL
router.get("/", getAllHotel);

module.exports = router;
