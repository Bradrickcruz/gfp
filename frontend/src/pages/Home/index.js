import React, { useState, useEffect } from 'react';

import Title from '../../components/Title';
import TransactionCard from '../../components/TransactionCard';

import transactionService from '../../Services/transactionService.js';

export default function Home() {
  const [allTransactions, setAllTransactions] = useState([]);
  
  const [chartData,setChartData] = useState({
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive:false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

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
