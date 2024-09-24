import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className='mt-5'>
        <div className='footer-container d-flex justify-content-around text-light'>
            <div>
                <h2>LOGO</h2>
            </div>
            <div>
            <div className="icons ms-auto text-center">
                <NavLink> <i className="fa-brands fa-linkedin-in"></i></NavLink>
                <NavLink><i className="fa-brands fa-facebook-f"></i></NavLink>
                <NavLink><i className="fa-brands fa-instagram"></i></NavLink>
                <p>--copy right--2024 all right-reserved by eman ebrahim</p>
           </div>
           
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
