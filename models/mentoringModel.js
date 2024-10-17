const mongoose = require("mongoose");

const mentoringSchema = new mongoose.Schema(
  {
    studentID: {
      type: String,
      unique:true,
      required: true,
    },
    academicYear: {
      type: Number,
      required: true,
    },
    roomID: {
      type: String,
      unique: true,
      required: true,
    },
    requestTime: {
      type: Number,
      required: true,
    },
    mentoringType: {
      type: String,
      enum: ["student", "lecture", "counselling"],
      required: true,
    },
    reason: {
      type: String,
      enum: ["academic", "exam", "personal", "health", "other"],
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

const mentoringRequest = mongoose.model("MentoringRequest",  mentoringSchema);

module.exports = mentoringRequest;


