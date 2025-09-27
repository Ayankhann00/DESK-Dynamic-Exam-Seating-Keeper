import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    rows: {
      type: Number,
      required: true,
    },

    cols: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export const Room = mongoose.model("Room", RoomSchema);
