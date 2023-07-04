import './App.css';
import CreateNewExpenses from './components/CreateNewExpenses';
import NewExpense from './components/NewExpense';
function App() {
  return (
    <div>
      <h1>React project!</h1>
      <NewExpense />
      <CreateNewExpenses />
    </div>
  );
}

export default App;
