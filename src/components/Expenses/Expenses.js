import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filteredArr = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  const yearChangeHandler = (value) => {
    console.log(value);
    setEnteredYear(value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={enteredYear} onYearChange={yearChangeHandler} />
        <ExpensesList expensesArr={filteredArr} />
      </Card>
    </div>
  );
}

export default Expenses;
