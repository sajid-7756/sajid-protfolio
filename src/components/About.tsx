import { motion } from "framer-motion";

interface Approach {
  icon: string;
  title: string;
  description: string;
}

export default function About() {
  const approaches: Approach[] = [
    {
      icon: "fas fa-check-circle",
      title: "User-Centric Design",
      description: "Creating intuitive interfaces with exceptional UX",
    },
    {
      icon: "fas fa-check-circle",
      title: "Clean Code",
      description: "Writing maintainable, well-documented code",
    },
    {
      icon: "fas fa-check-circle",
      title: "Performance Focus",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: "fas fa-check-circle",
      title: "Continuous Learning",
      description: "Staying updated with emerging technologies",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">About</span>
            <span className="text-white"> Me</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="group motion-card bg-gray-800/40 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50 hover:border-accent/30 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-accent font-semibold">MERN Stack Developer</span> eager to build clean,
                modern, and user-friendly web applications. I enjoy learning new
                technologies and applying my skills to create interactive and
                engaging experiences.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I love turning ideas into practical solutions using JavaScript,
                React, Node.js, and other modern tools. My goals are to write
                efficient code, improve performance, and develop products that
                provide a great user experience.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                My Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-accent text-xl mt-1 group-hover/item:scale-125 transition-transform duration-300">
                      <i className={approach.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 group-hover/item:text-accent transition-colors duration-300">
                        {approach.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{approach.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
