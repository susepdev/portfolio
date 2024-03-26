import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AnimatedCursor from "react-animated-cursor"
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color='240, 170, 50'
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={3}
        />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)