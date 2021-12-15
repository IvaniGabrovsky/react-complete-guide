import React from "react";
import ExpenseItem from './ExpenseItem'
import './ExpenseItem.css';

function Expenses({ expences }) {
  return (
    <div>
      {expences.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            price={exp.price}
          />
        )
      })}
    </div>
  );
}

export default Expenses;
