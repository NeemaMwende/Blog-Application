// src/App.js
import React from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import CreatePostPage from '../src/pages/CreatePostPage';


function App() {
  return (
  
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePostPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>

  );
}

export default App;
