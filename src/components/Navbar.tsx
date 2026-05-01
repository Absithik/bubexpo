import React, { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm lg:px-20' : 'py-6 lg:py-8 lg:px-20 bg-transparent'}`}>
      <div className="flex items-center gap-2">
        {/* Placeholder for the logo - using text/icon combo for now */}
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg font-heading font-black text-white text-xl">B</div>
        <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">BUB EXPO 2026</span>
      </div>
      
      <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#highlights" className="hover:text-primary transition-colors">Highlights</a>
        <a href="#who" className="hover:text-primary transition-colors">Who Should Join</a>
        <a href="#register" className="px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-primary transition-colors font-semibold">Book Stall</a>
      </nav>
    </header>
  );
};

export default Navbar;
