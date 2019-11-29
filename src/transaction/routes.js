import { Router } from "express";
const router = Router();
import { createNewTransaction, getTransactionById, getTransactions } from "./controller";

router.post("/", (req, res) => {
  createNewTransaction(req.body)
    .then(transaction => {
      return res.send(transaction);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  getTransactions()
    .then(transactions => {
      res.send(transactions);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  getTransactionById(req.params.id)
    .then(transaction => {
      res.send(transaction);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
