import mongoose from 'mongoose';

const transactionModel = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  transactionFormat: {
    type: String,
    required: true,
  },
  partsQuantity: {
    type: Number,
    required: true,
  },
  TransactionType: {
    type: String,
    required: true,
  },
  TransactionTypeCategory: {
    type: String,
    required: true,
  },
  paymentFormat: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model(
  'transactionModel',
  transactionModel,
  'transactions'
);
