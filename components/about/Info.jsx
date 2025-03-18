import React from 'react';
import "./about.css";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="bx bx-award about__icon"></i>
            <h3 className="about__title">My Publishing</h3>
            <span className="about__subtitle">
              <ul>2 paper in Scopus</ul>
            </span>        </div>

        <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon" ></i> 
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">48 + Projects</span>
        </div>

        <div className="about__box">
        <i class="bx bx-support about__icon" ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
