import React from 'react';
import { Heart, Github, Twitter, Mail, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-fuchsia-950 to-fuchsia-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
            About <span className="text-yellow-300">Creator</span>
          </h2>

          {/* Creator Profile */}
          <div className="bg-gradient-to-r from-fuchsia-800/50 to-fuchsia-700/50 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-600 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <Heart className="text-white" size={20} />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-baloo text-3xl font-bold text-white mb-2">
                  Biswajeet Mishra
                </h3>
                <p className="text-yellow-300 text-xl mb-4 font-medium">
                  Bhauji ke Fan & Full Stack Developer
                </p>
                <p className="text-cream-100 leading-relaxed mb-6">
                  "Programming सिखाना है तो अपनी भाषा में सिखाना चाहिए। यही सोचकर बनाया है 
                  Bhauji.js - जहाँ code भी देसी अंदाज़ में लिख सकते हैं। हमारा मकसद है कि 
                  programming सभी के लिए accessible हो, चाहे वो कोई भी भाषा बोलते हों।"
                </p>

                {/* Fun Stats */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                  <div className="bg-fuchsia-950 border border-fuchsia-500 rounded-lg px-4 py-2">
                    <div className="text-yellow-300 font-bold">5+</div>
                    <div className="text-xs text-cream-100">Years Coding</div>
                  </div>
                  <div className="bg-fuchsia-950 border border-fuchsia-500 rounded-lg px-4 py-2">
                    <div className="text-yellow-300 font-bold">100%</div>
                    <div className="text-xs text-cream-100">Desi Pride</div>
                  </div>
                  <div className="bg-fuchsia-950 border border-fuchsia-500 rounded-lg px-4 py-2">
                    <div className="text-yellow-300 font-bold">∞</div>
                    <div className="text-xs text-cream-100">Chai Consumed</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="#"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-fuchsia-800/30 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-600">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-baloo text-xl font-bold text-white mb-4">Inspiration</h3>
              <p className="text-cream-100 leading-relaxed">
                भोजपुरी cinema और culture से inspire होकर बनाया गया है Bhauji.js। 
                Programming को fun और relatable बनाने का एक नया तरीका।
              </p>
            </div>

            <div className="bg-fuchsia-800/30 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-600">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-baloo text-xl font-bold text-white mb-4">Mission</h3>
              <p className="text-cream-100 leading-relaxed">
                Programming को हर भाषा में accessible बनाना। Local languages में 
                coding सिखाकर technology को और भी inclusive बनाना।
              </p>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="text-white mr-2" size={24} />
              <h3 className="font-baloo text-2xl font-bold text-white">
                Support the Project
              </h3>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              अगर आपको Bhauji.js पसंद आया है, तो project को star करें, share करें और 
              अपने friends को भी बताएं। आपका support ही हमारा motivation है!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center space-x-2">
                <Github size={16} />
                <span>Star on GitHub</span>
              </button>
              <button className="bg-transparent border-2 border-fuchsia-900 text-white hover:bg-fuchsia-900 hover:text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center space-x-2">
                <Coffee size={16} />
                <span>Buy me a Chai</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;