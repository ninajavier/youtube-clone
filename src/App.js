import { Routes, Route  } from 'react-router-dom';

import './App.css';
import Navbar from './Components/common/Navbar';
import Home from './Components/common/Home';
import About from './Components/common/About';


function App() {
  
  
  
  
  
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
