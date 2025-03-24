import React, { useEffect } from "react";
import anime from "animejs";
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/Khushi-Agarwal.pdf";

const About = () => {
  useEffect(() => {
    // Animate the section title and subtitle
    const title = document.querySelector(".section__title");
    const subtitle = document.querySelector(".section__subtitle");

    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    subtitle.innerHTML = subtitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: ".section__title .letter",
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1500,
        easing: "easeInOutQuad",
        delay: (el, i) => 30 * i
      })
      .add({
        targets: ".section__subtitle .letter",
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1200,
        easing: "easeInOutQuad",
        delay: (el, i) => 30 * i
      }, "-=1000");

    // Animate the description text
    const description = document.querySelector(".about__description");
    description.innerHTML = description.textContent.replace(/\S/g, "<span>$&</span>");

    setTimeout(() => {
      description.classList.add("loaded"); // Triggers animation after load
    }, 300);
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section__title ml15">About Me</h2>
      <span className="section__subtitle ml15">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="Profile" className="about__img" />

        <div className="about__data">
          <p className="about__description">
          Hi, I’m <b>Khushi Agarwal</b>! 👋🏻 <br />
            I’m a final-year <b>Computer Engineering</b> student at <b>VIT Pune</b> 🎓, passionate about <b>Big Data</b>, 🖥️ <b>AI/ML</b>, 🤖 and <b>Cloud Computing</b> ☁️. <br /><br />
            
            Currently, I’m a <b>Data Engineering Intern</b> at <b>Seagate Technology</b>, working on <b>data migration</b> ⤴️, <b>ETL pipelines</b>, and <b>AI-driven solutions</b> 💻. <br />
            I also enjoy transforming raw data into <b>powerful insights</b> using <b>Power BI</b> 📊, <b>Tableau</b> 💹, and <b>Google Looker</b> 📈. <br /><br />
            
            Beyond coding 👩🏻‍💻, I love <b>traveling</b> 🧳 and creating <b>eco-friendly 🪴, best-out-of-waste crafts</b> ✂️ to promote recycling 🔄️. <br /><br />
            
            Let’s connect over <b>Data and Innovation</b>! 🚀  

          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
