import axios from 'axios';
const URL = 'http://localhost:8080';

const getAllTransactions = async () => {
  try {
    const allTransactions = await axios.get(`${URL}/transaction/findall`);
    return allTransactions.data.docs;
  } catch (error) {
    console.log({ error: error });
    return error;
  }
};

export default {
  getAllTransactions,
};
