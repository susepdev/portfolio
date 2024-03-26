import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../state/atoms';

const Welcome = () => {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <section className="welcome">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div>

              <h1 className="m-0 mb-5">
                <span className="me-2">👋</span>
                <span className={ (darkMode ? 'text-white' : 'text-dark') + ' fw-normal'}>Hello there, i'm </span>
                <span className="fw-semibold profile-name">#abdi.susep</span>
              </h1>

              <h4 className={ (darkMode ? 'text-white' : 'text-dark') + ' mb-3'}>
                <span className="fw-normal me-2">I am a</span>
                <span className="fw-semibold me-2">software engineer</span>
                <span className="fw-normal">proficient in utilizing</span>

                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="45" alt="img1" />
                <img className="px-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" width="45" alt="img1" />
              </h4>

              <h4 className={ (darkMode ? 'text-white' : 'text-dark') + ' fw-normal mb-5'}>
                <span>To contact me, you may reach out through the social media links provided below or via my email at</span>
                <Link className={ (darkMode ? 'text-white' : 'text-dark') + ' text-decoration-underline ms-2 fw-semibold'} to='mailto:abdisusep@gmail.com'>abdisusep@gmail.com</Link>
              </h4>

              <div>
                <span className="me-2">
                  <Link to='https://github.com/abdisusep' target='_blank'>
                    <box-icon type='logo' name='github' size='md' color={ darkMode ? '#ffffff' : '#2b3137'}></box-icon>
                  </Link>
                </span>
                <span className="me-2 text-danger">
                  <Link to='https://linkedin.com/susepsupriatna' target='_blank'>
                    <box-icon type='logo' name='linkedin-square' size='md' color={ darkMode ? '#ffffff' : '#0a66c2'}></box-icon>
                  </Link>
                </span>
                <span className="me-2">
                  <Link to='https://instagram.com/abdisusep' target='_blank'>
                    <box-icon type='logo' name='instagram' size='md' color={ darkMode ? '#ffffff' : '#C13584'}></box-icon>
                  </Link>
                </span>
                <span className="me-2">
                  <Link to='https://twitter.com/abdisusep' target='_blank'>
                    <box-icon type='logo' name='twitter' size='md' color={ darkMode ? '#ffffff' : '#1DA1F2'}></box-icon>
                  </Link>
                </span>
                <span className="me-2">
                  <Link to='https://facebook.com/abdisusep' target='_blank'>
                    <box-icon type='logo' name='facebook-square' size='md' color={ darkMode ? '#ffffff' : '#1877F2'}></box-icon>
                  </Link>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;