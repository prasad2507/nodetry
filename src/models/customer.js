import { model, Schema } from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const customerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
});

const CustomerModel = model("customer", customerSchema);
export default CustomerModel;

export const CustomerTC=composeWithMongoose(CustomerModel);
