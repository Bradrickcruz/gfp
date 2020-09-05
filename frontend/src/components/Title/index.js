import React from 'react';

export default function Title({ children: text }) {
  return (
    <>
      <h1 className="center">{text}</h1>
    </>
  );
}
