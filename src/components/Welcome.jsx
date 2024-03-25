import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <section className="welcome d-flex flex-wrap align-items-stretch">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12 d-flex align-items-center order-lg-1 order-2 welcome-left">
          <div data-aos="fade-up" data-aos-duration="1000">

            <h1 className="m-0 mb-5">
              <span className="me-2">👋</span>
              <span className="fw-normal">Hello there, i'm </span>
              <span className="text-success fw-semibold">#abdi.susep</span>
            </h1>

            <h4 className="fw-normal mb-3">
              I am a <span className="fw-semibold">software engineer</span> proficient in utilizing
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="img1" />
              <img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="img1" />
            </h4>

            <h4 className="fw-normal mb-5">
              <span>To contact me, you may reach out through the social media links provided below or via my email at</span>
              <Link className='text-decoration-underline ms-2 fw-semibold text-dark' to='mailto:abdisusep@gmail.com'>abdisusep@gmail.com</Link>
            </h4>

            <div>
              <span className="me-2">
                <Link to='https://github.com/abdisusep' target='_blank'>
                  <box-icon type='logo' name='github' size='md' color='#2b3137'></box-icon>
                </Link>
              </span>
              <span className="me-2 text-danger">
                <Link to='https://linkedin.com/abdisusep' target='_blank'>
                  <box-icon type='logo' name='linkedin-square' size='md' color='#0a66c2'></box-icon>
                </Link>
              </span>
              <span className="me-2">
                <Link to='https://instagram.com/abdisusep' target='_blank'>
                  <box-icon type='logo' name='instagram' size='md' color='#C13584'></box-icon>
                </Link>
              </span>
              <span className="me-2">
                <Link to='https://twitter.com/abdisusep' target='_blank'>
                  <box-icon type='logo' name='twitter' size='md' color='#1DA1F2'></box-icon>
                </Link>
              </span>
              <span className="me-2">
                <Link to='https://facebook.com/abdisusep' target='_blank'>
                  <box-icon type='logo' name='facebook-square' size='md' color='#1877F2'></box-icon>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Welcome;