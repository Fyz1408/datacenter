import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/*' element={<Dashboard/>}/>
      </Routes>
    </main>
  );
}

export default App;
