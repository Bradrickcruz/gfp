import express from 'express';
import {
  findAllExpenseCategories,
  findOneExpenseCategory,
  FindExpenseCategoryByField,
  updateExpenseCategory,
  createExpenseCategory,
  deleteExpenseCategory,
} from '../controllers/ExpenseCategoryController.js';

const router = express.Router();

router.use(express.json());

router.get('/findall', findAllExpenseCategories);

router.get('/findone/:id', findOneExpenseCategory);

router.get('/findbyfield/:field/:search', FindExpenseCategoryByField);

router.post('/updatecategory/:id', updateExpenseCategory);

router.post('/newcategory', createExpenseCategory);

router.delete('/deletecategory/:id', deleteExpenseCategory);

export default router;
