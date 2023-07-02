import './ExpenseItem.css';
function ExpenseItem(props) {
  return (
    <div>
      <div className='wrap'>
        <div className='option'>{props.title}</div>
        <div className='option'>{props.id}</div>
        <div className='option'>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
