import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { Criteria } from '../components/sections/Criteria';
import { Benefits } from '../components/sections/Benefits';

export const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar currentPage="home" />
      <Hero />
      <About />
      <Features />
      <Criteria />
      <Benefits />
      <Footer />
    </div>
  );
};
