import mongoose from "mongoose";

const ResultDataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  initialCapital: {
    type: Number,
    required: true,
  },
  stake: {
    type: Number,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  breakEven: {
    type: Number,
    required: true,
  },
  currentCapital: {
    type: Number,
    default: 0,
  },
  profitLoss: {
    type: Number,
    default: 0,
  },
  targetProfitPercent: {
    type: Number,
    default: 0,
  },
  targetProfitAmount: {
    type: Number,
    default: 0,
  },
  stopLossPercent: {
    type: Number,
    default: 0,
  },
  stopLossAmount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
    timestamps: true,
});

export default mongoose.models.ResultData ||
  mongoose.model("ResultData", ResultDataSchema);
