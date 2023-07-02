import ExpenseItemJS from './ExpenseItemJS';
import './ExpenseItemCSS.css';

function CreateNewExpenses(props) {
  const expenses = [
    { id: 1, title: 'First Item', amount: 100, date: new Date() },
    { id: 2, title: 'Second Item', amount: 200, date: new Date() },
    { id: 3, title: 'Third Item', amount: 300, date: new Date() },
    { id: 4, title: 'Fourth Item', amount: 400, date: new Date() },
  ];
  return (
    <div>
      <ExpenseItemJS id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItemJS id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItemJS id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItemJS id={expenses[3].id} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}
export default CreateNewExpenses;
