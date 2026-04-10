import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Wrench, Monitor, Terminal, 
  FileCode, Cpu, Github, Layout, FileSpreadsheet, FileText, Presentation, Activity
} from 'lucide-react';

const SkillBar = ({ name, percentage, isStrong }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <span className="font-bold text-portfolio-text/90 tracking-tight text-[14px] sm:text-[15px]">{name}</span>
        {isStrong && (
          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-1.5 sm:px-2 py-0.5 bg-portfolio-accent/10 text-portfolio-accent rounded-full border border-portfolio-accent/20">
            Strong
          </span>
        )}
      </div>
      <span className="font-code text-portfolio-primary text-[11px] sm:text-xs font-bold">{percentage}%</span>
    </div>
    <div className="h-1.5 sm:h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="h-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]"
      />
    </div>
  </div>
);

const SkillIcon = ({ name, icon }) => (
  <motion.div 
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white/5 border border-white/5 rounded-xl sm:rounded-2xl transition-all font-inter"
  >
    <div className="p-1.5 sm:p-2 bg-portfolio-bg rounded-lg text-portfolio-accent">
       {React.cloneElement(icon, { size: 16 })}
    </div>
    <span className="text-[12px] sm:text-xs font-bold text-portfolio-text/70 truncate">{name}</span>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-portfolio-primary" size={24} />,
      type: 'bar',
      skills: [
        { name: 'HTML', percentage: 95, isStrong: true },
        { name: 'CSS', percentage: 90, isStrong: true },
        { name: 'JavaScript', percentage: 80, isStrong: false },
        { name: 'React JS', percentage: 80, isStrong: true },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-500" size={24} />,
      type: 'bar',
      skills: [
        { name: 'Node JS', percentage: 70 },
        { name: 'Express JS', percentage: 70 },
      ]
    },
    {
      title: 'Database Management',
      icon: <Database className="text-yellow-500" size={24} />,
      type: 'bar',
      skills: [
        { name: 'MongoDB', percentage: 50 },
        { name: 'MySQL (Basic)', percentage: 35 },
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: <Wrench className="text-portfolio-accent" size={24} />,
      type: 'icon',
      skills: [
        { name: 'Git', icon: <Terminal /> },
        { name: 'GitHub', icon: <Github /> },
      ]
    },
    {
      title: 'Productivity & Basics',
      icon: <FileCode className="text-pink-500" size={24} />,
      type: 'icon',
      skills: [
        { name: 'MS Word', icon: <FileText /> },
        { name: 'Excel', icon: <FileSpreadsheet /> },
        { name: 'PowerPoint', icon: <Presentation /> },
        { name: 'VB (Basic)', icon: <Cpu /> },
      ]
    },
    {
      title: 'Development Platforms',
      icon: <Monitor className="text-purple-500" size={24} />,
      type: 'icon',
      skills: [
        { name: 'VS Code', icon: <Terminal /> },
        { name: 'Antigravity', icon: <Activity /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-24 bg-portfolio-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 lg:mb-24 space-y-4 sm:space-y-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="inline-block px-4 py-1 glass rounded-full text-portfolio-accent text-[10px] font-black font-code tracking-widest uppercase"
          >
            Technical Stack
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-7xl font-black font-outfit text-portfolio-text tracking-tightest"
          >
            Capabilities & <span className="text-gradient">Tools</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 sm:p-10 bg-portfolio-card/40 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl hover:border-portfolio-primary/30 hover:shadow-portfolio-primary/10 hover:-translate-y-3 hover:bg-portfolio-card/60 transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                <div className="p-3 sm:p-4 bg-portfolio-card rounded-xl sm:rounded-2xl transition-transform group-hover:scale-110 shadow-inner group-hover:shadow-portfolio-primary/20">
                   {cat.icon}
                </div>
                <h3 className="text-[18px] sm:text-[20px] lg:text-[1.4rem] font-bold font-outfit text-portfolio-text leading-tight tracking-tight uppercase tracking-[0.1em]">{cat.title}</h3>
              </div>
              
              <div className="space-y-6 sm:space-y-8 flex-grow">
                {cat.type === 'bar' ? (
                  cat.skills.map(skill => (
                    <SkillBar key={skill.name} {...skill} />
                  ))
                ) : (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {cat.skills.map(skill => (
                      <SkillIcon key={skill.name} {...skill} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
