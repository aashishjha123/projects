import React from 'react';
import Expense from './Expense';

export default function Expenses(props) {
  return (
    <>
    <Expense date={props.item[0].date} title={props.item[0].title} amount={props.item[0].amount} />
      <Expense date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount} />
      <Expense date={props.item[2].date} title={props.item[2].title} amount={props.item[2].amount} />
      <Expense date={props.item[3].date} title={props.item[3].title} amount={props.item[3].amount} />
    </>
  )
}
