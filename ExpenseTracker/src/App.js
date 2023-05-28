import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const dummy_expense = [
  {
    id: "a1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "a2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "a3",
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "a4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
];
function App() {
  const [expense, setExpense] = useState(dummy_expense);
  const addExpenseHandler = (expenseFormData) => {
    setExpense((prevState) => {
      return [expenseFormData, ...prevState];
    });
  };
  return (
    <div className="App">
      <NewExpenses onSaveExpenseData={addExpenseHandler} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
