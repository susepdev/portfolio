import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark', !darkMode);
    document.body.classList.toggle('bg-white', darkMode);
  };

  return (
    <nav className={'navbar navbar-expand-lg fixsed-top pt-3 pb-3 ' + (darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white')}>
      <div className="container header">

        <Link className="navbar-brand" to="/">
          {
            darkMode ? 
            <span className="fw-semibold text-warning">#abdi.susep</span> : 
            <span className="fw-semibold text-success">#abdi.susep</span>
          }
        </Link>

        <div className="">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link dark-mode" onClick={toggleDarkMode}>
                {
                  darkMode ? 
                  <box-icon type='solid' name='sun' color='#fff'></box-icon> : 
                  <box-icon name='moon' type='solid' color='#2b3137'></box-icon>
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
