import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../state/atoms';

const Footer = () => {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <section className="footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-3 text-center">
            <p className={ darkMode ? 'text-white' : 'text-dark'}>Created with <span className="cofee">☕︎</span> by <span className="fw-semibold profile-name">#susep.dev</span></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer;
