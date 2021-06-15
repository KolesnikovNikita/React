import React from 'react';
import CashCheck from './CashCheck';


const Content = () => {
  return (
    <div>
      <h2>We all need healthy diet</h2>

      <CashCheck
        openTime="06:30"
        message="who gets up early, God helps"
      />
    </div>
  );
};

export default Content;
