import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

//checks to see if data is stored in a specific year. of not return message
//if data exist return that data
function ExpenseList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
