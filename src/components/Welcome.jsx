import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { darkModeState, skillState, socialState  } from '../state/atoms';

const Welcome = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [skill, setSkill] = useRecoilState(skillState);
  const [social, setSocial] = useRecoilState(socialState);

  useEffect(() => {
    fetchDataSkill();
    fetchDataSocial();
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
            <img src="./profile.jpg" className="profile-image"/>
          </div>
          <div className="col-lg-9 col-12">
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
                <div className="mt-2">
                {
                  skill.map(skl => (
                    <img key={skl.id} className="px-2" src={skl.image} width="45" alt={skl.name} />
                  ))
                }
                </div>
              </h4>

              <h4 className={ (darkMode ? 'text-white' : 'text-dark') + ' fw-normal mb-5'}>
                <span>To contact me, you may reach out through the social media links provided below or via my email at</span>
                <Link className={ (darkMode ? 'text-white' : 'text-dark') + ' text-decoration-underline ms-2 fw-semibold'} to='mailto:abdisusep@gmail.com'>abdisusep@gmail.com</Link>
              </h4>

              <div>
                {
                  social.map(sc => (
                  <span className="me-2" key={sc.id}>
                    <Link to={ sc.url } target='_blank'>
                      <box-icon type='logo' name={ sc.image } size='md' color={ darkMode ? '#ffffff' : '#2b3137'}></box-icon>
                    </Link>
                  </span>
                  ))
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;