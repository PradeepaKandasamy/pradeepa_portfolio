import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';

const ContactCard = ({ icon, title, value, href, delay, isExternal }) => (
  <motion.a
    href={href}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.6, delay }}
    whileTap={{ scale: 0.95, y: -5 }}
    className="group relative p-8 bg-portfolio-card/40 rounded-[2rem] border border-white/5 hover:border-portfolio-primary/50 transition-all shadow-2xl flex flex-col items-center text-center overflow-hidden backdrop-blur-xl"
  >
    {/* Glow Border Effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-portfolio-primary/30 rounded-[2rem] transition-all pointer-events-none"></div>

    <div className="p-4 bg-portfolio-bg rounded-xl mb-6 group-hover:scale-110 group-hover:text-portfolio-primary transition-all shadow-lg">
      {icon}
    </div>

    <h3 className="text-xs font-bold font-outfit text-portfolio-secondary tracking-[0.3em] uppercase mb-4">{title}</h3>

    <p className="text-base font-semibold font-outfit text-portfolio-text tracking-tight leading-relaxed break-all mb-6">
      {value}
    </p>

    <div className="mt-auto flex items-center gap-2 text-portfolio-primary font-bold text-xs opacity-40 group-hover:opacity-100 transition-opacity">
      Open Profile <ExternalLink size={14} />
    </div>
  </motion.a>
);

const ContactInfo = () => {
  const contacts = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'pradeepakandasamy02@gmail.com',
      href: 'mailto:pradeepakandasamy02@gmail.com',
      isExternal: false,
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'WhatsApp',
      value: '+91 7904578239',
      href: 'https://wa.me/917904578239',
      isExternal: false,
    },
    {
      icon: <Linkedin size={28} />,
      title: 'LinkedIn',
      value: 'Pradeepa Kandasamy',
      href: 'https://www.linkedin.com/in/pradeepa-kandasamy-488b74320',
      isExternal: true,
    },
    {
      icon: <Github size={28} />,
      title: 'GitHub',
      value: 'PradeepaKandasamy',
      href: 'https://github.com/PradeepaKandasamy',
      isExternal: true,
    },
    {
      icon: <Instagram size={28} />,
      title: 'Instagram',
      value: '@pradeepa_kandasamy_',
      href: 'https://www.instagram.com/pradeepa_kandasamy_?igsh=cjJ1dnA4ZmdiM3Zj',
      isExternal: true,
    }
  ];

  return (
    <section id="connect" className="py-24 bg-portfolio-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-outfit text-portfolio-text tracking-tightest"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-portfolio-secondary text-lg sm:text-xl font-inter font-light max-w-2xl mx-auto pt-2">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contacts.map((contact, i) => (
            <ContactCard key={contact.title} {...contact} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-portfolio-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default ContactInfo;
