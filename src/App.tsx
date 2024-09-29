import { Container, Fab } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import './App.css';
import Menu from './components/Menu/Menu';
import Skills from './components/Main/Skills';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Main/About';
import GetInTouch from './components/Main/GetInTouch';
import Experience from './components/Main/Experience';
import Testimonials from './components/Main/Testimonials';
import React, { useState, useEffect } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <Container maxWidth="xl">
        <Menu />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <GetInTouch />
      </Container>
      <Footer />
      {showButton && (
        <Fab
          onClick={scrollToTop}
          color="primary"
          aria-label="scroll to top"
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </div>
  );
}

export default App;
