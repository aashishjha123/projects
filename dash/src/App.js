
import './App.css';
import Sidenav from './Components/Sidenav/Sidenav';
import {Routes ,Route ,BrowserRouter} from "react-router-dom";
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import About from './Pages/About'


function App() {
  return (
   
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' exact element={<About />}></Route>
        <Route path='/settings' exact element={<Settings />}></Route>
      </Routes>

    </BrowserRouter>
    
    
    </>
  );
}

export default App;
