import express from 'express';
import './connect.js';
import paymentFormatModel from './models/paymentFormatModel.js';
import incomeCategoryModel from './models/incomeCategoryModel.js';
import expenseCategoryModel from './models/expenseCategoryModel.js';
import transactionModel from './models/transactionModel.js';

const app = express();
const PORT = 3030;

app.use(express.json());

async function testMongo() {
  console.log(await paymentFormatModel.find({}));
  console.log(await incomeCategoryModel.find({}));
  console.log(await expenseCategoryModel.find({}));
  console.log(await transactionModel.find({}));
}

// testMongo();

// app.listen(PORT, () => {
//   console.log('API iniciada');
// });
