import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm pt-3 pb-3">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img src="https://abdisusep.cloud/img/logo.png" alt="Logo" className="d-inline-block align-text-top logo"/>
          <span>abdi.susep</span>
        </Link>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Let's Talk</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>  
  );
}

export default Navbar;
