import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Features />
            <Products />
            <AboutUs />
            <Testimonials />
            <InstagramSection />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

