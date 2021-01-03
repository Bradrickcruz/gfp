import transactionModel from "../models/transactionModel.js";

const findAllTransactions = async (req, res) => {
  try {
    let allDocs = await transactionModel.find({});
    res.send({ docs: allDocs });
  } catch (error) {
    res.status(500).send(error);
  }
};

// retorna uma transaction pelo id
const findOneTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    let doc = await transactionModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// retorna uma ou mais transactions pelo field e search
const findTransactionByField = async (req, res) => {
  const { field, search } = req.params;
  const query = { [field]: { $regex: `.*${decodeURIComponent(search)}.*` } };

  try {
    let docs = await transactionModel.find(query);
    res.send({ docs: docs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// atualiza uma transaction
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const updatedDoc = req.body;

  try {
    let docToUpdate = await transactionModel.findOneAndUpdate(id, updatedDoc);
    docToUpdate.save();
    res.send(true);
  } catch (error) {
    res.status(500).send({ res: false, error: error });
  }
};

// cria uma nova transaction
const createTransaction = async (req, res) => {
  const docBody = req.body;
  try {
    let newDoc = await new transactionModel(docBody);
    await newDoc.save();

    res.send({ newDoc: newDoc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

// deleta uma transaction
const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    await transactionModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send(false);
  }
};

export {
  findAllTransactions,
  findOneTransaction,
  findTransactionByField,
  updateTransaction,
  deleteTransaction,
  createTransaction,
};
