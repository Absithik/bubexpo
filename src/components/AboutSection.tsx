import React from 'react';
import { motion } from 'motion/react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-20 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-6xl font-black font-heading mb-8">Why BUB Expo?</h2>
          <p className="text-xl lg:text-3xl text-gray-700 leading-relaxed font-medium">
            BUB EXPO 2026 is a dynamic three-day platform connecting <span className="text-primary font-bold">brands</span>, <span className="text-primary font-bold">businesses</span>, <span className="text-primary font-bold">entrepreneurs</span>, and opportunities under one roof.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
