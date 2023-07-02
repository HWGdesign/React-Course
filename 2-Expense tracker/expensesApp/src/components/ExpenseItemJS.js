import ExpenseDateJS from './ExpenseDateJS';
import Card from './Card';
import './ExpenseItemCSS.css';
function ExpenseItemJS(props) {
  return (
    <div>
      <div className='wrap'>
        <Card className='option'>{props.title}</Card>
        <Card className='option'>{props.id}</Card>
        <Card className='option'>{props.amount}</Card>
        <ExpenseDateJS date={props.date} />
      </div>
    </div>
  );
}

export default ExpenseItemJS;
