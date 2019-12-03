import express from "express";
import { json, urlencoded } from "body-parser";
import { connect } from "mongoose";
// import { createNewCustomer, getCustomerById, getCustomers } from "./customer/controller";
// import { createNewAccount, getAccountById, getAccounts } from "./account/controller";
// import { createNewTransaction, getTransactionById, getTransactions } from "./transaction/controller";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema"
const app = express();
app.use(json());

app.use(
  urlencoded({
    extended: false
  })
);

// let typeDefs=gql`  
// type Customer{
//   id:ID!
//   name:String!
//   mobile:String!
// }

// type Account{
//   id:ID!
//   type:String!
//   balance:Float!
//   accountNumber:String!
//   customer:Customer!

// }

// type Transaction{
//   id:ID!
//   type:String!
//   amount:Float!
//   account:Account!
// }

// input CustomerInput{
//   name:String!
//   mobile:String!

// }

// input AccountInput{
//   type:String!
//   balance:Float!
//   accountNumber:String!
//   customer:ID!
// }

// input TransactionInput{
//   type:String!
//   amount:Float!
//   account:ID!
// }

// type Query{
//   customer(id:ID!):Customer
//   customers:[Customer]
//   account(id:ID!):Account
//   accounts:[Account]
//   transaction(id:ID!):Transaction
//   transactions:[Transaction]
// }

// type Mutation{
//   createCustomer(input:CustomerInput):Customer
//   createAccount(input:AccountInput):Account
//   createTransaction(input:TransactionInput):Transaction
// }
// `;

// let resolvers={
// Query:{
//   customer(parent,args,context,info){
//     return getCustomerById(args.id);
//   },
//   customers(parent,args,context,info){
//     return getCustomers();
//   },
//   account(args,parent,context,info){
//     return getAccountById(args.id);
//   },
//   accounts(parent,args,context,info){
//     return getAccounts();
//   },
//   transaction(parent,args,context,info){
//     return getTransactionById(args.id);
//   },
//   transactions(parent,args,context,info){
//     return getTransactions();
//   }
  
// },
// Mutation:{
//   createTransaction(parent,args,context,info){
//     return createNewTransaction(args.input);
//   },
//   createAccount(parent,args,context,info){
//     return createNewAccount(args.input);
//   },
//   createCustomer(parent,args,context,info){
//     return createNewCustomer(args.input);
//   }
  
  
// }
// };

const server=new ApolloServer({schema});
server.applyMiddleware({app});

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
