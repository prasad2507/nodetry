import express from "express";
import { json, urlencoded } from "body-parser";

import { connect } from "mongoose";

const app = express();

import customerRouter from "./customer/routes";
import accountRouter from "./account/routes";
import transactionRouter from "./transaction/routes";

app.use(json());

app.use(
  urlencoded({
    extended: false
  })
);

app.use("/customer", customerRouter);
app.use("/account", accountRouter);
app.use("/transaction", transactionRouter);

connect(
    "mongodb+srv://root:root@cluster0-8zdlr.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(res => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("Server Started");
    });
  })
  .catch(err => {
    console.log("Server Startup error.");
    console.log(err);
  });
