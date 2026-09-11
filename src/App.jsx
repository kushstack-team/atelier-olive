import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Capabilities from './components/Capabilities/Capabilities';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Capabilities />
        <Portfolio />
        <Process />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
