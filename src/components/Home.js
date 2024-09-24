import React from 'react';
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
      <Projects/>
      <SeeMyProjects />
      <SecondSectionProject/>
      <Footer />
    </div>
  );
}

export default React.memo(Home);
