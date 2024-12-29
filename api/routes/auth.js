const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint");
});
router.get("/register", (req, res) => {
  res.send("Hello, this is auth endpoint");
});
module.exports = router;
