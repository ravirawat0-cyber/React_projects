import { useState } from "react";
import Card from "../Molecules/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2025");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expense.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  let expenseContent = <p>No Expense Found</p>;

  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((data) => (
      <ExpenseItem title={data.title} amount={data.amount} date={data.date} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expense={filteredExpense} />
      {expenseContent}
    </Card>
  );
}
