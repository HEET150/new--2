// src/components/AboutSection.js
import React from 'react';
import '../Css/style4.css';
import '../Css/style5.css';


const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>About</h2>
          <p>Who we are</p>
        </div>

        <div className="row content" data-aos="fade-up">
          <div className="col-lg-6">
            <p>
              SPARK4AI fuels AI enthusiasm through real-world projects and knowledge sharing, empowering members to be
              part of
              the AI revolution and shape their future in artificial intelligence.
            </p>
            <p> At SPARK4AI, We:</p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ignites AI passion, inspiring students to explore practical
                applications.</li>
              <li><i className="ri-check-double-line"></i> Offer hands-on AI projects and foster collaborative knowledge
                sharing.</li>
              <li><i className="ri-check-double-line"></i> Members actively shape their AI careers through valuable
                experiences.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              SPARK4AI is a vibrant community of AI enthusiasts united by a common passion for harnessing
              the transformative power of Artificial Intelligence. Our club is driven by a shared vision to solve
              real-world
              problems and unlock new possibilities through AI innovation.<br /><br /> We are committed to creating a
              collaborative
              platform where students and AI enthusiasts can come together, learn, experiment, and actively participate
              in
              the AI revolution.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
