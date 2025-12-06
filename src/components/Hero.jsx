import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
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
        value: ["#06b6d4", "#4f46e5", "#3b82f6"], // cyan, indigo, blue
      },

      move: {
        enable: true,
        speed: 0.6, // smoother
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
        attract: {
          enable: true,
          rotateX: 300,
          rotateY: 300,
        },
      },

      number: {
        value: 55, // a bit more particles
        density: {
          enable: true,
          area: 900,
        },
      },

      opacity: {
        value: 0.35,
        animation: {
          enable: true,
          speed: 0.4,
          minimumValue: 0.15,
        },
      },

      shape: {
        type: "circle",
      },

      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 1,
        },
      },

      links: {
        enable: true,
        distance: 150,
        color: "#3b82f6", // softer blue link color
        opacity: 0.25,
        width: 1,
      },

      shadow: {
        enable: true,
        blur: 2,
        color: "#06b6d4",
      },
    },

    detectRetina: true,
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
            className="inline-flex items-center justify-center p-1 bg-linear-to-r from-cyan-500 to-indigo-600 rounded-full mb-8 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1 bg-gray-900 rounded-full text-sm font-medium uppercase tracking-wider">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="/ResumeOfSajid.pdf"
              download
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <i className="fas fa-download"></i>
              RESUME
            </a>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/sajid-7756"
                target="_blank"
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-xl"></i>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sajidos/"
                target="_blank"
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin text-xl"></i>
              </motion.a>
              <motion.a
                href="mailto:devsajid56@gmail.com"
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope text-xl"></i>
              </motion.a>
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
