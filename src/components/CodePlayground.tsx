import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Copy, RotateCcw } from 'lucide-react';

const CodePlayground = () => {
const [code, setCode] = useState(`// भौजी.js में लिखें
kaha_bhauji("Arre bhai, kaise ho?");

// Variable बनाएं
batayi naam = "Bhauji";
batayi daaru_quota = 5;

// Function बनाएं
kam_kar bindaas_greeting(vyakti) {
    wapis "Arre " + vyakti + ", kya haal ba?";
}

// Call करें
kaha_bhauji(bindaas_greeting(naam));

// Loop चलाएं
for(batayi i = 1; i <= daaru_quota; i++) {
    kaha_bhauji("Daaru bottle " + i + ": Cheers! 🍺");
}`);


  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

const sampleCodes = [
  {
    title: "Bindaas Hello",
    code: `kaha_bhauji("Arre bhai, bindaas ho jao!");`
  },
  {
    title: "Daaru Counter",
    code: `batayi a = 10;
batayi b = 20;
batayi total_bottles = a + b;
kaha_bhauji("Total daaru bottles: " + total_bottles + " 🍺");`
  },
  {
    title: "Bindaas Function",
    code: `kam_kar add(x, y) {
  wapis x + y;
}

kaha_bhauji("Result: " + add(5, 3));`
  }
];


  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...\n');
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Mock translation of Bhauji.js to JavaScript
        const jsCode = code
  .replace(/kaha_bhauji/g, 'console.log')
  .replace(/bhauji_suni_ta/g, 'prompt')
  .replace(/bhauji_dikhai_ta/g, 'document.write')
  .replace(/batayi/g, 'let')
  .replace(/pakki_bat/g, 'const')
  .replace(/maanle/g, 'if')
  .replace(/nahi_ta_phir/g, 'else if')
  .replace(/na_ta/g, 'else')
  .replace(/dekhi_ke/g, 'switch')
  .replace(/agar\s*\(([^)]+)\):/g, 'case $1:')
  .replace(/jab_kucho_nahi/g, 'default')
  .replace(/bas_ho_gail/g, 'break')
  .replace(/ginti_se/g, 'for')
  .replace(/jabahu_tak/g, 'while')
  .replace(/kari/g, 'do')
  .replace(/phir_dhekhi/g, 'while') // used with do
  .replace(/age_badhi/g, 'continue')
  .replace(/wapis/g, 'return')
  .replace(/kam_kar\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/g, 'function $1($2)') // named function
  .replace(/kam_kar\s*\(([^)]*)\)/g, 'function($1)') // anonymous function
  .replace(/kam_kar\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*{/g, 'const $1 = function($2) {') // assign to const
  .replace(/kam_dekh/g, '') // call function
  .replace(/awa_jara/g, '') // call function
  .replace(/jhund\(([^)]*)\)/g, 'Array.of($1)')
  .replace(/jhund\[\]/g, '[]')
  .replace(/\.theshi_dei/g, '.push')
  .replace(/\.nikal_dei/g, '.pop')
  .replace(/\.lambai/g, '.length')
  .replace(/\.rup_dei/g, '.map')
  .replace(/\.chantt_dei/g, '.filter')
  .replace(/\.khoj_dei/g, '.find')
  .replace(/\.saja_dei/g, '.reduce')
  .replace(/har_ek/g, 'forEach')
  .replace(/jholi/g, 'Object')
  .replace(/nulla/g, 'null')
  .replace(/naya/g, 'new')
  .replace(/dekha/g, 'typeof')
  .replace(/rok/g, 'throw')
  .replace(/kosis kara/g, 'try')
  .replace(/pakad le/g, 'catch')
  .replace(/akhri mein/g, 'finally');


        // Capture console.log output
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.join(' '));
        };

        // Execute the code
        new Function(jsCode)();
        
        // Restore console.log
        console.log = originalLog;
        
        setOutput(logs.join('\n') || 'No output');
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(sampleCodes[0].code);
    setOutput('');
  };

  const loadSample = (sampleCode: string) => {
    setCode(sampleCode);
    setOutput('');
  };

  return (
    <section id="playground" className="py-20 bg-gradient-to-b from-fuchsia-950 to-fuchsia-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
              Try it: Code <span className="text-yellow-300">Playground</span>
            </h2>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto">
              यहाँ live try करें Bhauji.js! Code लिखें और bindaas result देखें। 🚀
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Editor Panel */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <h3 className="font-baloo text-xl font-bold text-white">Bhauji.js Editor</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={resetCode}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-lg flex items-center space-x-1 transition-colors"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="h-96">
                <Editor
                  height="100%"
                  language="javascript"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                  }}
                />
              </div>
            </div>

            {/* Output Panel */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <h3 className="font-baloo text-xl font-bold text-white">Output</h3>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-4 py-2 rounded-lg font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play size={16} />
                  <span>{isRunning ? 'Chal raha hai...' : 'Dekh Bhauji!'}</span>
                </button>
              </div>
              <div className="h-96 p-6 font-mono text-green-400 bg-black overflow-auto">
                <pre className="whitespace-pre-wrap">
                  {output || 'Click "Dekh Bhauji!" to run your bindaas code... 🍺'}
                </pre>
              </div>
            </div>
          </div>

          {/* Sample Code Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {sampleCodes.map((sample, index) => (
              <button
                key={index}
                onClick={() => loadSample(sample.code)}
                className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {sample.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodePlayground;