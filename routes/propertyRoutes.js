const express = require("express");

const {
  getAllProperties,
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.route("/").get(getAllProperties).post(createProperty);
router
  .route("/:id")
  .get(getProperty)
  .patch(updateProperty)
  .delete(deleteProperty);

module.exports = router;
