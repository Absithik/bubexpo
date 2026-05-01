import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CalendarRange, Store } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 600]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className=" relative w-full min-h-[85vh] lg:min-h-screen pt-28 pb-12 px-6 lg:px-20 flex flex-col justify-center items-center lg:items-start lg:flex-row overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 w-full lg:max-w-xl xl:max-w-2xl mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6 border border-gray-200"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Presented by JCOML Salem 1.0</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-[1.1] tracking-tighter mb-4"
        >
          BUB EXPO <span className="text-primary">2026</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold font-heading text-gray-800 mb-2"
        >
          3-Day Mega Business Expo
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 mb-8 font-medium flex items-center gap-2 justify-center lg:justify-start"
        >
          <CalendarRange className="w-5 h-5 text-primary" />
          This August | <span className="font-semibold text-foreground">Salem</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 w-full"
        >
          <p className="text-2xl sm:text-3xl font-black italic tracking-wide text-gray-300 font-heading mb-2">
            Build UR Business
          </p>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Shop &bull; Discover &bull; Experience &bull; Connect
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#register" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-foreground transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1">
            <Store className="w-5 h-5" />
            Book Stall
          </a>
          <a href="#register" className="px-8 py-4 bg-white text-foreground border-2 border-gray-200 font-bold rounded-full hover:border-foreground transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
            Enquire Now
          </a>
        </motion.div>
      </div>

      {/* Decorative / Image Side (Desktop Split Layout) */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative w-full h-full min-h-[500px]">
        <motion.div 
          style={{ y: y3 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-lg aspect-square flex items-center justify-center group cursor-pointer"
        >
          {/* Animated rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[2px] border-dashed border-primary/30 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 border-[1px] border-primary/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 border-[20px] border-primary/5 rounded-full"
          />
          
          {/* Center object */}
          <motion.div 
            whileHover={{ 
              scale: 1.1, 
              rotate: 0,
              backgroundColor: "var(--color-foreground)",
            }}
            initial={{ rotate: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-48 h-48 bg-primary rounded-2xl flex items-center justify-center shadow-2xl z-10"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-white text-center"
            >
              <span className="block font-heading font-black text-6xl">BUB</span>
              <span className="block font-heading font-bold text-xl tracking-widest">2026</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
