const Transaction = require("../models/transaction");
const { updateBalance } = require("../account/controller");

const createNewTransaction = async transaction => {
  const newTransaction = new Transaction(transaction);
  let createdTransaction = await newTransaction.save();
  if (transaction.type == "debit") {
    await updateBalance(transaction.account, transaction.amount * -1);
  } else {
    await updateBalance(transaction.account, transaction.amount);
  }
  return createdTransaction.populate("account").execPopulate();
};

const getTransactionById = id => {
  return Transaction.findById(id).populate("account", {
    accountNumber: 1
  });
};

const getTransactions = () => {
  return Transaction.find().populate("account", {
    accountNumber: 1
  });
};

module.exports = {
  createNewTransaction: createNewTransaction,
  getTransactionById: getTransactionById,
  getTransactions: getTransactions
};
