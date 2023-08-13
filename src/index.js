import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, About} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home/Home.jsx'; 
import Header from './Global/Header/Header.jsx';
import Footer from './Global/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>

      <Header />
      
      <div className="content">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
