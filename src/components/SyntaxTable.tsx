import React, { useState } from 'react';
import { Search, Code2 } from 'lucide-react';

const SyntaxTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const syntaxData = [
  { bhojpuri: 'kaha_bhauji()', javascript: 'console.log()', description: 'Bindaas print करने के लिए' },
  { bhojpuri: 'batayi', javascript: 'let / var', description: 'Variable बनाने के लिए' },
  { bhojpuri: 'pakki_bat', javascript: 'const', description: 'Constant बनाने के लिए' },
  { bhojpuri: 'kam_kar', javascript: 'function', description: 'Dhasu function बनाने के लिए' },
  { bhojpuri: 'wapis', javascript: 'return', description: 'Value return करने के लिए' },
  { bhojpuri: 'maanle', javascript: 'if', description: 'Condition check करने के लिए' },
  { bhojpuri: 'nahi_ta_phir', javascript: 'else if', description: 'Alternative condition के लिए' },
  { bhojpuri: 'na_ta', javascript: 'else', description: 'Else block के लिए' },
  { bhojpuri: 'ginti_se', javascript: 'for', description: 'For loop चलाने के लिए' },
  { bhojpuri: 'jabahu_tak', javascript: 'while', description: 'While loop के लिए' },
  { bhojpuri: 'kari ... phir_dhekhi()', javascript: 'do ... while()', description: 'Do while loop के लिए' },
  { bhojpuri: 'maanle', javascript: 'true', description: 'True value के लिए' },
  { bhojpuri: 'na_maanle', javascript: 'false', description: 'False value के लिए' },
  { bhojpuri: 'nulla', javascript: 'null', description: 'Null value के लिए' },
  { bhojpuri: 'pata_nahi', javascript: 'undefined', description: 'Undefined value के लिए' },
  { bhojpuri: 'daaru_pila', javascript: 'async', description: 'Async function के लिए' },
  { bhojpuri: 'intezaar_kar', javascript: 'await', description: 'Await करने के लिए' },
  { bhojpuri: 'naya', javascript: 'new', description: 'New object बनाने के लिए' },
  { bhojpuri: 'ye', javascript: 'this', description: 'Current object के लिए' },
  { bhojpuri: 'kosis kara', javascript: 'try', description: 'Error handling के लिए' },
  { bhojpuri: 'pakad le', javascript: 'catch', description: 'Error pakadne के लिए' },
  { bhojpuri: 'akhri mein', javascript: 'finally', description: 'Finally block के लिए' },
];


  const filteredData = syntaxData.filter(item =>
    item.bhojpuri.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.javascript.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="syntax" className="py-20 bg-gradient-to-b from-fuchsia-800 to-fuchsia-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
              Syntax <span className="text-yellow-300">Table</span>
            </h2>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto mb-8">
              सभी bindaas Bhojpuri keywords और उनके JavaScript equivalents यहाँ देखें। 🔥
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search syntax..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>
          </div>

          {/* Syntax Table */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                  <tr>
                    <th className="px-6 py-4 text-left font-baloo text-xl font-bold text-white">
                      🍺 Bhojpuri
                    </th>
                    <th className="px-6 py-4 text-left font-baloo text-xl font-bold text-white">
                      🧠 JavaScript
                    </th>
                    <th className="px-6 py-4 text-left font-baloo text-xl font-bold text-white">
                      📋 Description
                    </th>
                  </tr>
                
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'
                      } hover:bg-fuchsia-800/30 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <code className="bg-orange-400 text-white px-3 py-1 rounded-lg font-bold">
                          {item.bhojpuri}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <code className="bg-green-400 text-gray-900 px-3 py-1 rounded-lg font-mono">
                          {item.javascript}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-cream-100">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <Code2 className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-400 text-lg">कोई syntax नहीं मिला। दूसरे bindaas keywords try करें! 🍺</p>
              </div>
            )}
          </div>

          {/* Fun Note */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 inline-block">
              <p className="text-white font-bold text-lg">
                🍺 Bindaas Tip: सभी JavaScript features available हैं, बस syntax full देसी है!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntaxTable;