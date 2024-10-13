import mongoose from "mongoose";

const ResultDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    initialCapital: {
      type: Number,
      default: 0,
    },
    stake: {
      type: Number,
      default: 0,
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
    isWin: {
      type: Boolean,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
// Pre-save middleware to ensure `isWin` is correctly set
ResultDataSchema.pre("save", function (next) {
  this.isWin = this.result > this.breakEven;
  next();
});

export default mongoose.models.ResultData ||
  mongoose.model("ResultData", ResultDataSchema);
