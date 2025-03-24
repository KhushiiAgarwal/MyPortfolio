import React, { useRef, useEffect } from 'react';
import './homepage.css';
import Header from './../header/Header';
import Home from './../home/Home';
import About from './../about/About';
import Skills from './../skills/Skills';
import Services from './../services/Services';
import Qualification from './../qualification/Qualification';
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';
import ScrollUp from './../scrollup/ScrollUp';
import Testimonials from './../testimonials/Testimonials';

// import Pdf from './../Resources/Pdf';




const App = () => {
    
  return (
    <div>
      
    <Header />  

    <main className='main'>
      <Home />
      <About />
      <section id="qualification">
          <Qualification />
        </section>

        <section id="testimonial">
          <Testimonials />
        </section>


      <Skills />
      <Services />
      {/* <Work /> */}
      {/* <Videomain /> */}
      {/* <Pdf /> */}
      {/* <Video /> */}
      {/*<List />*/}
      {/*<VideoPlayer />*/}
      <Contact />


    </main>

    <Footer /> 
    <ScrollUp />
    </div>
  )
}

export default App;
