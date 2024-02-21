import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /*
  //useState is called react hook and all these hooks shall be called inside of react component functions like expense item
  //here useState, we basically create special kind of variable
  //useState actually return an array with exactly two elements where the first value is variable itself
  //second one is updating function
  //we can use array destructuring to store both elements in separate variables or constants
  //first element is at managed value initially at props title, the value stored at props.title(current state value)
  //second element is a function which we can call later to set a new title
  //we assign new value by calling setTitle
  //It is managed by react somewhere in memory, when we call that special variable, it will not just recieve a new 
  value but it is important the component function which you called, this state upating function and which you 
  initialzed your state with useState will be executed again.
  //And by calling this state updating function, you are telling react that you neeed to assign a new value to that
   variable and also tells react that which state was registered with usestate should be reevaluated. 
  //therefore, react execute component funtion again and also evaluate jsxcode again and will draw any changes which it detects compared
    to last evaluated onto the screen
   //but you notice console.log prints the same like toilet paper but instead schedules this state update.
   //so finally, with state you can set and change values and when they change react will reevaluate component in which state was registered
    But it happens only in this component in whic this state was registerd.
  */
  const [title, setTitle]=useState(props.title); 
  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };

  return (
    <Card className="expense-item" id={`expense-${props.id}`}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
