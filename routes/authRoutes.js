const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");



const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddleware , currentUserController);

module.exports = router;