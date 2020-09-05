import React, { useState } from 'react';

import Title from '../../components/Title';

import transactionService from '../../Services/transactionService.js';

export default function Home() {
  const [allTransactions, setAllTransactions] = useState([]);

  async function handleClick() {
    let res = await transactionService.getAllTransactions();
    setAllTransactions([...res]);
  }
  return (
    <>
      <div className="container">
        <Title>GFP</Title>
        <button className="btn" onClick={handleClick}>
          Click
        </button>
        {allTransactions.length
          ? allTransactions
              .map(({ description }) => {
                return <div>{description}</div>;
              })
              .join('')
          : ''}
      </div>
    </>
  );
}
