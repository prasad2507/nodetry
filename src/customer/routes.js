import { Router } from "express";
const router = Router();
import { createNewCustomer, getCustomerById, getCustomers } from "./controller";

router.post("/", (req, res) => {
  createNewCustomer(req.body)
    .then(customer => {
      return res.send(customer);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  getCustomers()
    .then(customers => {
      res.send(customers);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  getCustomerById(req.params.id)
    .then(customers => {
      res.send(customers);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
