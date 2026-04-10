import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, ShieldCheck, Zap, Users } from 'lucide-react';

const WhyHireMe = () => {
  const points = [
    {
      title: 'Strategic Thinker',
      icon: <Puzzle size={40} className="text-portfolio-primary" />,
      text: "Breaking down complex system requirements into manageable, high-performance modular components.",
    },
    {
      title: 'Quality Focused',
      icon: <ShieldCheck size={40} className="text-portfolio-accent" />,
      text: "Ensuring cross-browser compatibility, web accessibility, and robust security in every line of code.",
    },
    {
      title: 'Rapid Adaptability',
      icon: <Zap size={40} className="text-yellow-400" />,
      text: "A quick study of new JS runtimes, design patterns, and industry-standard best practices.",
    },
    {
      title: 'Collaborative Spirit',
      icon: <Users size={40} className="text-green-500" />,
      text: "Fostering productive team environments with clear communication and a pro-active mindset.",
    }
  ];

  return (
    <section id="why-hire-me" className="py-24 bg-portfolio-bg/20 relative">
      <div className="container-custom">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 glass rounded-full text-portfolio-accent text-xs font-bold font-code mb-4 tracking-widest uppercase"
          >
            Professional Value
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit text-portfolio-text tracking-tightest"
          >
            Why Collaborate <span className="text-gradient">With Me?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-portfolio-secondary max-w-2xl mx-auto text-lg leading-relaxed font-inter"
          >
            What I bring to the table beyond basic technical execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {points.map((point, i) => (
            <motion.div
               key={point.title}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.6 }}
               whileHover={{ y: -5 }}
               className="p-12 bg-portfolio-card/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center shadow-3xl hover:shadow-portfolio-primary/10 hover:-translate-y-3 hover:bg-portfolio-card/60 hover:border-white/15 transition-all duration-300 min-h-[350px]"
            >
              <div className="mb-10 p-6 bg-portfolio-card rounded-[2rem] group-hover:scale-110 transition-transform shadow-inner">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold font-outfit text-portfolio-text mb-6 tracking-tight">{point.title}</h3>
              <p className="text-portfolio-secondary text-sm leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
