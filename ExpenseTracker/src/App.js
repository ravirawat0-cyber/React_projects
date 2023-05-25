import Expenses from './Components/Expenses/Expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';


function App() {
const expense = 
    [
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)}, 
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)}, 
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)}, 
        { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)}, 
    ]
  return (
    <div className="App">
        <NewExpenses/>
        <Expenses expense = {expense}/>
    </div>
  );
}

export default App;
