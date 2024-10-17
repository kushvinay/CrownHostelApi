const express = require("express");
const router = express.Router();
const {
  createClearanceRequest,
  getAllClearanceRequests,
  updateClearanceRequestStatus,
} = require("../controllers/clearanceController");
const { isAuthenticated } = require("../middlewares/auth");


// Create a new clearance request
router.post("/", createClearanceRequest);

// Get all clearance requests
router.get("/", getAllClearanceRequests);

router.patch("/:id/status", updateClearanceRequestStatus);

// Add other routes for updating, deleting, and retrieving single clearance requests as needed

module.exports = router;
