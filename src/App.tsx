import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import AboutSection from './components/AboutSection';
import ScrollFeatures from './components/ScrollFeatures';
import WhoShouldJoin from './components/WhoShouldJoin';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <QuickHighlights />
        <AboutSection />
        <ScrollFeatures />
        <WhoShouldJoin />
        <RegistrationForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

