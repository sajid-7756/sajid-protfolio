import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine";
``
export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

const particlesOptions = useMemo(
  () => ({
    fullScreen: false,
    background: {
      color: "transparent",
    },

    fpsLimit: 60,

      particles: {
        color: {
          value: "#3b82f6",
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: {
            default: "out" as const,
          },
        },
        number: {
          value: 50,
          density: {
            enable: true,
            area: 1000,
          },
        },
        opacity: {
          value: 0.45,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#0ea5e9",
          opacity: 0.35,
          width: 1,
        },
      },
      detectRetina: false,
    }),
    []
  );

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center p-0.5 bg-linear-to-r from-cyan-500 via-indigo-500 to-cyan-500 rounded-full mb-8 shadow-lg shadow-cyan-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          >
            <span className="px-5 py-1.5 bg-gray-950 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              MERN Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-linear-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">
              SAJID
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tech Enthusiast | I'm a React Developer who loves building elegant,
            user-centric interfaces. My goal is to create fast, modern, and
            impactful experiences through clean code and thoughtful design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a
              href="/ResumeOfSajid.pdf"
              download
              className="group relative px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                <i className="fas fa-download"></i>
                RESUME
              </span>
            </motion.a>

            <div className="flex gap-5">
              {[
                { href: "https://github.com/sajid-7756", icon: "fab fa-github" },
                { href: "https://www.linkedin.com/in/sajidos/", icon: "fab fa-linkedin" },
                { href: "mailto:devsajid56@gmail.com", icon: "fas fa-envelope" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 rounded-2xl border border-gray-700/50 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: idx % 2 === 0 ? 5 : -5,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-accent">#reactjs</span>
            <span className="text-accent">#nodejs</span>
            <span className="text-accent">#express</span>
            <span className="text-accent">#mongodb</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
