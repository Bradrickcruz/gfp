import axios from 'axios';

const URL = 'http://localhost:3030';

// console.log(URL);

const getAllTransactions = async () => {
  try {
    const allTransactions = await axios.get(`${URL}/transaction/findall`);
    return allTransactions.data.docs;
  } catch (error) {
    return { error: error.message };
  }
};

export default {
  getAllTransactions,
};
