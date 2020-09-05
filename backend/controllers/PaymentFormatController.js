import paymentFormatModel from '../models/paymentFormatModel.js';

// retorna uma forma de pagamento pelo id
const findOnePaymentFormat = async (req, res) => {
  const { id } = req.params;

  try {
    let doc = await paymentFormatModel.findById(id);
    res.send({ doc: doc });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// retorna uma ou mais formas de pagamento pelo field e search
const findPaymentFormatByLabel = async (req, res) => {
  const { label } = req.params;
  const query = { label: { $regex: `.*${decodeURIComponent(label)}.*` } };

  try {
    let searchedDocs = await paymentFormatModel.find(query);
    res.send({ docs: searchedDocs });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// atualiza uma forma de pagamento
const updatePaymentFormat = async (req, res) => {
  const { id } = req.params;
  const updatedBody = req.body;

  try {
    let paymentFormatUpdated = await paymentFormatModel.findByIdAndUpdate(
      id,
      updatedBody
    );
    await paymentFormatUpdated.save();
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// cria uma nova forma de pagamento
const createPaymentFormat = async (req, res) => {
  const docBody = req.body;

  try {
    let newPaymentFormat = await new paymentFormatModel(docBody);
    await newPaymentFormat.save();
    res.send({ newDoc: newPaymentFormat });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// deleta uma forma de pagamento
const deletePaymentFormat = async (req, res) => {
  const { id } = req.params;
  try {
    await paymentFormatModel.findByIdAndDelete(id);
    res.send(true);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export {
  findOnePaymentFormat,
  findPaymentFormatByLabel,
  updatePaymentFormat,
  createPaymentFormat,
  deletePaymentFormat
}