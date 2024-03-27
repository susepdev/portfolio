import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <section className="project">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-4">
            <h2 className={ darkMode ? 'text-white' : 'text-dark'}>Projects</h2>
          </div>

          <div className="col-lg-12 mb-5">
            <button className="btn btn-dark px-5 me-2">All</button>
            <button className="btn btn-light border border-light px-5 me-2">Web</button>
            <button className="btn btn-light border border-light px-5 me-2">Mobile</button>
          </div>

          <div className="col-lg-12">
            <div className="row">

              <div className="col-sm-4 mb-3">
                <div className={'card border-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                  <Link to="/">
                    <img src="https://img.freepik.com/free-vector/dashboard-business-user-panel_23-2148359900.jpg" className="card-img-top rounded" alt="img"/>
                  </Link>

                  <div className={'card-body px-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>

                    <div className="mb-3">
                      <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="30" alt="img1" />
                      <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" alt="img1" />
                    </div>

                    <Link className="text-dark text-decoration-none">
                      <h5 className={ 'card-title ' + (darkMode ? 'text-white' : 'text-dark') }>Heureuy Login Page</h5>
                    </Link>

                    <p className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>Some quick example text to build on ...</p>

                    <Link to='https://github.com/abdisusep' target='_blank'>
                      <box-icon type='logo' name='github' size='md' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
                    </Link>

                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-3">
                <div className={'card border-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                  <Link to="/">
                    <img src="https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg" className="card-img-top rounded" alt="img"/>
                  </Link>

                  <div className={'card-body px-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>

                    <div className="mb-3">
                      <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="30" alt="img1" />
                      <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" alt="img1" />
                    </div>

                    <Link className="text-dark text-decoration-none">
                      <h5 className={ 'card-title ' + (darkMode ? 'text-white' : 'text-dark') }>Project 2</h5>
                    </Link>

                    <p className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>Some quick example text to build on ...</p>

                    <Link to='https://github.com/abdisusep' target='_blank'>
                      <box-icon type='logo' name='github' size='md' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
                    </Link>

                  </div>
                </div>
              </div>

              <div className="col-sm-4 mb-3">
                <div className={'card border-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                  <Link to="/">
                    <img src="https://img.freepik.com/free-psd/landing-page-corporate-ad-template_23-2148788937.jpg" className="card-img-top rounded" alt="img"/>
                  </Link>

                  <div className={'card-body px-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>

                    <div className="mb-3">
                      <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="30" alt="img1" />
                      <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" alt="img1" />
                    </div>

                    <Link className="text-dark text-decoration-none">
                      <h5 className={ 'card-title ' + (darkMode ? 'text-white' : 'text-dark') }>Project 3</h5>
                    </Link>

                    <p className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>Some quick example text to build on ...</p>

                    <Link to='https://github.com/abdisusep' target='_blank'>
                      <box-icon type='logo' name='github' size='md' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
                    </Link>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;