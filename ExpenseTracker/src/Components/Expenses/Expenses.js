import Card from "../Molecules/Card";
import ExpenseItem   from "./ExpenseItem";
import './Expenses.css';

export default function Expenses(props)
{
    const expense = props.expense
    return (
        <Card className="expenses">
            {expense.map((data) => 
            (
                  <ExpenseItem title = {data.title}
                  amount = {data.amount}
                  date = {data.date}/>     
            ))}
        </Card>
    )
}



  
