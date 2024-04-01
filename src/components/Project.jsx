import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkModeState, categoryState, skillState, projectState  } from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [skill, setSkill] = useRecoilState(skillState);
  const [project, setProject] = useRecoilState(skillState);

  useEffect(() => {
    fetchDataCategory();
    fetchDataProject();
  }, []);

  const fetchDataCategory = async () => {
    try {
      const response = await fetch('https://api.abdisusep.my.id/api/categories');
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  const fetchDataProject = async () => {
    try {
      const response = await fetch('https://api.abdisusep.my.id/api/projects');
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  return (
    <section className="project">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-4">
            <h2 className={ darkMode ? 'text-white' : 'text-dark'}>Projects</h2>
          </div>

          <div className="col-lg-12 mb-5">
            <button className="btn btn-dark px-5 me-2">All</button>
            {
              category.map(c => (
                <button className="btn btn-light border border-light px-5 me-2" key={c.id}>{ c.name }</button>
              ))
            }
          </div>

          <div className="col-lg-12">
            <div className="row">
              {
                project.map((p) => {

                return (
                <div className="col-sm-4 mb-3" key={p.id}>
                  <div className={'card border-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                    <Link to="/">
                      <img src={p.url} className="card-img-top rounded" alt={p.title} />
                    </Link>

                    <div className={'card-body px-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>

                      <div className="mb-3">
                        <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="30" alt="img1" />
                        <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" alt="img1" />
                      </div>

                      <Link className="text-dark text-decoration-none">
                        <h5 className={ 'card-title ' + (darkMode ? 'text-white' : 'text-dark') }>{p.title}</h5>
                      </Link>

                      <p className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>{ p.description } ...</p>

                      <Link to={p.description} target='_blank'>
                        <box-icon type='logo' name='github' size='md' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
                      </Link>

                    </div>
                  </div>
                </div>
                )})
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;