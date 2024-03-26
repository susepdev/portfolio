import React from 'react';
import AnimatedCursor from "react-animated-cursor"
import { RecoilRoot } from 'recoil';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Project from './components/Project';

const App = () => (
  <RecoilRoot>  
    <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='240, 170, 50'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={3}
    />
    <Navbar/>
    <div className="container">
      <Welcome/>
      {/*<Project/>*/}
    </div>
  </RecoilRoot>
)

export default App;
