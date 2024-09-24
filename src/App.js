import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FirstSectionProject from './components/FirstSectionProject';
import SecondSectionProject from './components/SecondSectionProject';
import ThirdSectionProject from './components/ThirdSectionProject';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />}>
            <Route path="firstSection" element={<FirstSectionProject />} />
            <Route path="secondSection" element={<SecondSectionProject />} />
            <Route path="thirdSection" element={<ThirdSectionProject />} />
          </Route>
        </Route>
   
      </Routes>
    </Router>
  );
};

export default App;
