import { Router } from "express";
const router = Router();
import { createNewAccount, getAccountById, getAccounts } from "./controller";

router.post("/", (req, res) => {
  createNewAccount(req.body)
    .then(account => {
      res.send(account);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  getAccounts()
    .then(accounts => {
      res.send(accounts);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  getAccountById(req.params.id)
    .then(account => {
      res.send(account);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

export default router;
