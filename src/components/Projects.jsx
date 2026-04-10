import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import foodImg from '../assets/projects/food-app.png';
import cookImg from '../assets/projects/cook-book.png';
import movieImg from '../assets/projects/movie-app.png';
import funiImg from '../assets/projects/furniture-app.png';
import PortfolioImg from '../assets/projects/portfolio.png';
import ConstructImg from '../assets/projects/construction.png';


const Projects = () => {
  const allProjects = [
    {
      title: 'Global Commerce',
      tech: ['React', 'Node', 'MongoDB', 'Express'],
      desc: 'Full-stack e-commerce platform with secure authentication, dynamic product management, and seamless payment integration.',
      image: foodImg,
      github: 'https://github.com/PradeepaKandasamy/food-frontend-new',
      demo: 'https://food-frontend-new.vercel.app/'
    },
    {
      title: 'Athlex Performance',
      tech: ['React js', 'Tailwind CSS', 'Framer Motion'],
      desc: 'Modern analytics dashboard for tracking athlete performance with smooth animations and real-time data visualization.',
      image: cookImg,
      github: 'https://github.com/PradeepaKandasamy/cook-book',
      demo: 'https://cook-book-rosy-rho.vercel.app/'
    },
    {
      title: 'Movie Details Website',
      tech: ['React', 'Framer', 'Tailwind'],
      desc: 'Responsive movie browsing app using API integration to display trending, popular, and detailed movie information.',
      image: movieImg,
      github: 'https://github.com/PradeepaKandasamy/movie_website',
      demo: 'https://movie-website-opal-gamma.vercel.app/'
    },
    {
      title: 'Furniture Website',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Elegant and responsive furniture website showcasing products with clean UI design and smooth user experience.',
      image: funiImg,
      github: 'https://github.com/PradeepaKandasamy/furniture',
      demo: 'https://pradeepakandasamy.github.io/furniture/'
    },
    {
      title: 'Portfolio',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Personal portfolio website highlighting projects, skills, and contact details with a modern and minimal design.',
      image: PortfolioImg,
      github: 'https://github.com/PradeepaKandasamy/gunal_portfolio',
      demo: 'https://gunalkandhasamyportfolio.netlify.app/'
    },
    {
      title: 'Construction',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Professional construction company website with service sections, responsive layout, and strong visual branding.',
      image: ConstructImg,
      github: 'https://github.com/PradeepaKandasamy/construction-company',
      demo: 'https://zconstruction-websitee.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-bg/30 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 gap-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              className="inline-block px-4 py-1 glass rounded-full text-portfolio-accent text-xs font-bold font-code mb-4 tracking-widest uppercase"
            >
              Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit text-portfolio-text tracking-tightest"
            >
              Curated <span className="text-gradient italic">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.2 }}
              className="text-portfolio-secondary max-w-2xl text-lg leading-relaxed font-inter"
            >
              Engineering excellence through specialized, project-based development.
            </motion.p>
          </div>

          <motion.a
            href="https://github.com/PradeepaKandasamy"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 text-portfolio-accent/80 hover:text-portfolio-accent font-bold tracking-widest uppercase text-[10px] transition-all bg-white/5 border border-white/5 px-8 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm"
          >
            Visit Github <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-portfolio-card/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-portfolio-primary/10 hover:-translate-y-3 hover:bg-portfolio-card/60 hover:border-white/15 transition-all duration-300 flex flex-col h-full border border-white/5"
            >
              {/* Image Preview with Hover Overlay */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />

                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 z-10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 bg-white/10 hover:bg-portfolio-primary rounded-2xl text-white backdrop-blur-md border border-white/20 shadow-2xl transition-colors"
                    title="View Source Code"
                  >
                    <Github size={24} />
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 bg-white/10 hover:bg-portfolio-accent rounded-2xl text-white backdrop-blur-md border border-white/20 shadow-2xl transition-colors"
                    title="Live Preview"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Textual Branding */}
              <div className="p-10 space-y-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold font-code py-1 px-4 bg-white/5 text-portfolio-accent/80 rounded-full border border-white/5 hover:border-portfolio-accent transition-colors">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-black font-outfit text-portfolio-text tracking-tight group-hover:text-portfolio-primary transition-colors">{project.title}</h3>
                <p className="text-portfolio-secondary text-sm flex-grow leading-relaxed font-inter">{project.desc}</p>

                <div className="pt-6 flex justify-between items-center text-portfolio-accent font-black text-[10px] tracking-widest uppercase border-t border-white/5">
                  <span className="flex items-center gap-2 group-hover:gap-3 transition-all">Details <ArrowRight size={14} /></span>
                  <Code size={18} className="opacity-20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
