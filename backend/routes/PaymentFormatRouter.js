import express from 'express';
import {
  findOnePaymentFormat,
  findPaymentFormatByLabel,
  updatePaymentFormat,
  createPaymentFormat,
  deletePaymentFormat,
} from '../controllers/paymentFormatController.js';

const router = express.Router();

router.use(express.json());

router.get('/findone/:id', findOnePaymentFormat);

router.get('/findbylabel/:label', findPaymentFormatByLabel);

router.post('/updatepayment/:id', updatePaymentFormat);

router.post('/newpaymentformat', createPaymentFormat);

router.delete('/deletepaymentformat/:id', deletePaymentFormat);

export default router;
