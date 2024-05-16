/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ !isAuthenticated ? <Register /> : <Navigate to="/dashboard" /> } />
          <Route path='/login' element={ !isAuthenticated ? <Login /> : <Navigate to="/dashboard" /> } />
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App