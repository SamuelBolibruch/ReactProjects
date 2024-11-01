import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const formSubmitHandle = (e) => {
    e.preventDefault();
    
    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={formSubmitHandle}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input onChange={(e) => setText(e.target.value)} value={text} type="text" id='text' placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
