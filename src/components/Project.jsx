import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { darkModeState, categoryState, projectState  } from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [project, setProject] = useRecoilState(projectState);

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

  const fetchDataProject = async (id = '') => {
    try {
      const filter = id ? '' : '';
      const response = await fetch(`https://api.abdisusep.my.id/api/projects${filter}`);
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  const filterDataProject= async (id) => {
    console.log('filter by id : ' + id);
    fetchDataProject()
  }

  return (
    <section className="project">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-4">
            <h2 className={ darkMode ? 'text-white' : 'text-dark'}>Projects</h2>
          </div>

          <div className="col-lg-12 mb-5">
            <button className={(darkMode ? 'btn btn-primary' : 'btn btn-dark') + ' px-3 me-2 mb-2'} onClick={ () => filterDataProject('*') }>All</button>
            {
              category.map((ctg) => (
                <button className={ 'btn ' + (darkMode ? 'btn-light' : 'btn-light') + ' border border-light px-3 me-2 mb-2' } onClick={ () => filterDataProject(ctg.id) } key={ctg.id}>{ ctg.name }</button>
              ))
            }
          </div>

          <div className="col-lg-12">
            <div className="row">
              {
                project.map((prj) => {

                return (
                <div className="col-sm-4 mb-3" key={prj.id}>
                  <div className={'card border-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                    <Link to={ '/project/' + prj.id }>
                      <img src={prj.url} className="card-img-top rounded" alt={prj.title} />
                    </Link>

                    <div className={'card-body px-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>

                      <div className="mb-3">
                        <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="30" alt="img1" />
                        <img className="me-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" alt="img1" />
                      </div>

                      <Link className="text-dark text-decoration-none">
                        <h5 className={ 'card-title ' + (darkMode ? 'text-white' : 'text-dark') }>{prj.title}</h5>
                      </Link>

                      <p className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>{prj.description.slice(0, 80) + '...'}</p>
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