import React from 'react';
import { motion } from 'motion/react';
import { CalendarRange, Building2, Users, Handshake, TrendingUp } from 'lucide-react';

const QuickHighlights = () => {
  const highlights = [
    { icon: <CalendarRange className="w-8 h-8" />, title: "3 Days Event" },
    { icon: <Building2 className="w-8 h-8" />, title: "Multi Industry" },
    { icon: <Users className="w-8 h-8" />, title: "Thousands Expected" },
    { icon: <Handshake className="w-8 h-8" />, title: "Networking" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Growth Opportunities" },
  ];

  return (
    <section id="highlights" className="py-12 lg:py-20 px-6 lg:px-20 bg-background border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } },
                hover: { y: -5, transition: { duration: 0.2 } }
              }}
              className={`group flex flex-col items-center text-center p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-colors cursor-default ${index === 4 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}`}
            >
              <motion.div
                variants={{
                  hover: { scale: 1.15, y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }
                }}
                className="w-16 h-16 bg-white shrink-0 rounded-full flex items-center justify-center text-primary shadow-sm mb-4 border border-gray-50 group-hover:bg-primary/5 transition-colors"
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-gray-800 font-heading leading-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;
