import express from 'express';
import {
  findOneIncomeCategory,
  findIncomeCategoryByField,
  updateIncomeCategory,
  createIncomeCategory,
  deleteIncomeCategory,
} from '../controllers/IncomeCategoryController.js';

const router = express.Router();

router.use(express.json());

router.get('/findone/:id', findOneIncomeCategory());

router.get('/findbyfield/:field/:search', findIncomeCategoryByField());

router.post('/updatecategory/:id', updateIncomeCategory());

router.post('/newcategory', createIncomeCategory());

router.delete('/deletecategory/:id', deleteIncomeCategory());

export default router;
