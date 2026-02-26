import { motion } from "framer-motion";

interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    github?: string;
  };
  img?: string;
}

export default function Projects() {
  const projects: Project[] = [
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
    {
      icon: "fas fa-child",
      title: "Hero Kids",
      description:
        "Hero Kids is a modern, high-performance e-commerce solution for children's toys and accessories, built with a focus on speed, security, and premium user experience.",
      tags: [
        "Next.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Custom Auth",
      ],
      links: {
        demo: "https://hero-kids-mu.vercel.app/",
        github: "https://github.com/sajid-7756/Hero-Kids",
      },
      img: "/Hero-kids.png",
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
              className="group motion-card bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl hover:border-accent/40 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Project Image */}
              {project.img && (
                <div className="relative h-52 overflow-hidden bg-gray-900">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-900/80"></div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              
              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-accent text-3xl group-hover:scale-110 transition-transform duration-300">
                    <i className={project.icon}></i>
                  </div>
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-gray-900/80 text-accent/80 text-xs font-medium rounded-full border border-gray-700 group-hover:border-accent/30 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                      whileHover={{ scale: 1.1, color: "#fff", backgroundColor: "var(--color-accent)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-accent text-white font-bold rounded-xl text-center shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Live Demo</span>
                    <motion.div 
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
