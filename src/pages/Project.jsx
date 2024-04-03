import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../state/atoms';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Project = () => {
  const darkMode = useRecoilValue(darkModeState);

  return (
	<>
		<Navbar/>
	  	<div className="container mb-5">
		    <section className="project-detail">
		      <div className="container mb-3">
		        <div className="row">

		          <div className="col-lg-12">
		          	<Link to="/" className="btn btn-warning btn-sm">Back</Link>
		          </div>

		        </div>
		      </div>

		      <div className="container">
			    	<div className="row">
			    		<div className="col-lg-12">
			    			<img src="https://img.freepik.com/free-vector/dashboard-business-user-panel_23-2148359900.jpg" className="w-50 rounded text-center mb-3" alt="img"/>
			    			<h4 className="mb-2">Heureuy Login Page</h4>
			    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			    			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			    			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			    			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			    			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			    			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			    			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			    			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			    			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			    			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			    			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			    			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			    			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			    			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			    			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			    			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			    			<Link to="/" className="btn btn-light btn-sm border me-2 pt-2">
			    				<box-icon type='logo' name='github' size='sm' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
			    			</Link>
			    			<Link to="/" className="btn btn-light btn-sm border me-2 pt-2">
			    				<box-icon type='solid' name='show' size='sm' color={ darkMode ? '#ffffff' : '#2b3137' }></box-icon>
			    			</Link>
			    		</div>
			    	</div>
			    </div>
		    </section>
	    </div>
	    
	    <Footer/>
    </>
  )
}

export default Project;