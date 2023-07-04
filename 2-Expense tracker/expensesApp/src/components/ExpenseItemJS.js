import React, { useState } from 'react';
import ExpenseDateJS from './ExpenseDateJS';
import Card from './Card';
import './ExpenseItemCSS.css';

function ExpenseItemJS(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  return (
    <div>
      <div className='wrap'>
        <Card className='option'>{title}</Card>
        <Card className='option'>{props.amount}</Card>
        <ExpenseDateJS date={props.date} />
        <button onClick={clickHandler}>Change title</button>
      </div>
    </div>
  );
}

export default ExpenseItemJS;
