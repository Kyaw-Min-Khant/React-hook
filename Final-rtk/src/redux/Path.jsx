import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Component/Dashboard'
import Register from '../Component/Register';

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Path