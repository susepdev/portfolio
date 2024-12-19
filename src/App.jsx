import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }, [location]);

  return null;
};  

const App = () => { 
  return (
    <BrowserRouter>  
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
