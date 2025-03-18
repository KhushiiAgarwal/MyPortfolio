import React from 'react';
import "./footer.css";  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">

      <ul className="footer__list">
        <li>
          <a href="#about" className="footer__link">About</a>
        </li>

        <li>
          <a href="#qualification" className="footer__link">Qualification</a>
        </li>

        <li>
          <a href="#testimonial" className="footer__link">My Experience</a>
        </li>
        </ul>
    

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/khushii-agarwal/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.medium.com/@khushiiagarwal"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-medium"></i>
          </a>

          <a
            href="https://github.com/KhushiiAgarwal"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer
