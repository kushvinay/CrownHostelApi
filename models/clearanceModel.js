const mongoose = require("mongoose");

const clearanceSchema = new mongoose.Schema(
  {
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
    studentEmail: {
      type: String,
      unique: true,
      required: true,
    },
    roomID: {
      type: String,
      unique: true,
      required: true,
    },
    registrationYear: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    towelRack: {
      type: Boolean,
      required: true,
    },
    chair: {
      type: Boolean,
      required: true,
    },
    table: {
      type: Boolean,
      required: true,
    },
    cardboard: {
      type: Boolean,
      required: true,
    },
    extraKey: {
      type: Boolean,
      required: true,
    },
    handOverDate: {
      type: Date,
      required: true,
    },
    otherNotes: {
      type: String,
    },
    certified: {
      type: Boolean,
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

module.exports = mongoose.model("Clearance", clearanceSchema);
