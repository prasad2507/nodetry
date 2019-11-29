const Customer = require("../models/customer");

const createNewCustomer = customer => {
  const newCustomer = new Customer(customer);
  return newCustomer.save();
};

const getCustomerById = id => {
  return Customer.findById(id);
};

const getCustomers = () => {
  return Customer.find();
};
module.exports = {
  createNewCustomer: createNewCustomer,
  getCustomerById: getCustomerById,
  getCustomers: getCustomers
};
