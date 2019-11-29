const { model, Schema } = require("mongoose");

const accountSchema = Schema({
  type: {
    type: String,
    required: true,
    enum: ["savings", "current"]
  },
  balance: {
    type: Number,
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "customer"
  }
});

const accountModel = model("account", accountSchema);

module.exports = accountModel;
