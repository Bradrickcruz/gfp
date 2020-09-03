import incomeCategoryModel from '../models/incomeCategoryModel.js';

// retorna uma categoria pelo id
const findOneIncomeCategory = async (req, res) => {
  const { id } = req.params;

  try {
    let doc = await incomeCategoryModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// retorna uma ou mais categorias pelo field e search
const findIncomeCategoryByField = async (req, res) => {
  const { field, search } = req.params;
  const query = { [field]: { $regex: `.*${decodeURIComponent(search)}.*` } };

  try {
    let docs = await incomeCategoryModel.find(query);
    res.send({ docs: docs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// atualiza uma category
const updateIncomeCategory = async (req, res) => {
  const { id } = req.params;
  const docUpdate = req.body;

  try {
    let categoryUpdated = await incomeCategoryModel.findByIdAndUpdate(
      id,
      docUpdate
    );
    await categoryUpdated.save();
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// cria uma nova categoria
const createIncomeCategory = async (req, res) => {
  const docBody = req.body;

  try {
    let newDoc = await new incomeCategoryModel(docBody);
    await newDoc.save();
    res.send({ newDoc: newDoc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// deleta uma category
const deleteIncomeCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await incomeCategoryModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export default {
  findOneIncomeCategory,
  findIncomeCategoryByField,
  updateIncomeCategory,
  createIncomeCategory,
  deleteIncomeCategory
}