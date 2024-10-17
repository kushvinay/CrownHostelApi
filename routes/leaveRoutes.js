const express = require("express");
const router = express.Router();
const {
    createLeaveRequest,
    getAllLeaveRequests,
    updateLeaveRequestStatus
} = require("../controllers/leaveController");
const { isAuthenticated } = require("../middlewares/auth");


// Create Leave Request
router.post("/", createLeaveRequest);

// Get All Leave Requests
router.get("/", getAllLeaveRequests);

// Update Leave Request Status
router.patch("/:id/status", updateLeaveRequestStatus);

module.exports = router;
