import express from 'express';
import paymentFormatModel from '../models/paymentFormatModel.js';

const router = express.Router();

router.use(express.json());

// retorna um paymentFormat pelo id
router.get('/findone/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let doc = await paymentFormatModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send(error);
  }
});

// retorna um ou mais paymentFormat por um label
router.get('/findbylabel/:label', async (req, res) => {
  const { label } = req.params;
  const query = { label: { $regex: `.*${decodeURIComponent(label)}.*` } };
  try {
    let searchedDocs = await paymentFormatModel.find(query);
    res.send({ docs: searchedDocs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// atualiza um paymentFormat
router.post('/updatepayment/:id', async (req, res) => {
  const { id } = req.params;
  const updatedBody = req.body;

  try {
    let updateDoc = await paymentFormatModel.findByIdAndUpdate(id, updatedBody);
    await updateDoc.save();
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// cria um novo paymentFormat
router.post('/newpaymentformat', async (req, res) => {
  const docBody = req.body;

  try {
    let newPaymentFormat = await new paymentFormatModel(docBody);
    await newPaymentFormat.save();
    res.send({ newDoc: newPaymentFormat });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// deleta um paymentFormat
router.delete('/deletepaymentformat/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await paymentFormatModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

export default router;
