import { model, Schema } from "mongoose";
import {composeWithMongoose} from "graphql-compose-mongoose"

const transactionSchema = Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["debit", "credit"]
    },
    amount: {
      type: Number,
      required: true
    },
    account: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "account"
    }
  },
  { timestamps: true }
);

const transactionModel = model("transaction", transactionSchema);
export default transactionModel;
export const TransactionTC=composeWithMongoose(transactionModel);
