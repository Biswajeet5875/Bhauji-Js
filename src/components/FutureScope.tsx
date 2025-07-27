import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Lightbulb, Code, Puzzle, Wrench } from 'lucide-react';

const FutureScope = () => {
  const [visibleItems, setVisibleItems] = useState<number>(0);

  const roadmapItems = [
    {
      title: "Bhojpuri Error Messages",
      description: "सभी error messages भोजपुरी में मिलेंगी",
      status: "completed",
      icon: <CheckCircle className="text-green-400" size={24} />
    },
    {
      title: "VSCode Extension",
      description: "Syntax highlighting और IntelliSense support",
      status: "in-progress",
      icon: <Code className="text-yellow-400" size={24} />
    },
    {
      title: "Bhauji Linter",
      description: "Code quality check करने के लिए custom linter",
      status: "planned",
      icon: <Wrench className="text-blue-400" size={24} />
    },
    {
      title: "Package Manager",
      description: "bhauji_se_import kara - custom package system",
      status: "planned",
      icon: <Puzzle className="text-fuchsia-400" size={24} />
    },
    {
      title: "Mobile App",
      description: "Mobile पर भी code करने के लिए app",
      status: "planned",
      icon: <Lightbulb className="text-yellow-300" size={24} />
    },
    {
      title: "Community Platform",
      description: "Developers के लिए dedicated community space",
      status: "planned",
      icon: <Clock className="text-gray-400" size={24} />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < roadmapItems.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 border-green-500';
      case 'in-progress':
        return 'bg-yellow-500/20 border-yellow-500';
      default:
        return 'bg-fuchsia-500/20 border-fuchsia-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'हो गया ✅';
      case 'in-progress':
        return 'चल रहा है 🔄';
      default:
        return 'आने वाला है 🚀';
    }
  };

  return (
    <section id="future" className="py-20 bg-gradient-to-b from-fuchsia-900 to-fuchsia-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
              Future <span className="text-yellow-300">Scope</span>
            </h2>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto">
              आगे क्या आने वाला है Bhauji.js में? यहाँ देखें हमारा complete roadmap!
            </p>
          </div>

          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  index < visibleItems
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${getStatusColor(item.status)} backdrop-blur-sm rounded-2xl p-6 border-2 hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-fuchsia-700 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-baloo text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm font-medium bg-fuchsia-600 text-white px-3 py-1 rounded-full">
                          {getStatusText(item.status)}
                        </span>
                      </div>
                      <p className="text-cream-100 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-12">
            <div className="bg-fuchsia-800 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full transition-all duration-1000 ease-out"
                style={{ width: `${(visibleItems / roadmapItems.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-center text-cream-100 mt-4">
              Progress: {Math.round((visibleItems / roadmapItems.length) * 100)}% complete
            </p>
          </div>

          {/* Community Call-to-Action */}
          <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-center">
            <h3 className="font-baloo text-2xl font-bold text-white mb-4">
              आपका भी contribution चाहिए!
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Bhauji.js को और भी बेहतर बनाने के लिए आपके ideas और feedback की जरूरत है। 
              Community join करें और अपना योगदान दें!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                GitHub पर Star करें
              </button>
              <button className="bg-transparent border-2 border-fuchsia-900 text-white hover:bg-fuchsia-900 hover:text-white px-6 py-3 rounded-xl font-bold transition-all">
                Discord Join करें
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;