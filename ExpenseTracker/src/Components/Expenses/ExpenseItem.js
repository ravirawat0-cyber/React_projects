
import { useState } from 'react';
import Card from '../Molecules/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


export default function ExpenseItem(props)
{
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated!")
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
            </div>
            <button onClick={clickHandler}>button</button>
        </Card>
        )
}