import express from 'express';
import expenseCategoryModel from '../models/expenseCategoryModel.js';
import e from 'express';

const router = express.Router();

router.use(express.json());

// retorna uma categoria pelo id
router.get('/findone/:id', async (req, res) => {
  const { id } = req.params;

  try {
    let doc = await expenseCategoryModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// retorna uma ou mais categorias pelo field e search
router.get('/findbyfield/:field/:search', async (req, res) => {
  const { field, search } = req.params;
  const query = { [field]: { $regex: `.*${decodeURIComponent(search)}.*` } };

  try {
    let docs = await expenseCategoryModel.find(query);
    res.send({ docs: docs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// atualiza uma category
router.post('/updatecategory/:id', async (req, res) => {
  const { id } = req.params;
  const docUpdate = req.body;

  try {
    let categoryUpdated = await expenseCategoryModel.findByIdAndUpdate(
      id,
      docUpdate
    );
    await categoryUpdated.save();
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// cria uma nova categoria
router.post('/newcategory', async (req, res) => {
  const docBody = req.body;

  try {
    let newDoc = await new expenseCategoryModel(docBody);
    await newDoc.save();
    res.send({ newDoc: newDoc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.delete('/deletecategory/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await expenseCategoryModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

export default router;
