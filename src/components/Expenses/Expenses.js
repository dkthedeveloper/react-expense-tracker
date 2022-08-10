import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  const yearChangeHandler = (value) => {
    setEnteredYear(value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={enteredYear} onYearChange={yearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expensesArr={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
