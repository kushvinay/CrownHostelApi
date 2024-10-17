const mongoose = require("mongoose");

const roomInquirySchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      unique: true,
      required: true,
    },
    roomId: {
      type: String,
      unique: true,
      required: true,
    },
    inquireType: {
      type: String,
      unique: true,
      enum: ["immediate_solution", "suggestion"],
      required: true,
    },
    inquiriesCategory: {
      type: String,
      unique: true,
      enum: [
        "room_change",
        "room_request",
        "roommate_problem",
        "room_services",
        "other",
      ],
      required: true,
    },
    contactNumber: {
      type: String,
      unique: true,
      required: true,
    },
    reason: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending", // Set default status to "pending"
    },
  },
  {
    timestamps: true,
  }
);

const roomInquiry = mongoose.model("RoomInquiry", roomInquirySchema);

module.exports = roomInquiry;


