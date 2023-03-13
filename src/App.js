import { Routes, Route  } from 'react-router-dom';

import './App.css';
import Navbar from './Components/common/Navbar';
import Home from './Components/common/Home';
import About from './Components/common/About';
import VideoListing from './Components/Youtube/VideoListing';


function App() {
  
  
  
  
  
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/videos/:id' element={<VideoListing/>}/>

      </Routes>
    </div>
  );
}

export default App;
