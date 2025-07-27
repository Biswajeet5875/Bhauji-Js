import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstallGuide from './components/InstallGuide';
import UsageGuide from './components/UsageGuide';
import CodePlayground from './components/CodePlayground';
import SyntaxTable from './components/SyntaxTable';
import SampleCode from './components/SampleCode';
import FutureScope from './components/FutureScope';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-950 to-fuchsia-900 ">
      <Header />
      <Hero />
      <InstallGuide />
      <UsageGuide />
      <CodePlayground />
      <SyntaxTable />
      <SampleCode />
      <FutureScope />
      <About />
      <Footer />
    </div>
  );
}

export default App;