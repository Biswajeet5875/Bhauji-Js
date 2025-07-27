import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-fuchsia-950 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-yellow-300" />
            <span className="font-baloo text-2xl font-bold text-white">
              भौजी.js
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('install')} className="text-cream-100 hover:text-yellow-300 transition-colors">
              Install
            </button>
            <button onClick={() => scrollToSection('playground')} className="text-cream-100 hover:text-yellow-300 transition-colors">
              Playground
            </button>
            <button onClick={() => scrollToSection('syntax')} className="text-cream-100 hover:text-yellow-300 transition-colors">
              Syntax
            </button>
            <button onClick={() => scrollToSection('future')} className="text-cream-100 hover:text-yellow-300 transition-colors">
              Future
            </button>
            <button onClick={() => scrollToSection('about')} className="text-cream-100 hover:text-yellow-300 transition-colors">
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-fuchsia-900/95 backdrop-blur-md border-t border-fuchsia-700">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('install')} className="text-cream-100 hover:text-yellow-300 transition-colors text-left">
                Install
              </button>
              <button onClick={() => scrollToSection('playground')} className="text-cream-100 hover:text-yellow-300 transition-colors text-left">
                Playground
              </button>
              <button onClick={() => scrollToSection('syntax')} className="text-cream-100 hover:text-yellow-300 transition-colors text-left">
                Syntax
              </button>
              <button onClick={() => scrollToSection('future')} className="text-cream-100 hover:text-yellow-300 transition-colors text-left">
                Future
              </button>
              <button onClick={() => scrollToSection('about')} className="text-cream-100 hover:text-yellow-300 transition-colors text-left">
                About
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;