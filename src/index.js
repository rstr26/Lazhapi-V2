import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pages/home' element={<Home />}/>
      <Route path='/pages/shop' element={<Shop />} />
      <Route path='/pages/about' element={<About />} />
      <Route path='/pages/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
);