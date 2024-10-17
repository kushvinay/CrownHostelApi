const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  studentName: {
    type: String,
    unique: true,
    required: true,
  },
  studentID: {
    type: String,
    unique: true,
    required: true,
  },
  accommodationBlock: {
    type: String,
    required: true,
  },
  roomID: {
    type: String,
    unique: true,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  otherReason: String,
  inDate: {
    type: Date,
    required: true,
  },
  outDate: {
    type: Date,
    required: true,
  },
  responsiblePerson: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending", // Default status is 'pending'
  },
});

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
