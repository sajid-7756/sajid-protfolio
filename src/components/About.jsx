import { motion } from "framer-motion";

export default function About() {
  const approaches = [
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
            className="bg-gray-800/50 rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-8">
              I'm a passionate MERN Stack Developer eager to build clean,
              modern, and user-friendly web applications. I enjoy learning new
              technologies and applying my skills to create interactive and
              engaging experiences.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              I love turning ideas into practical solutions using JavaScript,
              React, Node.js, and other modern tools. My goals are to write
              efficient code, improve performance, and develop products that
              provide a great user experience. Outside of coding, I explore new
              technologies, work on side projects, and continue learning
              advanced concepts like Next.js and microservices.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">My Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-accent mr-3 mt-1">
                    <i className={approach.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {approach.title}
                    </h4>
                    <p className="text-gray-400">{approach.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
