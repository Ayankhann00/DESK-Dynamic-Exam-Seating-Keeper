import mongoose from "mongoose";

const AllocatedSeatSchema = new mongoose.Schema(
  {
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SeatingPlan",
      required: true,
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    seatRow: {
      type: Number,
      required: true,
    },

    seatCol: {
      type: Number,
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
  },

  { timestamps: true }
);

AllocatedSeatSchema.index({ plan: 1 });
AllocatedSeatSchema.index({ room: 1 });

AllocatedSeatSchema.index(
  { plan: 1, room: 1, seatRow: 1, seatCol: 1 },
  { unique: true }
);

export const AllocatedSeat = mongoose.model(
  "AllocatedSeat",
  AllocatedSeatSchema
);
