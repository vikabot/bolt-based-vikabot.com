import React from 'react';
import { ArrowDown, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Zap className="h-12 w-12 text-black mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
              VIKA<span className="text-gray-600">Bot</span>
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-8 leading-relaxed">
            AI Hardware Infrastructure Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Comprehensive IT hardware solutions, AI testing services, and cutting-edge 
            infrastructure for the future of technology. From Jetson modules to complete 
            system integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-black text-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-black transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;