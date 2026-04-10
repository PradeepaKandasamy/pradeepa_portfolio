import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layout, Code2, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Idea Phase',
      icon: <Lightbulb size={40} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]" />,
      desc: 'Defining clear goals and logic for a project.',
      color: 'border-yellow-400'
    },
    {
      title: 'Design Flow',
      icon: <Layout size={40} className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]" />,
      desc: 'Mapping UX and UI for seamless interfaces.',
      color: 'border-pink-500'
    },
    {
      title: 'Core Dev',
      icon: <Code2 size={40} className="text-portfolio-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />,
      desc: 'Writing clean, efficient, scalable code.',
      color: 'border-portfolio-primary'
    },
    {
      title: 'Live Launch',
      icon: <Rocket size={40} className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" />,
      desc: 'Deploying and optimizing for production.',
      color: 'border-green-500'
    }
  ];

  return (
    <section id="process" className="py-24 bg-portfolio-bg/30 relative">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 glass rounded-full text-portfolio-accent text-sm font-bold font-code mb-4 tracking-widest uppercase"
          >
            My Workflow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black font-outfit text-portfolio-text tracking-tightest"
          >
            How <span className="text-gradient">I Think</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-portfolio-secondary max-w-2xl mx-auto text-lg leading-relaxed font-inter"
          >
            Every great digital product is born from a rigorous, structured building process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
               key={step.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15, duration: 0.6 }}
               whileHover={{ y: -8 }}
               className="p-10 bg-portfolio-card/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 group relative shadow-2xl hover:border-portfolio-primary/30 transition-all text-center flex flex-col items-center justify-center min-h-[300px]"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500 relative">
                <div className="absolute inset-x-0 inset-y-0 w-full h-full bg-portfolio-primary/5 blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative z-10 transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-[12px] font-bold font-outfit text-portfolio-text mb-4 tracking-[0.2em] uppercase">{step.title}</h3>
              <p className="text-portfolio-secondary text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              
              <div className="absolute top-6 right-8 text-5xl font-black text-white/5 select-none font-outfit">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
