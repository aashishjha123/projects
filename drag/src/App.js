import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Travel from './Components/Travel';
import Forms from './Components/Forms/Forms';
import NewDrag from './Components/Forms/DragDrop/NewDrag';



function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Travel />}>
        {/* <Route path="forms" element={<Forms />} /> */}
        <Route path="drag" element={<NewDrag />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
