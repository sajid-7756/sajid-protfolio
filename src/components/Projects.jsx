import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      icon: "fas fa-pen-nib",
      title: "AssetVerse",
      description:
        "AssetVerse is an asset management web application that helps organizations track company assets, manage employee requests, and monitor asset usage efficiently. It provides role-based access for HR and employees, real-time request tracking, and visual insights through an interactive dashboard.",
      tags: ["React", "Express.js", "MongoDB", "TailwindCSS", "Firebase"],
      links: {
        demo: "https://assetverse-e610c.web.app/",
        github: "https://github.com/sajid-7756/AssetVerse-Client",
      },
      img: "/assetVerse.png",
    },
    {
      icon: "fas fa-seedling",
      title: "CleanHub",
      description:
        "CleanHub is a community app that helps people report, track, and fix local environmental problems. It shows community stats, allows easy issue reporting, and encourages volunteering for clean-up drives.",
      tags: ["React", "Express.js", "TailwindCSS", "DaisyUI", "MongoDB"],
      links: {
        demo: "https://a10-b11-issuereport-4c3a42.netlify.app/",
        github:
          "https://github.com/sajid-7756/Community-Cleanliness-Issue-Reporting-Portal-A10B12-client",
      },
      img: "/clean-hub.png",
    },
    {
      icon: "fas fa-paw",
      title: "PetCare",
      description:
        "PetCare is a friendly web app for pet lovers to explore services, get tips, and connect with expert vets. Users can securely sign in, manage their profile, and enjoy a smooth, responsive experience on any device.",
      tags: ["React", "Express.js", "Firebase", "TailwindCSS", "DaisyUI"],
      links: {
        demo: "https://ph-a09-winte-pet-care.netlify.app/",
        github: "https://github.com/sajid-7756/Pet-Care",
      },
      img: "/pet-care.png",
    },
    {
      icon: "fas fa-pen-nib",
      title: "WriteFlow",
      description:
        "WriteFlow is an easy-to-use blogging platform where anyone can create, read, and manage blog posts. It has a clean design, supports images and categories, and keeps user accounts safe with secure login.",
      tags: ["Next.js", "Express.js", "MongoDB", "TailwindCSS", "NextAuth"],
      links: {
        demo: "https://write-flow-three.vercel.app/",
        github: "https://github.com/sajid-7756/Write-Flow",
      },
      img: "/write-flow.png",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">Featured</span>
            <span className="text-white"> Projects</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent MERN stack applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 shadow-neumorphic hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              {project.img && (
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-800/50"></div>
                </div>
              )}
              <div className="p-6">
                <div className="text-accent text-2xl mb-4">
                  <i className={project.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-900 text-accent text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.demo}
                    className="flex-1 px-4 py-2 bg-accent hover:bg-cyan-600 text-white font-medium rounded-lg text-center transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex-1 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white font-medium rounded-lg text-center transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
