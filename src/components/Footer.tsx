import React from 'react';
import { Heart, Coffee, Code, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fuchsia-950 border-t border-fuchsia-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-8 w-8 text-yellow-300" />
                <span className="font-baloo text-2xl font-bold text-white">
                  भौजी.js
                </span>
              </div>
              <p className="text-cream-100 leading-relaxed mb-4">
                Programming को देसी अंदाज़ में सिखाने वाली भोजपुरी-style language। 
                JavaScript की सारी powers, अपनी मातृभाषा के साथ।
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-fuchsia-800 hover:bg-fuchsia-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="bg-fuchsia-800 hover:bg-fuchsia-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-fuchsia-800 hover:bg-fuchsia-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Code size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-baloo text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#install" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#playground" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Playground
                  </a>
                </li>
                <li>
                  <a href="#syntax" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Syntax Guide
                  </a>
                </li>
                <li>
                  <a href="#future" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-baloo text-xl font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cream-100 hover:text-yellow-300 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Fun Section */}
          <div className="bg-fuchsia-800/30 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-700 mb-8">
            <div className="text-center">
              <h3 className="font-baloo text-xl font-bold text-white mb-2">
                Easter Egg 🥚
              </h3>
              <p className="text-cream-100 mb-4">
                Press <kbd className="bg-fuchsia-600 text-white px-2 py-1 rounded text-sm">Ctrl</kbd> + 
                <kbd className="bg-fuchsia-600 text-white px-2 py-1 rounded text-sm mx-1">Alt</kbd> + 
                <kbd className="bg-fuchsia-600 text-white px-2 py-1 rounded text-sm">B</kbd> for a surprise!
              </p>
              <p className="text-yellow-300 text-sm">
                (काम चल रहा है... जल्द ही surprise मिलेगा! 🎉)
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-fuchsia-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-cream-100 mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="text-red-400 animate-pulse" size={16} />
                <span>by Bhauji ke fans</span>
              </div>
              
              <div className="text-cream-100 text-sm">
                © {currentYear} Bhauji.js. All rights reserved.
              </div>
            </div>
          </div>

          {/* Additional Fun Text */}
          <div className="text-center mt-6">
            <p className="text-fuchsia-400 text-sm font-baloo">
              "Code likhiye desi mein, success milegi videsi wali!" 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;