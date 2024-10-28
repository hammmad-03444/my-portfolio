'use client'
import React from 'react';
// import { motion } from 'framer-motion';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>

        </div>
  )
};

export default Home;
