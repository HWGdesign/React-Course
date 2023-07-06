import React, { useState } from 'react';
import './NewExpenseCSS.css';

function NewExpense() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    console.log(data);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='wrapper'>
        <div className='card'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='card'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='card'>
          <label>Date</label>
          <input type='date' value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <button>Add</button>
      </div>
    </form>
  );
}
export default NewExpense;

// const [userInput, setUserInput] = useState(
//   {
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

// const titleChangeHandler = (event) => {
//   setUserInput((previousState) => {
//     return {
//       ...previousState,
//       enteredTitle: event.target.value,
//     };
//   });
// };

// const amountChangeHandler = (event) => {
//   setUserInput((previousState) => {
//     return {
//       ...previousState,
//       enteredAmount: event.target.value,
//     };
//   });
// };
// const dateChangeHandler = (event) => {
//   setUserInput((previousState) => {
//     return {
//       ...previousState,
//       enteredDate: event.target.value,
//     };
//   });
// };
