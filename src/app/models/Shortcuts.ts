import mongoose from "mongoose";
import { IShortcuts } from "../@types/user";

const ShortcutsSchema: mongoose.Schema<IShortcuts> = new mongoose.Schema(
  {
    stake: {
      type: [Number],
      default: [10, 100, 200],
    },
    breakEven: {
      type: [Number],
      default: [1.3, 1.5, 2],
    },
    result: {
      enabled: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default ShortcutsSchema;
