import React, { useState } from "react";
import ExpenseFormContent from "./ExpenseFormContent";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /* const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  }); */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //    ...userInput,
    //     enteredTitle: e.target.value});
    /* setUserInput((prevState) => {
    return { ...prevState,enteredTitle: e.target.value}
   }); */
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.logÇ(new Date(e.target.value));
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <ExpenseFormContent onSubmit={submitHandler}>
      
    </ExpenseFormContent>
  );
};

export default ExpenseForm;
