import { isEditable } from "@testing-library/user-event/dist/utils";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
import { useState } from "react";

export default function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setIsEditing(false);
    props.onSaveExpenseData(expenseData);
  };
  const startEditingForm = () => {
    setIsEditing(true);
  };
  const stopEditingForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expenses">
      {!isEditing && (
        <button onClick={startEditingForm}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}
