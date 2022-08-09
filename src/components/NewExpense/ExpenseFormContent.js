import React, { useState } from "react";

const ExpenseFormContent = (props) => {
  const [formState, updateFormState] = useState("closed");

  const formOpenHandler = () => {
    updateFormState("open");
  };

  const formCloseHandler = () => {
    props.setEnteredTitle("");
    props.setEnteredAmount("");
    props.setEnteredDate("");
    updateFormState("closed");
  };

  if (formState === "closed") {
    return (
      <div>
        <button onClick={formOpenHandler}>Add Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={props.onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={props.title} onChange={props.titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={props.amount}
            onChange={props.amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={props.date}
            onChange={props.dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={formCloseHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFormContent;
