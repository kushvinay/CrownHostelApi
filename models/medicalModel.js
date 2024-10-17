const mongoose = require("mongoose");

const medicalSchema = new mongoose.Schema(
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
    academicYear: {
      type: Number,
      required: true,
    },
    roomID: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    diseaseLevel: {
      type: Number,
      required: true,
    },
    treatmentLevel: {
      type: String,
      required: true,
    },
    illness: {
      type: String,
      required: true,
    },
    otherMention: {
      type: String,
    },
    sickPeriod: {
      type: Number,
      required: true,
    },
    makeAppointment: {
      type: Boolean,
      required: true,
    },
    appointmentTime: {
      type: Date,
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

const medical = mongoose.model("Medical" , medicalSchema)

module.exports = medical


