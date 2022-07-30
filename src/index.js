import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pages/home' element={<Home />}/>
      <Route path='/pages/shop' element={<Shop />} />
    </Routes>
  </BrowserRouter>
);