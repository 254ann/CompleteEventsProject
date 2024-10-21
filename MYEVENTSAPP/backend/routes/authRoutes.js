const express = require("express");
const authController = require("../controllers/authController");
const { Login, Register } = require("../schemas/authSchemas");
const authMiddleware = require("../midlewares/authMiddleware");

const router = express.Router();

router.post("/auth/register", Register, authController.register);
router.post("/auth/login", Login, authController.login);
router.post("/auth/logout", authController.logout);
router
    .route("/auth/users/:id")
    .get(authMiddleware, authController.getUser)
    .put(Register, authController.updateUser);
router.get("/auth/users", authController.getAllUsers);

module.exports = router;
