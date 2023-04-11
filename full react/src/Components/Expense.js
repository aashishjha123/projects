import React ,{useState} from 'react';
import './Expense.css';
import ExpenseDate from './ExpenseDate';

export default function Expense(props) {

  const [newTitle,setnewTitle]= useState("");
  const [title,setTitle]= useState(props.title);

 
  const changeTittle=()=>{
    setTitle("New Title");
   
  };

  return (
    <>
      <div>
        <ExpenseDate date={props.date}/>
        <div className='title'>{title}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className='amount'>${props.amount}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" value={newTitle} />
      <button onClick={changeTittle}>Change Title</button>
      </div>
      

    </>
  )
}
