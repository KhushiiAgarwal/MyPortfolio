import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';



const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
    </div>
  )
}

export default App;
