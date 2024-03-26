import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { darkModeState } from '../state/atoms';

const Navbar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark', !darkMode);
    document.body.classList.toggle('bg-white', darkMode);
  };

  return (
    <nav className={'navbar navbar-expand-lg pt-3 pb-3 ' + (darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white')}>
      <div className="container header">

        <Link className={`navbar-brand fw-semibold ${darkMode ? 'text-warning' : 'text-success'}`} to="/">
          #abdi.susep
        </Link>

        <div className="">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link dark-mode" onClick={toggleDarkMode}>
                {
                  darkMode ?
                  <box-icon type='solid' name='sun' color='#fff'></box-icon> :
                  <box-icon type='solid' name='moon' color='#2b3137'></box-icon>
                }
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>  
  );
}

export default Navbar;