const express = require("express");
const router = express.Router();
const {
    createRoomInquiry,
    getAllRoomInquiries,
    getRoomInquiryById,
    updateRoomInquiry,
    deleteRoomInquiry,
    updateRoomInquiry

}= require("../controllers/roomInquiryController");
const { isAuthenticated } = require("../middlewares/auth");


// Create a new room inquiry
router.post("/", createRoomInquiry);

// Get all room inquiries
router.get("/", getAllRoomInquiries);

// Get a single room inquiry by ID
router.get("/:id",getRoomInquiryById);

// Update a room inquiry by ID
router.put("/:id", updateRoomInquiry);

// Delete a room inquiry by ID
router.delete("/:id", deleteRoomInquiry);

// Update the status of a room inquiry by ID
router.patch("/:id/status", updateRoomInquiry);

module.exports = router;
