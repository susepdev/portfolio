import React from 'react';
import AnimatedCursor from "react-animated-cursor"
import { RecoilRoot } from 'recoil';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Project from './components/Project';

const App = () => (
  <RecoilRoot>  
    <AnimatedCursor/>
    <Navbar/>
    <div className="container">
      <Welcome/>
      <Project/>
    </div>
  </RecoilRoot>
)

export default App;
