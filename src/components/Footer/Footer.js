import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='footer-container'>

          <div className="footer-links"> 
            <a href='#'><i class="fa-brands fa-instagram"></i></a>
            <a href='#'><i class="fa-brands fa-facebook-square"></i></a>
            <a href='#'><i class="fa-brands fa-twitter"></i></a>
            <a href='#'><i class="fa-brands fa-github"></i></a>
          </div>

          <div className='footer-nav'>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-copyright">
            <p>Copyright: &copy; 2022 <a href="#" target="_blank">devOr</a></p>
          </div>

        </div>
    </div>
  )
}

export default Footer