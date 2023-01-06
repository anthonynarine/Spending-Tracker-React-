import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Costa Rica Trip',
    amount: 4000,
    date: new Date(2023, 2, 18),
  },
  {
    id: 'e3',
    title: 'Mixico Trip',
    amount: 2500,
    date: new Date(2023, 5, 14),
  },
];

function App(){
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

//updating state based on an older snapshot of that same state
//dynamically updates our list when items are added
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    // console.log("in App.js")
    // console.log(expense)
  };

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  ) 
    
}

export default App;