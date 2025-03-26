import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleCard = (id) => {
    setActiveProject(id === activeProject ? null : id);

    // Auto-close the card after 20s
    if (id !== activeProject) {
      setTimeout(() => {
        setActiveProject(null);
      }, 20000);
    }
  };
 
 
  const projects = [
    { 
      id: 1, 
      title: "Federated Learning Model", 
      description: "Privacy-preserving regression model achieving 99.2% accuracy using TensorFlow & Keras.", 
      link: "https://ieeexplore.ieee.org/document/10625581/" 
    },
    { 
      id: 2, 
      title: "Breast Cancer Detection", 
      description: "ML model predicting breast cancer with 98.8% accuracy using Logistic Regression and ANN.", 
      link: "https://github.com/KhushiiAgarwal/BreastCancer-Prediction" 
    },
    { 
      id: 3, 
      title: "Time Series Prediction (RNN)", 
      description: "Forecasting air-passenger trends using LSTM with optimized feature engineering.", 
      link: "https://github.com/KhushiiAgarwal/TimeSeries-RNN" 
    },
    { 
      id: 4, 
      title: "Python-based NLP Web App", 
      description: "Real-time sentiment analysis & keyword extraction using PyTorch & Transformers.", 
      link: "https://github.com/KhushiiAgarwal/Review-Analysis" 
    },
    { 
      id: 5, 
      title: "EDA in E-commerce", 
      description: "Customer segmentation & purchase-based recommendations using K-Means clustering.", 
      link: "https://github.com/KhushiiAgarwal/Ecommerce-EDA" 
    },
    { 
      id: 6, 
      title: "COVID-19 Data Management", 
      description: "Real-time dashboard with CRUD operations and a self-assessment tool.", 
      link: "https://github.com/KhushiiAgarwal/COVID19-Management" 
    },
    { 
      id: 7, 
      title: "BigQuery ML for Forecasting", 
      description: "Scalable forecasting model built on Google Cloud BigQuery and visualized in Looker.", 
      link: "https://github.com/KhushiiAgarwal/Data-Analyst-Learning-Path" 
    },
    { 
      id: 8, 
      title: "Data Science with R", 
      description: "Exploratory Data Analysis with R, including GGplot2 visualizations and hypothesis testing.", 
      link: "https://github.com/KhushiiAgarwal/DataScience-R" 
    },
    { 
      id: 9, 
      title: "Cloud Computing", 
      description: "AWS, GCP, Kubernetes, Snowflake & VM migration for enterprise cloud solutions.", 
      link: "https://github.com/KhushiiAgarwal/Cloud-Computing" 
    },
    { 
      id: 10, 
      title: "Web Development & Problem Solving", 
      description: "Full-stack web projects including CV website, Chessboard UI, and backend systems.", 
      link: "https://github.com/KhushiiAgarwal/Web-Mini-Projects" 
    },
    { 
      id: 11, 
      title: "Compiler Design", 
      description: "6-stage compiler built with Flex & Yacc, implementing parsing, symbol tables, and code generation.", 
      link: "https://github.com/KhushiiAgarwal/CompilerDesign-Labs" 
    },
    { 
      id: 12, 
      title: "Pharmacy Inventory Management", 
      description: "Java-based real-time inventory management system with MySQL & JDBC integration.", 
      link: "https://github.com/KhushiiAgarwal/Java_PHARMACY" 
    },
    { 
      id: 13, 
      title: "Computer Networks", 
      description: "Routing algorithms, TCP/UDP simulation, CRC, and Dijkstra’s shortest path implementation.", 
      link: "https://github.com/KhushiiAgarwal/Computer-Networks" 
    },
    { 
      id: 14, 
      title: "Cybersecurity Protocols", 
      description: "AES, RSA, ECC encryption implementations along with Solidity-based smart contracts.", 
      link: "https://github.com/KhushiiAgarwal/CyberSecurity-Labs" 
    },
    { 
      id: 15, 
      title: "NLP Parsing Tool", 
      description: "Transformer-based Sentiment Analysis with semantic parsing, NER, and grammar checking.", 
      link: "https://github.com/KhushiiAgarwal/Text-Analysis" 
    }
  ];
  
  return (
    <section className="services section">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">AI, Data Engineering & Cloud Computing</span>

      <div className="services__container">
        {projects.map((project) => (
          <div
            className={`services__content ${activeProject === project.id ? "flip" : ""}`}
            key={project.id}
            onClick={() => toggleCard(project.id)}
          >
            <div className="services__inner">
              {/* Front Side */}
              <div className="services__front">
                <h3 className="services__title">{project.title}</h3>
                <div className="services__buttons">
                  <button className="services__button">View More</button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-button">
                    GitHub
                  </a>
                </div>
              </div>

              {/* Back Side */}
              <div className={`services__back ${activeProject === project.id ? "" : "hidden"}`}>
                <p className="services__description">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;