import React from 'react';
import CashCheck from './CashCheck';

const items = [
  { id: 8171, name: "beef", price: 100, amount: 4 },
  { id: 8171, name: "lamb", price: 130, amount: 2 },
  { id: 8171, name: "beer", price: 50, amount: 40 },
  { id: 8171, name: "onion", price: 10, amount: 49 },
  { id: 8171, name: "carrot", price: 10, amount: 44 }
]

const Content = () => {
  return (
    <div>
      <h2>We all need healthy diet</h2>

      <CashCheck
        openTime="06:30"
        message="who gets up early, God helps"
        goods={items}
      />
    </div>
  );
};

export default Content;
