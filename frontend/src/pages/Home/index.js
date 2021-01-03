import React, { useState, useEffect } from 'react';

import Title from '../../components/Title';
import TransactionCard from '../../components/TransactionCard';

import transactionService from '../../Services/transactionService.js';

export default function Home() {
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    getTransactions()
  }, []);

  async function getTransactions(){
    let transactions = await transactionService.getAllTransactions();
      console.log(transactions);
      setAllTransactions([...transactions]);
  }

  return (
    <>
      <div className="container">
        <Title>GFP</Title>
        {allTransactions.map((transaction,i) => (
          <div key={i}>{transaction.description}</div>
        ))}
      </div>
    </>
  );
}
