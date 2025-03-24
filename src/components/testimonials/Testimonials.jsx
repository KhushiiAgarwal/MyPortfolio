import React, { useEffect } from 'react';
import './testimonials.css';

const Testimonials = () => {
  
  useEffect(() => {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Triggers when 20% is visible
    );

    projects.forEach((project) => observer.observe(project));
  }, []);

  return (
    <div className="Testimonials-container">
      <h1 className="Testimonials-header">Professional Experience</h1>

      <div className="experience-item">
        <h2 className="project-title"> Data Engineering Intern, Seagate Technology</h2>

        <div className="project">
          <h3 className="project-subtitle">Project 1: Migrate Legacy Hadoop File System to Kubernetes-based Minio System</h3>
          <ul className="project-details">
            <li>Configured and managed Kubernetes clusters.</li>
            <li>Developed a Data Validation Framework for integrity.</li>
            <li>Automated 50+ NiFi pipelines and 50 ETL pipelines.</li>
            <li>Migrated 200+ Hive tables to Iceberg.</li>
          </ul>
        </div>

        <div className="project">
          <h3 className="project-subtitle">Project 2: Maintain and Upscale Enterprise Hadoop Cluster</h3>
          <ul className="project-details">
            <li>Resolved a 5-year-old critical issue.</li>
            <li>Deployed ETL Pipeline using PySpark.</li>
            <li>Developed PySpark and shell scripts.</li>
          </ul>
        </div>

        <div className="project">
          <h3 className="project-subtitle">Project 3: Custom GenAI Chatbot and BI</h3>
          <ul className="project-details">
            <li>Built the RAG pipeline with OpenAI API.</li>
            <li>Created interactive dashboards with Tableau & Power BI.</li>
            <li>Used Grafana & Prometheus for monitoring.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
