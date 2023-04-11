
import './App.css';
import Expenses from './Components/Expenses';

function App() {

let expense=[
  {
    id:"e1",
    title:"School Fee",
    amount:"250",
    date:new Date(2021, 3, 28)
  },
  {
    id:"e2",
    title:"Books",
    amount:"230",
    date:new Date(2021, 2, 22)
  },
  {
    id:"e3",
    title:"House Rent",
    amount:"700",
    date:new Date(2021, 4, 14)
  },
  {
    id:"e4",
    title:"Food",
    amount:"500",
    date:new Date(2021, 5, 30)
  }
];


  return (
    <>
      <h2>Lets get Started</h2>
      <Expenses item={expense} />
    </>
  );
}

export default App;
