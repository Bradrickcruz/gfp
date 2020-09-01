import express from 'express';
import transactionModel from '../models/transactionModel.js';

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send({ router: 'transaction', status: 'Ok' });
});

// Retorna uma transaction por seu ID
router.get('/findone/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let doc = await transactionModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// Retorna uma ou mais transactions pelo field e search
router.get('/findbyfield/:field/:search', async (req, res) => {
  const { field, search } = req.params;
  const query = { [field]: { $regex: `.*${decodeURIComponent(search)}.*` } };

  try {
    let docs = await transactionModel.find(query);
    res.send({ docs: docs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// altera uma transaction
router.post('/updatetransaction/:id', async (req, res) => {
  const { id } = req.params;
  const updatedDoc = req.body;

  try {
    let docToUpdate = await transactionModel.findOneAndUpdate(id, updatedDoc);
    docToUpdate.save();
    res.send(true);
  } catch (error) {
    res.status(500).send({ res: false, error: error });
  }
});

// deleta uma transaction
router.delete('/deletetransaction/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await transactionModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send(false);
  }
});

// cria uma nova transaction
router.post('/newtransaction', async (req, res) => {
  const docBody = req.body;
  try {
    let newDoc = await new transactionModel(docBody);
    await newDoc.save();

    res.send({ newDoc: newDoc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

export default router;
