import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, Download, Send } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile || !containerRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    });
  }, [isMobile]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -20]);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(mousePos.y * -15, springConfig);
  const rotateY = useSpring(mousePos.x * 15, springConfig);

  const codeSnippet = `const dev = "Pradeepa";\nfunction build() {\n  return "Full Stack App 🚀";\n}`;

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-20 flex bg-portfolio-bg relative overflow-hidden items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center py-10">

        {/* Left Side Content - Repeat on Scroll Enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ y: y2 }}
          className="space-y-6 text-center lg:text-left z-20"
        >
          <div className="space-y-4">
            <h1 className="text-[34px] sm:text-[42px] lg:text-[64px] font-black font-outfit text-portfolio-text leading-tight tracking-tightest">
              Hi, I’m <span className="text-gradient">Pradeepa Kandasamy</span>
            </h1>
            <h2 className="text-[20px] sm:text-[24px] font-medium font-outfit text-portfolio-accent/90 tracking-tighter">
              Full Stack Developer
            </h2>
            <p className="text-[16px] sm:text-[18px] text-portfolio-secondary font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
              I build modern, scalable, and user-friendly web applications with engineering excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <motion.a
              href="/assets/Pradeepa_Kandasamy_Resume.pdf"
              download="Pradeepa_Kandasamy_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary sm:w-max w-full"
            >
              Download Resume <Download size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline sm:w-max w-full"
            >
              Hire Me <Send size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side Visual Focal Point - Repeat on Scroll Enabled */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2 }}
          style={{ y: y1 }}
          className="relative flex justify-center items-center h-full perspective-[1500px]"
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
            className="relative z-10 w-full max-w-[400px] sm:max-w-[500px] flex justify-center items-center group cursor-pointer"
          >
            <div className="absolute inset-0 bg-portfolio-primary/15 blur-[90px] rounded-full sm:w-[500px] sm:h-[500px] -z-20 opacity-40 animate-pulse"></div>

            <div className="animate-float w-full flex justify-center relative translate-z-[50px] will-change-transform">
              <div className="relative isolate">
                <img
                  src="/assets/hero_sitting.png"
                  alt="Pradeepa Kandasamy"
                  className="w-[280px] sm:w-[420px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] translate-z-[100px]"
                />
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-4 sm:top-1/2 -right-4 sm:-right-12 lg:-right-24 glass p-4 sm:p-6 rounded-2xl shadow-3xl w-[200px] sm:w-[320px] translate-z-[120px] border border-white/20 select-none backdrop-blur-3xl z-30"
                >
                  <div className="flex items-center gap-2 mb-2 sm:mb-4 border-b border-white/10 pb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-red-500/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="font-code text-[10px] sm:text-xs text-portfolio-accent/90 leading-[1.6]">
                    <TypeAnimation
                      sequence={[codeSnippet, 3000, '', 500]}
                      wrapper="pre"
                      speed={60}
                      repeat={Infinity}
                      className="whitespace-pre"
                    />
                  </div>
                </motion.div>

                <div className="absolute -top-10 -left-10 p-4 glass rounded-2xl translate-z-[150px] animate-float">
                  <Code2 size={40} className="text-portfolio-primary" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-8%] w-[80%] h-12 bg-black/40 blur-[40px] rounded-[100%] translate-z-[-50px]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
