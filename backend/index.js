import express from 'express';
import './connect.js';
import paymentFormatModel from './models/paymentFormatModel.js';
import incomeCategoryModel from './models/incomeCategoryModel.js';
import expenseCategoryModel from './models/expenseCategoryModel.js';
import transactionModel from './models/transactionModel.js';

import MainRouter from './routes/MainRouter.js';
import TransactionRouter from './routes/TransactionRouter.js';
import PaymentFormatRouter from './routes/PaymentFormatRouter.js';
import ExpenseCategoryRouter from './routes/ExpenseCategoryRouter.js';
import IncomeCategoryRouter from './routes/IncomeCategoryRouter.js';

const app = express();
const PORT = 3030;

app.use(express.json());
app.use('/', MainRouter);
app.use('/transaction', TransactionRouter);
app.use('/payment', PaymentFormatRouter);
app.use('/expensecategory', ExpenseCategoryRouter);
app.use('/incomecategory', IncomeCategoryRouter);

try {
  app.listen(PORT, () => {
    console.log('API iniciada');
  });
} catch (error) {
  console.log({ Error: error });
}
