import { Schema } from "mongoose";

export interface IResultData {
  user: Schema.Types.ObjectId;
  initialCapital: number;
  stake: number;
  result: number;
  breakEven: number;
  currentCapital: number;
  targetProfitPercent?: number;
  targetProfitAmount?: number;
  stopLossPercent?: number;
  stopLossAmount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
