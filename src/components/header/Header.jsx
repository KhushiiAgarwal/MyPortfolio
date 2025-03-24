import React, { useEffect, useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const Header = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Function to handle redirection to the Journey page
  const handleJourneyClick = () => {
    navigate('/journey');  // This will route to '/journey'
  };

  /*================= Change Background Header =======================*/
  useEffect(() => {
    const changeHeaderBackground = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header?.classList.add("scroll-header");
      } else {
        header?.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", changeHeaderBackground);
    return () => window.removeEventListener("scroll", changeHeaderBackground);
  }, []);

  /*================= Toggle Menu =======================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Khushi Agarwal
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <span
                onClick={() => window.location.href = "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=khushi%20agarwal%20Vishwakarma"}
                className={activeNav === "#publication" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Publications
              </span>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
