const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} = require("../controllers/userController");
const createError = require("../utils/error");
const {
  verifyToken,
  verifyAdmin,
  verifyUser,
} = require("../utils/verifyToken");
const router = require("express").Router();

// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getSingleUser);
// GET ALL
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
