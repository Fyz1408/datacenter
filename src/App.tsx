import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </main>
  );
}

export default App;
