import React from 'react';
import { FileText, Play, Sparkles } from 'lucide-react';

const UsageGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-fuchsia-900 to-fuchsia-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
            कैसे <span className="text-yellow-300">चलाएं</span>
          </h2>
          
          <p className="text-xl text-cream-100 mb-16 max-w-2xl mx-auto">
            तीन आसान steps में अपना पहला धमाकेदार Bhauji.js program बनाएं! 💥
          </p>

          {/* Step-by-step Guide */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-fuchsia-800/30 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-600">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <FileText size={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-baloo text-2xl font-bold text-white mb-4">Step 1: File बनाएं</h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <span className="text-green-400">$ </span>
                  <span className="text-white">touch mera_program.bj</span>
                </div>
                <p className="text-cream-100">एक नई .bj file बनाएं (Bhauji.js का extension)</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-fuchsia-800/30 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-600">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Sparkles size={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-baloo text-2xl font-bold text-white mb-4">Step 2: Code लिखें</h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <div className="text-yellow-300">kaha_bhauji<span className="text-white">(</span><span className="text-green-300">"Arre bhai, kaise ho?"</span><span className="text-white">);</span></div>
                </div>
                <p className="text-cream-100">Full bindaas Bhojpuri syntax में अपना code लिखें! 🔥</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-fuchsia-800/30 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-600">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Play size={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-baloo text-2xl font-bold text-white mb-4">Step 3: Run करें</h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <span className="text-green-400">$ </span>
                  <span className="text-white">bhauji mera_program.bj</span>
                </div>
                <p className="text-cream-100">अपना program run करें और धमाकेदार output देखें! 💥</p>
              </div>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="font-baloo text-2xl font-bold mb-4">🍺 Bindaas Fact</h3>
            <p className="text-lg">
              सभी JavaScript features available हैं, बस syntax full देसी है! 
              Functions, loops, objects सब कुछ अपनी भाषा में लिखकर मस्ती करें। 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageGuide;