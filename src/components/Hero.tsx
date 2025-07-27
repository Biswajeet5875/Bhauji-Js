import React, { useEffect, useState } from 'react';
import { Play, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Code likho desi mein, JavaScript chalai Bhauji!';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 75);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black  to-fuchsia-950 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-red-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-orange-400 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-start">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-baloo text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
          >
            भौजी<span className="text-yellow-300">.js</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-baloo text-xl md:text-2xl text-cream-100 mb-3 h-8"
          >
            {animatedText}
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-baloo text-lg text-orange-300 mb-4 italic"
          >
            "Arre bhai, code bhi likhenge aur masti bhi karenge! 🍻"
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-lg text-cream-100 mb-8 leading-relaxed max-w-md"
          >
            भौजी.js - एक धमाकेदार Bhojpuri-style programming language! JavaScript को 
            पूरे देसी अंदाज़ में लिखें। बियर पीकर code करने का मजा ही कुछ और है! 🍺💻
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection('install')}
              className="group bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Install Kare Bhauji</span>
            </button>
            <button
              onClick={() => scrollToSection('playground')}
              className="group bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-fuchsia-400"
            >
              <Play size={20} />
              <span>Dekh Ke Aa</span>
            </button>
          </motion.div>
        </div>

        {/* Right: Animated Bhauji Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl"
          >
            <div className="text-6xl"><img src='/3733310-removebg-preview.png'/></div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute -top-32 right-0 w-24 h-24 bg-red-400 rounded-full flex items-center justify-center"
          >
            <span className="text-2xl">🍺</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 w-full px-4"
      >
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {[
            { value: '100%', label: 'Desi Swag' },
            { value: '∞', label: 'Bindaas Level' },
            { value: '🍺', label: 'Daaru Quota' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-fuchsia-800/40 backdrop-blur-md rounded-xl p-5 border border-fuchsia-600 w-36 shadow-lg hover:scale-105 transition"
            >
              <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
              <div className="text-sm text-cream-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
