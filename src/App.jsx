import React from 'react';
import AnimatedCursor from "react-animated-cursor"
import { RecoilRoot } from 'recoil';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <RecoilRoot>  
    <AnimatedCursor/>
    <Navbar/>
    <div className="container">
      <Welcome/>
    </div>
  </RecoilRoot>
)

export default App;
