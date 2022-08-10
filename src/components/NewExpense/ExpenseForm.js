import React, { useState } from "react";
import ExpenseFormContent from "./ExpenseFormContent";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(new Date(e.target.value).toISOString());
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const date = new Date(enteredDate);
    console.log(date.toISOString());
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <ExpenseFormContent
      title={enteredTitle}
      date={enteredDate}
      amount={enteredAmount}
      titleChange={titleChangeHandler}
      amountChange={amountChangeHandler}
      dateChange={dateChangeHandler}
      onSubmit={submitHandler}
      setEnteredTitle={setEnteredTitle}
      setEnteredAmount={setEnteredAmount}
      setEnteredDate={setEnteredDate}
    />
  );
};

export default ExpenseForm;
