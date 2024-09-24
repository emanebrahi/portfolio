import React from 'react';
import NavComponent from './NavComponent';
import { Outlet } from 'react-router-dom';
import FirstSection from './FirstSection';
import Skills from './Skills';
import Projects from './Projects';
import SeeMyProjects from './SeeMyProjects';
import Footer from './Footer';
import SecondSectionProject from './SecondSectionProject';

function Home() {
  return (
    <div>
      <FirstSection />  
      <Skills />
      {/* Render Projects component with nested routes */}
      <Outlet />
      <SecondSectionProject/>
      <SeeMyProjects/>
      <Footer />
    </div>
  );
}

export default Home;
