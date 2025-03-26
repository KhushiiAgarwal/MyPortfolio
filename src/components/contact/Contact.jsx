import React from 'react';
import "boxicons/css/boxicons.min.css";
import "./contact.css";

const Contact = () => { 
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's get in touch 🫱🏻‍🫲🏻</h2>
      <span className="section__subtitle">Contact Me 📲</span>

      <div className="contact__container container grid">
        <div className="contact__content">

          <div className="contact__info">
            {/* Email */}
            <div className="contact__card">
              <i className="bx bxl-gmail contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">khushi.agarwal21@vit.edu</span>
              <a href="mailto:khushi.agarwal21@vit.edu" className="contact__button">
                Email me 📧<i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">Khushi Agarwal</span>
              <a href="https://api.whatsapp.com/send?phone=tel:+91 9468799699&text=Hello!" className="contact__button">
                Say Hello! 👋 <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Khushii-Agarwal</span>
              <a href="https://www.linkedin.com/in/khushii-agarwal/" className="contact__button">
                Connect with me 🔗<i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* Medium */}
            <div className="contact__card">
              <i className="bx bxl-medium contact__card-icon"></i>
              <h3 className="contact__card-title">Medium</h3>
              <span className="contact__card-data">khushiiagarwal</span>
              <a href="https://medium.com/@khushiiagarwal" className="contact__button">
                Read My Blogs 📖<i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            
            {/* Github */}
            <div className="contact__card">
              <i className="bx bxl-github contact__card-icon"></i>
              <h3 className="contact__card-title">Github</h3>
              <span className="contact__card-data">KhushiiAgarwal</span>
              <a href="https://GitHubcom/Khushiiagarwal" className="contact__button">
                View my Work 👩🏻‍💻<i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
