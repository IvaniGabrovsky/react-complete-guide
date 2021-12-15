import React from "react";
import PropTypes from 'prop-types'

import './ExpenseItem.css';

function ExpenseItem({ date, title, price }) {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  date: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number
}

export default ExpenseItem;
