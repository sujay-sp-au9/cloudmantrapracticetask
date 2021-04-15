const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/add/email", userController.checkUserEmail);

router.post("/add", userController.addUser);

router
  .route("/all/user/:id")
  .patch(userController.editUser)
  .delete(userController.deleteUser);

router.get(["/all/:email", "/all"], userController.getAll);

module.exports = router;
