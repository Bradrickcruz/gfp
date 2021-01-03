import express from "express";
import {
  findAllTransactions,
  findOneTransaction,
  findTransactionByField,
  updateTransaction,
  deleteTransaction,
  createTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.use(express.json());

// retorna todas as transactions
router.get("/findall", findAllTransactions);

// Retorna uma transaction por seu ID
router.get("/findone/:id", findOneTransaction);

// Retorna uma ou mais transactions pelo field e search
router.get("/findbyfield/:field/:search", findTransactionByField);

// altera uma transaction
router.post("/updatetransaction/:id", updateTransaction);

// deleta uma transaction
router.delete("/deletetransaction/:id", deleteTransaction);

// cria uma nova transaction
router.post("/newtransaction", createTransaction);

export default router;
