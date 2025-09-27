import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const department = mongoose.model("Department", DepartmentSchema);
