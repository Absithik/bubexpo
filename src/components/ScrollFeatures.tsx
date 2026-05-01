import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Gem, Users, TrendingUp } from 'lucide-react';

const ScrollFeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const isEven = index % 2 === 0;
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateVal = useTransform(scrollYProgress, [0, 1], [isEven ? -90 : 90, isEven ? 90 : -90]);
  const yVal = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const counterRotateVal = useTransform(rotateVal, v => -v);

  return (
    <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      <div className="flex-1 flex justify-center w-full relative">
        <motion.div
          style={{ rotate: rotateVal, y: yVal }}
          className={`w-64 h-64 lg:w-[400px] lg:h-[400px] border-[3px] border-dashed border-primary/20 flex items-center justify-center relative rounded-full`}
        >
           <div className={`absolute inset-4 lg:inset-8 bg-gradient-to-tr from-primary/10 to-transparent rounded-full -z-10`} />
           <motion.div 
             style={{ rotate: counterRotateVal }}
             className="w-28 h-28 lg:w-36 lg:h-36 bg-white text-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/10 border border-white"
            >
                {feature.icon}
           </motion.div>
        </motion.div>
      </div>
      
      <div className="flex-1 text-center lg:text-left z-10 w-full max-w-lg mx-auto lg:mx-0 py-10 lg:py-0">
        <motion.div
           initial={{ opacity: 0, x: isEven ? 50 : -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-6">
            Highlight 0{index + 1}
          </div>
          <h3 className="text-3xl lg:text-5xl font-black font-heading mb-6 leading-tight">{feature.title}</h3>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

const ScrollFeatures = () => {
  const features = [
    {
      title: "Discover Innovations",
      desc: "Explore cutting-edge solutions and products from leading brands in Salem and beyond.",
      icon: <Gem className="w-12 h-12 lg:w-16 lg:h-16" />,
    },
    {
      title: "Expand Your Network",
      desc: "Connect with industry experts, ambitious investors, and potential business partners seamlessly.",
      icon: <Users className="w-12 h-12 lg:w-16 lg:h-16" />,
    },
    {
      title: "Unlock Growth",
      desc: "Find unmatched opportunities and actionable strategies to scale your business to the next level.",
      icon: <TrendingUp className="w-12 h-12 lg:w-16 lg:h-16" />,
    }
  ];

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-40"
        >
          <h2 className="text-4xl lg:text-6xl font-black font-heading mb-6">The Experience</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-32 lg:space-y-56">
          {features.map((feature, index) => {
            return <ScrollFeatureCard key={index} feature={feature} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollFeatures;
