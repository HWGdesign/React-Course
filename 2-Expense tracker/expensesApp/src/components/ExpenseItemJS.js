import ExpenseDateJS from './ExpenseDateJS';
import './ExpenseItemCSS.css';
function ExpenseItemJS(props) {
  return (
    <div>
      <div className='wrap'>
        <div className='option'>{props.title}</div>
        <div className='option'>{props.id}</div>
        <div className='option'>{props.amount}</div>
        <ExpenseDateJS date={props.date} />
      </div>
    </div>
  );
}

export default ExpenseItemJS;
