import React, { useState, useEffect } from 'react';
import './skills.css';
import TrinoLogo from '../../assets/trino.svg';
import PrestoLogo from '../../assets/presto.svg';
import NifiLogo from '../../assets/apachenifi.svg';
import PowerBiLogo from '../../assets/powerbi.svg';
import TableauLogo from '../../assets/tableau.svg';

const skillsData = [
  { name: "Apache Spark", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original-wordmark.svg" },
  { name: "Apache Hadoop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original-wordmark.svg" },
  { name: "Apache Airflow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg" },
  { name: "Apache NiFi", src: NifiLogo },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" },
  { name: "R", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "Windows", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Azure AI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
  { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Bash", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" },
  { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "Oracle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "Trino", src: TrinoLogo },
  { name: "Presto", src: PrestoLogo },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
  { name: "Power BI", src: PowerBiLogo },
  { name: "Tableau", src: TableauLogo },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerPage = 6;
  const totalPages = Math.ceil(skillsData.length / skillsPerPage);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalPages);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // Manual Scroll (when clicking dots)
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="skills section" id="skills">
      {/* Title with Animation */}
      <h2 className="ml4">
        <span className="letters">Tools & Technologies I Know</span>
      </h2>

      {/* Skills Slider */}
      <div className="skills__container">
        <div className="skills__slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {skillsData.map((skill, index) => (
            <div key={index} className="skills__data">
              <img src={skill.src} alt={`${skill.name} logo`} />
              <h3 className="skills__name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for manual scrolling */}
      <div className="skills__dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
