import mongoose from "mongoose";

const SeatingPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    planDate: {
      type: Date,
      required: true,
    },

    // later can be ref to user
    createdBy: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "finalized"],
      default: "draft",
    },
  },
  { timestamps: true }
);

export const SeatingPlan = mongoose.model("SeatingPlan", SeatingPlanSchema);
