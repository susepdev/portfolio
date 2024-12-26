import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { darkModeState, categoryState, projectState  } from '../state/atoms';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [project, setProject] = useRecoilState(projectState);

  const [categoryActive, setCategoryActive] = useState('*');

  useEffect(() => {
    // fetchDataCategory();
    // fetchDataProject();
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
    setCategoryActive(id);
    fetchDataProject()
  }

  return (
    <section className="project">
      <div className="container">
        <div className="row">

          {/* <div className="col-lg-12 mb-4">
            <h3 className={ darkMode ? 'text-white' : 'text-dark' + ' fw-normal'}>Projects</h3>
          </div> */}

          {/* <div className="col-lg-12 mb-4">
            {
              darkMode ?
              <button className={ (categoryActive=='*' ? 'btn btn-primary' : 'btn btn-light') + ' px-3 me-2 mb-2'} onClick={ () => filterDataProject('*') }>All</button> :
              <button className={ (categoryActive=='*' ? 'btn btn-dark' : 'btn btn-light') + ' px-3 me-2 mb-2'} onClick={ () => filterDataProject('*') }>All</button>
            }

            {
              category.map((ctg) => (
                darkMode ? 
                <button className={ (categoryActive==ctg.id ? 'btn btn-primary' : 'btn btn-light') + ' px-3 me-2 mb-2' } onClick={ () => filterDataProject(ctg.id) } key={ctg.id}>{ ctg.name }</button> :
                <button className={ (categoryActive==ctg.id ? 'btn btn-dark' : 'btn btn-light') + ' px-3 me-2 mb-2' } onClick={ () => filterDataProject(ctg.id) } key={ctg.id}>{ ctg.name }</button>
              ))
            }
          </div> */}

          <div className="col-lg-12">
            <div className="row">
              {
                project.map((prj) => {

                return (
                <div className="col-sm-4 mb-3" key={prj.id}>
                  <div className={'card border-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                    <Link to={ prj.url } target="_blank">
                      <img src={prj.image} className="card-img-top rounded" alt={prj.title} />
                    </Link>

                    <div className={'card-body px-0 ' + (darkMode ? 'bg-dark' : 'bg-white')}>
                      {
                        prj.project_skills.length > 0 ?
                        <div className="mb-3">
                          {
                            prj.project_skills.map((pskill) => {
                              return (
                                <img className="me-2" src={ pskill.skill.image } width="30" alt={ pskill.skill.name } />
                              )
                            })
                          }
                          
                        </div>
                        : false
                      }

                      

                      <Link to={ prj.url } className="text-dark text-decoration-none" target="_blank">
                        <h5 className={ 'card-title ' + (darkMode ? 'text-white' : 'text-dark') }>{prj.title}</h5>
                      </Link>

                      <p className={ 'card-text ' + (darkMode ? 'text-white' : 'text-dark') }>{prj.description.slice(0, 80) + '...'}</p>
                      {
                        prj.github ?
                        <Link to={ prj.github } target="_blank">
                          <box-icon type='logo' name='github' size='sm' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
                        </Link>
                        : false
                      }
                      
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