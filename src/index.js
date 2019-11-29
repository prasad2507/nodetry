const express = require("express");
const parser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

const customerRouter = require("./customer/routes");
const accountRouter = require("./account/routes");
const transactionRouter = require("./transaction/routes");

app.use(parser.json());

app.use(
  parser.urlencoded({
    extended: false
  })
);

app.use("/customer", customerRouter);
app.use("/account", accountRouter);
app.use("/transaction", transactionRouter);

mongoose
  .connect(
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
