import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 1, title: 'paper', amount: 100 },
    { id: 2, title: 'duck', amount: 200 },
    { id: 3, title: 'rock', amount: 300 },
  ];

  return (
    <div>
      <h1>React project!</h1>
      <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} />
      <ExpenseItem id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} />
      <ExpenseItem id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} />
    </div>
  );
}

export default App;
