import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Rocket, Lightbulb, UserCheck } from 'lucide-react';

const CTA = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "Let’s Build Something Amazing Together 🚀",
      subtext: "I create modern and scalable web applications",
      icon: <Rocket size={20} className="text-portfolio-primary" />
    },
    {
      heading: "Looking for a Full Stack Developer?",
      subtext: "I can help you build powerful web solutions",
      icon: <UserCheck size={20} className="text-portfolio-accent" />
    },
    {
      heading: "Have an Idea?",
      subtext: "Let’s turn your vision into reality",
      icon: <Lightbulb size={20} className="text-yellow-400" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="contact" className="py-24 bg-portfolio-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-portfolio-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative p-12 lg:p-20 glass rounded-[3rem] border border-white/5 overflow-hidden text-center shadow-2xl"
        >
          {/* Internal Glow Effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-accent/10 blur-[60px] rounded-full"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="min-h-[160px] sm:min-h-[140px] flex flex-col items-center justify-center w-full">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-portfolio-primary/5 rounded-full text-portfolio-accent text-[10px] font-bold font-code tracking-[0.15em] uppercase border border-white/5">
                      {slides[currentSlide].icon} Featured Concept
                    </div>
                    
                    <h2 className="text-[36px] sm:text-[42px] lg:text-[72px] font-black font-outfit text-portfolio-text leading-[1.1] tracking-tightest">
                      {slides[currentSlide].heading}
                    </h2>
                    
                    <p className="text-[16px] sm:text-[17px] lg:text-[20px] text-portfolio-secondary font-inter font-normal leading-relaxed">
                      {slides[currentSlide].subtext}
                    </p>
                  </motion.div>
               </AnimatePresence>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex gap-2 mb-12 mt-8">
               {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-10 bg-portfolio-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'w-2 bg-white/10'}`} 
                  />
               ))}
            </div>

            {/* Persistent CTA Button */}
            <div className="flex flex-col items-center gap-8">
              <motion.a
                href="mailto:pradeepakandasamy02@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-14 py-5 shadow-2xl group"
              >
                Contact Me <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-portfolio-secondary/50 tracking-[0.3em] uppercase font-outfit">
                 Available for Global Projects 🌍
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
