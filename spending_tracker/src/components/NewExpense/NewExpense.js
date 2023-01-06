import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  //state to manage toggle add new expense button
  const [isEditing, setIsEditing] = useState(false);

  //This function below will allow date to be passed from a child
  //this function must be called in ExpenseForm
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  //manages above state to toggle adding new expense item
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  //handles cancel button in ExpenseForm
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
