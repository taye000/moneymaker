import mongoose from "mongoose";
import { IUser } from "../@types/user";
import ShortcutsSchema from "./Shortcuts";

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    recoveryCode: {
      type: String,
      default: "",
    },
    recoveryCodeExpiry: {
      type: Date,
      default: null,
    },
    shortcuts: {
      type: ShortcutsSchema,
      default: {
        stake: [10, 100, 200],
        breakEven: [1.3, 1.5, 2],
        result: {
          enabled: true,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
