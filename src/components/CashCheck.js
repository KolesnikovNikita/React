import React from "react";
import Check from "../../check.js";

const CashCheck = (props) => {
  const check = new Check();

  check.addItem({ id: 8171, name: "beef", price: 100, amount: 4 });
  check.addItem({ id: 9181, name: "pork", price: 75, amount: 2 });
  check.addItem({ id: 8571, name: "beef", price: 85, amount: 4 });
  check.addItem({ id: 5869, name: "water", price: 15, amount: 4 });

  check.removeItem(8571);
  check.removeItem(5869);



  return (
    <div>
      <p>Open time: {props.openTime}</p>
      <p>Our wishes: {props.message}</p>
      <br />
      <br />
      <table>
        <tbody>
          {check.items.map((good) => (
            <tr key={good.id}>
              <td>{good.id}</td>
              <td>{good.name}</td>
              <td>{good.price}</td>
              <td>{good.amount}</td>
            </tr>
          )
          )}
          <tr>
            <td>Total count: {check.totalCount()}</td>
            <td>Amount: {check.totalAmount()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CashCheck;
