import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(11, 15, 25, 0)", "rgba(11, 15, 25, 0.9)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(20px)"]
  );

  const padding = useTransform(
    scrollY,
    [0, 50],
    ["32px 0", "20px 0"]
  );

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        padding,
        willChange: 'transform, background-color, backdrop-filter'
      }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b border-transparent"
    >
      <div className="container-custom flex justify-between items-center h-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black font-outfit tracking-tightest cursor-pointer group"
        >
          <span className="text-portfolio-text group-hover:text-portfolio-primary transition-colors">Pradeepa</span><span className="text-portfolio-primary group-hover:text-portfolio-text transition-colors">.K</span>
        </motion.div>

        {/* Global Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-portfolio-secondary hover:text-portfolio-text transition-all duration-300 font-semibold text-xs uppercase tracking-[0.2em] relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-portfolio-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-portfolio-text p-2.5 rounded-xl bg-white/5 border border-white/5"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-portfolio-bg/95 backdrop-blur-3xl border-t border-white/5 shadow-2xl p-10 h-screen"
          >
            <ul className="flex flex-col space-y-8 items-center pt-20">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black text-portfolio-text/20 hover:text-portfolio-primary block transition-all tracking-tightest font-outfit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
