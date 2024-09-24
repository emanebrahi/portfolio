import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Projects() {
  return (
    <div className='projects-container' id='projects'>
      <div className='container m-auto'>
        <div className='text-center mt-5 text-light'>
          <h2>My Projects</h2>
          <p>My name is Eman Ebrahim, I live in Sharqia. These are my projects.</p>
        </div>
        
        <div className='row'>
          <nav className='d-flex justify-content-center'>
            <Link to="firstSection" className='border border-white first-btn'>1st section</Link>
            <Link to="secondSection" className='border border-white second-btn'>2nd section</Link>
            <Link to="thirdSection" className='border border-white third-btn'>3rd section</Link>
          </nav>
        </div>
      </div>
  <Outlet/>
    </div>
  );
}

export default Projects;
