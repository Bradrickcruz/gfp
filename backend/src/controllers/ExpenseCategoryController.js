import expenseCategoryModel from "../models/expenseCategoryModel.js";

const findAllExpenseCategories = async (req, res) => {
  try {
    let allDocs = await expenseCategoryModel.find({});
    res.send({ docs: allDocs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// retorna uma categoria pelo id
const findOneExpenseCategory = async (req, res) => {
  const { id } = req.params;

  try {
    let doc = await expenseCategoryModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// retorna uma ou mais categorias pelo field e search
const FindExpenseCategoryByField = async (req, res) => {
  const { field, search } = req.params;
  const query = { [field]: { $regex: `.*${decodeURIComponent(search)}.*` } };

  try {
    let docs = await expenseCategoryModel.find(query);
    res.send({ docs: docs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// atualiza uma category
const updateExpenseCategory = async (req, res) => {
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
};

// cria uma nova categoria
const createExpenseCategory = async (req, res) => {
  const docBody = req.body;

  try {
    let newDoc = await new expenseCategoryModel(docBody);
    await newDoc.save();
    res.send({ newDoc: newDoc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// deleta uma category
const deleteExpenseCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await expenseCategoryModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export {
  findAllExpenseCategories,
  findOneExpenseCategory,
  FindExpenseCategoryByField,
  updateExpenseCategory,
  createExpenseCategory,
  deleteExpenseCategory,
};
