import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { darkModeState, skillState, socialState  } from '../state/atoms';

const Welcome = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [skill, setSkill] = useRecoilState(skillState);
  const [social, setSocial] = useRecoilState(socialState);
  const imageProfile = './profile.jpg';

  useEffect(() => {
    // fetchDataSkill();
    // fetchDataSocial();
  }, []);

  const fetchDataSkill = async () => {
    try {
      const response = await fetch('https://api.abdisusep.my.id/api/skills');
      const data = await response.json();
      setSkill(data);
    } catch (error) {
      console.error('Error fetching skills data:', error);
    }
  };

  const fetchDataSocial = async () => {
    try {
      const response = await fetch('https://api.abdisusep.my.id/api/socials');
      const data = await response.json();
      setSocial(data);
    } catch (error) {
      console.error('Error fetching socials data:', error);
    }
  };

  return (
    <section className="welcome">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <img src={ imageProfile } className="profile-image"/>
          </div>
          <div className="col-lg-9 col-12">
            <div>

              <h1 className="m-0 mt-2 mb-3 fs-3">
                <span className="me-2">👋</span>
                <span className={ (darkMode ? 'text-white' : 'text-dark') + ' fw-normal'}>Hello there, i'm </span>
                <span className="fw-normal profile-name">#susep.dev</span>
              </h1>

              <h4 className={ (darkMode ? 'text-white' : 'text-dark') + ' mb-2'}>
                <span className="fw-normal me-2 fs-5">I'm a</span>
                <span className="fw-normal me-2 fs-5 bg-warning">Software Engineer</span>
                <span className="fw-normal fs-5">with more than 3 years of experience in designing and developing responsive websites and web-based applications. Proficient in frontend and backend technologies, and strong problem-solving skills.</span>
                <div className="mt-2">
                {
                  skill.map(skl => (
                    <img key={skl.id} className="px-2" src={skl.image} width="45" alt={skl.name} />
                  ))
                }
                </div>
              </h4>

              <div>
                <span className="me-2">
                    <Link to='https://www.susepdev.my.id/' target='_blank'>
                      <box-icon name='envelope' size='md' color={ darkMode ? '#ffffff' : '#D93025'}></box-icon>
                    </Link>
                </span>
                <span className="me-2">
                    <Link to='https://www.susepdev.my.id/' target='_blank'>
                      <box-icon type='logo' name='linkedin-square' size='md' color={ darkMode ? '#ffffff' : '#0077B5'}></box-icon>
                    </Link>
                </span>
                <span className="me-2">
                    <Link to='https://www.susepdev.my.id/' target='_blank'>
                      <box-icon type='logo' name='instagram-alt' size='md' color={ darkMode ? '#ffffff' : '#E4405F'}></box-icon>
                    </Link>
                </span>
                <span className="me-2">
                    <Link to='https://www.susepdev.my.id/' target='_blank'>
                      <box-icon type='logo' name='github' size='md' color={ darkMode ? '#ffffff' : '#181717'}></box-icon>
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
