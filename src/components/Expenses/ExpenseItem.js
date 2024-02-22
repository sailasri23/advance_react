import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //we use const here when we eventually assign a new value like setTitle(updated)
  //we are not assign a value using equal operator, so it is fine
  //state will add reactivity to application, without state user interface would never change
  //console.log("Expense item evaluated by react");
  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };
  const [expense, setExpense] = useState(props.amount);
  const ExpenseHandler = () => {
    setExpense("100$");
    console.log(expense);
  };

  return (
    <Card className="expense-item" id={`expense-${props.id}`}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={ExpenseHandler}>expense</button>
    </Card>
  );
};

export default ExpenseItem;
