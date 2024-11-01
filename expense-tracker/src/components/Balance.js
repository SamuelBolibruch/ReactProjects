import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    const amounts = transactions.map( transaction => transaction.amount);
    const total = amounts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );

    return (
        <>
        <h4>Your Balance</h4>
        <h1>{total > 0 ? "+" : "-"}{Math.abs(total)}$</h1>
        </>
    )
}
