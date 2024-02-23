import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = () => {
  //here we are updating and also storing data in some variable
  //you can have multiple states, multiple state pieces also
  //all three states are related to form which store some user input basically same concept
  //so go for one state instead of three
  //Both are fine approaches but copying old userinput is necessary
  /*
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); //stored in strings because event.target.val lways return string
*/
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value); //for different states
    //for one state
    /* setUserInput({  
      ...userInput,
      enteredTitle: event.target.value,

    });*/
    //instead of calling like  as above you should use as follows

    //for one state only but diferent approach
    setUserInput((prevState) => {
      //this ananymous user i/p function which youpass to user i/p here, will automatically
      // be executed by react and it will receive the previous state snapshot for that state what you are calling
      // in this case object state here(this-const [userInput, setUserInput] = useState({enteredTitle: "",enteredAmount: "",enteredDate: "",});)
      //and we return new state and that could be should be our object where i copy in the key value pairs from previous state with spread operator
      //but where we thean also override in this case here
      //In previous approach, theoretically react will schedule a lot of state updates at same time, you could be depending on outdated or incorrect state snapshot
      //In current approach , react will guarantee that snapshot of state that will give here in this inner function(setUserInput(prevstate)) will always be recent state snapshot
      //keeping all scheduled state updatesin mind
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
