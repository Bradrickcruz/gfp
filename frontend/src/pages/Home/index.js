import React, { useState, useEffect } from 'react';
import 'chart.js'

import Title from '../../components/Title';
import Chart from '../../components/Chart';

import transactionService from '../../Services/transactionService.js';

export default function Home() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [firstChart,setFirstChart] = useState(new Chart(null,{}))

  

  useEffect(() => {
    (async () => {
      let transactions = await transactionService.getAllTransactions();
      console.log(transactions);
      setAllTransactions([...transactions]);
    })();
  }, []);

  

  return (
    <>
      <div className="container">
        <Title>GFP</Title>
      </div>
      {allTransactions.map((transaction) => (
        <div>{transaction.description}</div>
      ))}
      <Chart id='myChart'>{firstChart}</Chart>
    </>
  );
}
