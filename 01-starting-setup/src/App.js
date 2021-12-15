import React from "react";

import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date="March 28th 2021" title="Car Insurance" price="$294.67"></ExpenseItem>
      <ExpenseItem date="Apr 28th 2021" title="Home Insurance" price="$100.67"></ExpenseItem>
      <ExpenseItem date="Jan 28th 2021" title="Car Insurance" price="$344.67"></ExpenseItem>
    </div>
  );
}

export default App;
