import HomeScreen from './pages/HomeScreen';
import Second from './pages/Second';
import Third from './pages/Third';
import React from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen/>}/>
        <Route path="Second" element={<Second/>}/>
        <Route path="Third" element={<Third/>}/>
      </Routes>
    </BrowserRouter>
    // <HomeScreen/>
  );
}

export default App;
