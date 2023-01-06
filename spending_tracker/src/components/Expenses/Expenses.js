import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList"
import "./Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log("Expense.js")
    // console.log(selectedYear)
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    // expression will return true if the year stored in the date is the same year as selected in filteredYear
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
