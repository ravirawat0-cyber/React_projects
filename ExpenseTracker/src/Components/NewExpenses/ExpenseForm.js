import "./ExpenseForm.css";
export default function ExpenseForm()
{
    return (
        <form>
            <div className="new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type="text"/>
                </div> 
                <div className= "new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className= "new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2023-05-25' max='2026-05-25'/>
                </div>
            </div>
            <div className="new-expense__control">
                    <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}