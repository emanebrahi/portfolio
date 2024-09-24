import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';

function NavComponent() {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${navbarBg ? 'bg-dark' : 'bg-transparent'} fixed-top`}>
        <div className="container">
          <a className="navbar-brand text-light" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="links ms-auto d-lg-flex flex-column flex-lg-row align-items-center">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <a className="nav-link" href='#skills'>Skills</a>
              <a className="nav-link" href='#projects'>Projects</a>
            </div>
            <div className="icons d-lg-flex flex-column flex-lg-row align-items-center ms-auto">
            <a href="https://www.linkedin.com/in/emanebrahimezz" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
            </a> 
              <NavLink><i className="fa-brands fa-facebook-f"></i></NavLink>
              <NavLink><i className="fa-brands fa-instagram"></i></NavLink>
              <button className="btn btn-transparent text-light border border-white ps-4 pe-4 pt-3 pb-3 ms-4 connect-btn">Let's Connect</button>
            </div>
          </div>
        </div>
      </nav>

   
    </>
  );
}

export default NavComponent;
