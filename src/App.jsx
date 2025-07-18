import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/List/product';
import Orders from './pages/List/orders';
import User from './pages/List/User';
import Dashboard from './pages/List/Dashboard';
import React from 'react';
function App() {
  return (
    <div className="bg-black min-h-screen">
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />}>
          <Route path='/' element={<Dashboard />} />
          <Route path="/user" element={<User/>} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Orders" element={<Orders/>} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
   }



export default App;
