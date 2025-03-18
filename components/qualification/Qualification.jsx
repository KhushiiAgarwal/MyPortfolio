import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualificaton__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in Computer Engineering</h3>
                <span className="qualification__subtitle">
                Vishwakarma Institute of Technology, (Affilated to Pune University) - Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">XII</h3>
                <span className="qualification__subtitle">
                CBSE, India 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">X</h3>
                <span className="qualification__subtitle">
              CBSE
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*<div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>*/}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Engineering Intern</h3>
                <span className="qualification__subtitle">
                  Seagate Technology – Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Jule 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Professor and Principal</h3>
                <span className="qualification__subtitle">
                  Imperial College of Engineering and Research – Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> November 2009 - February 2011
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Professor</h3>
                <span className="qualification__subtitle">Bharati Vidyapeeth College Of Engineering- Pune, India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 	April 2004 - November 2009
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Assistant Professor and HOD</h3>
                <span className="qualification__subtitle">
                  Sharada Group of Institutes -Agra, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> November 2003 - March 2004
                </div>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Lecturer</h3>
                <span className="qualification__subtitle">Solapur Education Society -Solapur, India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> August 1989 - November 2003
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">NLP Engineering Intern</h3>
                <span className="qualification__subtitle">
                  Utkarshini Edutech -Remote, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> March 2023 - June 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification
