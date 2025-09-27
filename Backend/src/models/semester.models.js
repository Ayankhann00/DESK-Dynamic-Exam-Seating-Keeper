import mongoose from "mongoose";

const SemesterSchema = new mongoose.Schema(
  {
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    examDate: {
      type: Date,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

SemesterSchema.index({ examDate: 1 });

export const Semester = mongoose.model("Semster", SemesterSchema);
