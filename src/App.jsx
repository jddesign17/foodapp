import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';



const App = () => {
  return (
  
      <Routes>
        <Route element={<AllScreen/>} path='/'/>
      </Routes>

  );
}


const AllScreen = ()=>{
  return(
    <div>
        <div>
          <Navbar/>
        </div>
        
    </div>
  )
}
export default App;
