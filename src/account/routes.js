const { Router } = require("express");
const router = Router();
const {
  createNewAccount,
  getAccountById,
  getAccounts
} = require("./controller");

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

module.exports = router;
