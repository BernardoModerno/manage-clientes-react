import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
