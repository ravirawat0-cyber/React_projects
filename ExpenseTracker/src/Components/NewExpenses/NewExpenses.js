import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
export default function NewExpenses(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <div className="new-expenses">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
