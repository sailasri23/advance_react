import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
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
