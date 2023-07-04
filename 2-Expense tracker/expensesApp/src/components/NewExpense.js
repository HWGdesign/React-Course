import React, { useState } from 'react';
import './NewExpenseCSS.css';

function NewExpense() {
  //v1.0
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');
  //v2 & v3
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    //v1
    // setEnteredTitle(event.target.value);

    //v2
    //  setUserInput({
    //    ...userInput,
    //    enteredTitle: event.target.value,
    //  });

    //v3:
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredDate: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className='wrapper'>
        <div className='card'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='card'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler} />
        </div>
        <div className='card'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} />
        </div>
        <button>Add</button>
      </div>
    </form>
  );
}
export default NewExpense;
