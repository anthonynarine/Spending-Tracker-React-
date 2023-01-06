import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense({ onAddExpense }) {

  //This function below will allow date to be passed from a child
  //this function must be called in ExpenseForm
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    };

    onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
