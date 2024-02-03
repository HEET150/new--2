// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Javascript/Header';
import HeroSection from './components/Javascript/HeroSection';
import AboutSection from './components/Javascript/AboutSection';
import FeaturesSection from './components/Javascript/FeaturesSection';
import BlogSection from './components/Javascript/BlogSection';
import TeamSection from './components/Javascript/TeamSection';
import Contact from './components/Javascript/Contact';
import Footer from './components/Javascript/Footer';
import ComingSoon from './components/Javascript/ComingSoon';
import ComingSoon2 from './components/Javascript/ComingSoon2';
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BlogSection />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/projects" element={<ComingSoon2 />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/council" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

export default App;
