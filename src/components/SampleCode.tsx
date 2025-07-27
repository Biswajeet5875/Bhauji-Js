import React from 'react';
import { BookOpen, Heart, Zap } from 'lucide-react';

const SampleCode = () => {
 const samples = [
  {
    title: "Basic Calculator",
    description: "Simple calculator बनाएं",
    icon: <Zap className="text-yellow-300" size={24} />,
    code: `// Calculator Function
kam_kar calculator(operation, a, b) {
    maanle (operation === "add") {
        wapis a + b;
    } nahi_ta_phir (operation === "subtract") {
        wapis a - b;
    } nahi_ta_phir (operation === "multiply") {
        wapis a * b;
    } nahi_ta_phir (operation === "divide") {
        wapis a / b;
    } na_ta {
        wapis "Invalid operation";
    }
}

// Usage
kaha_bhauji(calculator("add", 10, 5));
kaha_bhauji(calculator("multiply", 3, 4));`
  },
  {
    title: "Array Operations",
    description: "Array के साथ काम करें",
    icon: <BookOpen className="text-green-300" size={24} />,
    code: `// Array बनाएं
batayi fruits = ["aam", "kela", "santara"];

// Loop चलाएं
for (batayi i = 0; i < fruits.lambai; i++) {
    kaha_bhauji("Fruit " + (i + 1) + ": " + fruits[i]);
}

// Function for filtering
kam_kar findFruit(name) {
    for (batayi fruit of fruits) {
        maanle (fruit === name) {
            wapis maanle;
        }
    }
    wapis na_maanle;
}

kaha_bhauji("Aam milega: " + findFruit("aam"));`
  },
  {
    title: "Object Example",
    description: "Object create करें और use करें",
    icon: <Heart className="text-red-300" size={24} />,
    code: `// Person object बनाएं
batayi person = {
    naam: "Bhauji",
    umar: 25,
    sheher: "Patna",
    
    // Method add करें
    introduce: kam_kar() {
        wapis "Namaste! Hamaar naam " + ye.naam + 
               " hai aur ham " + ye.sheher + " se hain.";
    },
    
    birthday: kam_kar() {
        ye.umar++;
        kaha_bhauji("Happy Birthday! Abhi " + ye.umar + " saal ke ho gaye.");
    }
};

// Object use करें
kaha_bhauji(person.introduce());
person.birthday();`
  }
];


  return (
    <section className="py-20 bg-gradient-to-b from-fuchsia-900 to-fuchsia-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-8">
              Sample <span className="text-yellow-300">Code</span>
            </h2>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto">
              Real examples देखें और सीखें कि कैसे use करें Bhauji.js को!
            </p>
          </div>

          <div className="space-y-12">
            {samples.map((sample, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-fuchsia-800/50 to-fuchsia-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-fuchsia-600 shadow-2xl"
              >
                {/* Header */}
                <div className="bg-fuchsia-800/70 px-8 py-6 border-b border-fuchsia-600">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-fuchsia-600 rounded-xl flex items-center justify-center">
                      {sample.icon}
                    </div>
                    <div>
                      <h3 className="font-baloo text-2xl font-bold text-white">{sample.title}</h3>
                      <p className="text-cream-100">{sample.description}</p>
                    </div>
                  </div>
                </div>

                {/* Code Block */}
                <div className="p-8">
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono leading-relaxed">
                      <code>{sample.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 inline-block">
              <h3 className="font-baloo text-2xl font-bold text-white mb-4">
                और भी examples चाहिए?
              </h3>
              <p className="text-white mb-6">
                Documentation में जाकर और भी samples देखें और अपने projects बनाएं!
              </p>
              <button className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                More Examples देखें
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleCode;