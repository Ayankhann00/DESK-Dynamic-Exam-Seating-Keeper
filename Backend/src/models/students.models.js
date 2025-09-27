import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
      required: true,
    },

    rollNo: {
      type: String,
      unique: true,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    seatPref: {
      type: String,
      default: null,
    },
  },

  { timestamps: true }
);

StudentSchema.index({ semester: 1 });

export const Student = mongoose.model("Student", StudentSchema);
