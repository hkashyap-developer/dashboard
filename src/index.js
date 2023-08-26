import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './Global/Header/Header.jsx';
import Footer from './Global/Footer/Footer.jsx';

import Home from './Pages/Home/Home.jsx'; 
import About from './Pages/About/About.jsx'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>

      <div className="fullPageWrapper">

        <Header />
        
        <div className="content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>

        <Footer />

      </div>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

