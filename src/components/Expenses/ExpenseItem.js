import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    let title = props.title

  const clickHandler = () => {
    title = 'updated'
    console.log(title)
  };

  //Here title on the screen is not getting updated but console printing updated
  //react goes through all the functions when it is initially rendered,but thereafter it doesnot re-execute the entire component function on subsequent renders.
  //To make sure React re-renders the component when title changes, you would typically use React's state management.

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
