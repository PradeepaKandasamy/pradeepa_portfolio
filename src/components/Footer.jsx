import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle, Mail, Github, Heart, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
       icon: <Instagram size={20} />, 
       href: 'https://www.instagram.com/pradeepa_kandasamy_?igsh=cjJ1dnA4ZmdiM3Zj', 
       color: 'hover:bg-pink-500/10 hover:text-pink-500' 
    },
    { 
       icon: <MessageCircle size={20} />, 
       href: 'https://wa.me/917904578239', 
       color: 'hover:bg-green-500/10 hover:text-green-500' 
    },
    { 
       icon: <Linkedin size={20} />, 
       href: 'https://www.linkedin.com/in/pradeepa-kandasamy-488b74320', 
       color: 'hover:bg-blue-500/10 hover:text-blue-500' 
    },
    { 
       icon: <Mail size={20} />, 
       href: 'mailto:pradeepakandasamy02@gmail.com', 
       color: 'hover:bg-red-500/10 hover:text-red-500' 
    },
    { 
       icon: <Github size={20} />, 
       href: 'https://github.com/PradeepaKandasamy', 
       color: 'hover:bg-portfolio-accent/10 hover:text-portfolio-accent' 
    },
  ];

  return (
    <footer className="py-24 bg-portfolio-bg relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-portfolio-primary/10 to-transparent"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          
          {/* Left Side: Branding & Motto */}
          <div className="space-y-10">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl font-black font-outfit tracking-tightest cursor-pointer"
            >
              <span className="text-portfolio-text">Pradeepa</span><span className="text-portfolio-primary">.</span>
            </motion.div>
            <p className="text-portfolio-secondary text-[1.4rem] max-w-lg leading-[1.6] font-inter italic tracking-tight">
               "Designing robust software architectures with a vision for future-proof scalability and unmatched performance."
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1 }}
                  className={`p-4 bg-portfolio-card rounded-2xl text-portfolio-secondary transition-all shadow-xl border border-white/5 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Right Side: Links & Utility */}
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold font-outfit text-portfolio-primary tracking-[0.3em] uppercase">Navigation</h4>
              <ul className="space-y-5">
                {['Home', 'Projects', 'Skills', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-portfolio-secondary hover:text-portfolio-text transition-all font-semibold text-lg tracking-tight hover:pl-2">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold font-outfit text-portfolio-accent tracking-[0.3em] uppercase">Core Stack</h4>
              <ul className="space-y-5">
                {['React Framework', 'MERN Systems', 'API Engineering', 'UI/UX Design'].map(item => (
                  <li key={item} className="text-portfolio-secondary font-semibold text-lg tracking-tight flex items-center gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-portfolio-primary/40"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-10 text-portfolio-secondary/30 text-[10px] font-bold tracking-[0.3em] uppercase font-outfit">
          <p>© {currentYear} Pradeepa Kandasamy. Engineered for Excellence.</p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2"><Globe size={14} className="text-portfolio-primary" /> Remote Work Enabled</span>
            <div className="flex items-center gap-2">
              Made with <Heart size={16} className="text-portfolio-primary fill-portfolio-primary/20" /> in <span className="text-portfolio-text">React v19</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
