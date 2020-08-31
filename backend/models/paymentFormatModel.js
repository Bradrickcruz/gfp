import mongoose from 'mongoose';

const paymentFormatModel = new mongoose.Schema({
  label: { type: String, required: true },
  isCounted: { type: Boolean, required: true },
});

export default mongoose.model(
  'paymentFormatModel',
  paymentFormatModel,
  'payment_formats'
);
