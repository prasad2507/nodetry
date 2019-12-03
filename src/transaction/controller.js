import Transaction, { findById, find } from "../models/transaction";
import { updateBalance } from "../account/controller";

export const createNewTransaction = async transaction => {
  const newTransaction = new Transaction(transaction);
  let createdTransaction = await newTransaction.save();
  if (transaction.type == "debit") {
    await updateBalance(transaction.account, transaction.amount * -1);
  } else {
    await updateBalance(transaction.account, transaction.amount);
  }
  return createdTransaction.populate("account").execPopulate();
};

export const getTransactionById = id => {
  return Transaction.findById(id).populate("account", {
    accountNumber: 1
  });
};

export const getTransactions = () => {
  return Transaction.find().populate("account", {
    accountNumber: 1
  });
};

