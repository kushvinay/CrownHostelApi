const express = require("express");
const router = express.Router();
const { createAccommodation,
    getAllAccommodations
    } = require("../controllers/accommodationController");
const { isAuthenticated } = require("../middlewares/auth");


// Create a new accommodation
router.post("/", createAccommodation);

// Get all accommodations
router.get("/", getAllAccommodations);

// Add other routes for updating, deleting, and retrieving single accommodation as needed

module.exports = router;
