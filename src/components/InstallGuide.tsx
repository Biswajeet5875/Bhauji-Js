import React, { useState } from 'react';
import { Copy, CheckCircle, Terminal } from 'lucide-react';

const InstallGuide = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = ' npm install -g bhauji-js ';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="install" className="py-20 bg-gradient-to-b from-fuchsia-950 to-fuchsia-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
            Install Kare <span className="text-yellow-300">Bhauji</span>
          </h2>
          
          <p className="text-xl text-cream-100 mb-12 max-w-2xl mx-auto">
            बस एक command से शुरू करें अपना bindaas coding journey! 🚀
          </p>

          {/* Terminal-style Installation */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <Terminal className="text-gray-400" size={20} />
            </div>
            
            <div className="bg-black rounded-lg p-6 font-mono">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">{installCommand}</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
                >
                  {copied ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Bas Ho Gail!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-fuchsia-950 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-600">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fuchsia-950">1</span>
              </div>
              <h3 className="font-baloo text-xl font-bold text-white mb-2">Command Copy करें</h3>
              <p className="text-cream-100">ऊपर वाला command copy करके terminal में paste करें, भौजी!</p>
            </div>

            <div className="bg-fuchsia-950 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-600">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-baloo text-xl font-bold text-white mb-2">Dhoom Machega</h3>
              <p className="text-cream-100">Package install होते ही तुम्हारा system तैयार! 🎉</p>
            </div>

            <div className="bg-fuchsia-950 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-600">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-baloo text-xl font-bold text-white mb-2">Bindaas Code करें!</h3>
              <p className="text-cream-100">अब .bj files बनाकर full मस्ती में code लिखें! 🍻</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;