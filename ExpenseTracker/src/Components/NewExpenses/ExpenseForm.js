import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [userInput, SetUserInput] = useState({
    Title: "",
    Amount: "",
    Date: "",
  });
  const TitleChangeHandler = (event) => {
    SetUserInput((prevState) => {
      return { ...prevState, Title: event.target.value };
    });
  };

  const AmountChangeHandler = (event) => {
    SetUserInput((prevState) => {
      return { ...prevState, Amount: event.target.value };
    });
  };

  const DateChangeHandler = (event) => {
    SetUserInput((prevState) => {
      return { ...prevState, Date: event.target.value };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.Title,
      amount: userInput.Amount,
      date: new Date(userInput.Date),
    };
    SetUserInput({
      Title: "",
      Date: "",
      Amount: "",
    });
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.Title}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.Amount}
            onChange={AmountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-05-25"
            max="2026-05-25"
            value={userInput.Date}
            onChange={DateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__control">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
