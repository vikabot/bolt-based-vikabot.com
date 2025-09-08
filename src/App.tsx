import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;