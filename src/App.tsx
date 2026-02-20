import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsGEO from './components/WhatIsGEO';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <WhatIsGEO />
      <Services />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      {/* More sections coming */}
      <ChatWidget />
    </div>
  );
}

export default App;