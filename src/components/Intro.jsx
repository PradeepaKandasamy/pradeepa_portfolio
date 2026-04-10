import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layout, Server, Layers, ArrowRight } from 'lucide-react';

const Intro = () => {
  const highlights = [
    { text: 'Build responsive UI', icon: <Layout size={20} className="text-portfolio-accent" /> },
    { text: 'Develop backend APIs', icon: <Server size={20} className="text-portfolio-primary" /> },
    { text: 'Create full-stack applications', icon: <Layers size={20} className="text-portfolio-accent" /> },
  ];

  return (
    <section id="intro" className="py-20 lg:py-24 bg-portfolio-bg relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Visual Image */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, amount: 0.1 }}
           transition={{ duration: 0.8 }}
           className="relative flex justify-center order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-portfolio-primary/10 blur-[80px] rounded-full sm:w-[500px] sm:h-[500px] mx-auto -z-10 group-hover:bg-portfolio-accent/20 transition-all scale-75 sm:scale-100"></div>
          
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-full max-w-[320px] sm:max-w-[450px]"
          >
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="p-3 sm:p-4 glass rounded-[2rem] shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-portfolio-accent/30 transition-all border border-white/10 group"
            >
              <img 
                src="/assets/about_section.png" 
                alt="About Pradeepa Kandasamy" 
                className="w-full h-auto rounded-[1.5rem] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-4 sm:p-6 glass rounded-2xl shadow-xl animate-float">
                 <div className="text-portfolio-accent font-black font-code text-xl sm:text-2xl uppercase tracking-tighter italic">About</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Side: Professional Content */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, amount: 0.1 }}
           transition={{ duration: 0.8 }}
           className="space-y-10 order-1 lg:order-2"
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 glass rounded-full text-portfolio-primary text-xs font-bold font-code mb-4 tracking-widest uppercase">
              Who I Am
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black font-outfit text-portfolio-text leading-tight tracking-tightest">
              About <span className="text-gradient font-medium italic">Me</span>
            </h2>
            <p className="text-[16px] sm:text-lg text-portfolio-secondary font-inter leading-relaxed max-w-xl">
              I am a passionate <span className="text-portfolio-text font-bold">Full Stack Developer</span> who builds modern web applications using the MERN stack. I thrive on creating efficiency through high-end digital experiences.
            </p>
          </div>
          
          <ul className="space-y-4 sm:space-y-4">
            {highlights.map((point, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileTap={{ scale: 0.98, x: 10 }}
                className="flex items-center gap-4 text-portfolio-text p-4 sm:p-4 bg-portfolio-card/40 border border-white/5 rounded-2xl hover:bg-white/5 transition-all group backdrop-blur-sm"
              >
                <div className="p-2 sm:p-2.5 bg-portfolio-bg rounded-lg group-hover:scale-110 transition-transform shadow-lg border border-white/5">
                   {point.icon}
                </div>
                <span className="text-sm sm:text-base font-bold font-outfit tracking-tighter uppercase">{point.text}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="pt-4 sm:pt-6">
            <motion.a
               href="#projects"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="btn-primary group flex w-full sm:w-max px-10 sm:px-12 py-4 sm:py-4 text-base tracking-tighter"
            >
              View Projects <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
