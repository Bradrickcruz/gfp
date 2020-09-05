import express from 'express';
import cors from 'cors';
import './connect.js';

import TransactionRouter from './routes/TransactionRouter.js';
import PaymentFormatRouter from './routes/PaymentFormatRouter.js';
import ExpenseCategoryRouter from './routes/ExpenseCategoryRouter.js';
import IncomeCategoryRouter from './routes/IncomeCategoryRouter.js';

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(cors());

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
