import React from 'react';
import { motion } from 'motion/react';
import { Store, UserPlus, Gem, Rocket } from 'lucide-react';

const WhoShouldJoin = () => {
  const cards = [
    { title: "Exhibitors", icon: <Store className="w-10 h-10" />, desc: "Showcase your products to a massive audience." },
    { title: "Visitors", icon: <UserPlus className="w-10 h-10" />, desc: "Discover new brands, products, and services." },
    { title: "Sponsors", icon: <Gem className="w-10 h-10" />, desc: "Amplify your brand presence and reach." },
    { title: "Entrepreneurs", icon: <Rocket className="w-10 h-10" />, desc: "Network and find your next big opportunity." },
  ];

  return (
    <section id="who" className="py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-black font-heading mb-4">Who Should Join</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 border border-gray-200 rounded-3xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all bg-white"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-16 text-center"
        >
           <a href="#register" className="inline-flex items-center justify-center px-10 py-5 bg-foreground text-white font-bold rounded-full hover:bg-primary transition-all text-xl shadow-xl hover:-translate-y-1">
             Book Your Spot Now
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;
