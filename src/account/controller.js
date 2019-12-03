import Account from "../models/account";

export const createNewAccount = async account => {
  const newAccount = new Account(account);
  let createdAccount = await newAccount.save();
  return createdAccount.populate("customer").execPopulate();
};

export const getAccountById = id => {
  return Account.findById(id).populate("customer");
};

export const getAccounts = () => {
  return Account.find().populate("customer");
};

export const updateBalance = (id, amount) => {
  return Account.findByIdAndUpdate(id, {
    $inc: {
      balance: amount
    }
  });
};


