import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaLinux,
} from "react-icons/fa";

import {
  SiFirebase,
  SiPostman,
  SiTailwindcss,
  SiDaisyui,
  SiNextdotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si";

import { IconType } from "react-icons";

interface Skill {
  icon: IconType;
  name: string;
}

export default function Skills() {
const skills: Skill[] = [
  { icon: FaReact, name: "React" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaNpm, name: "NPM" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: FaLinux, name: "Linux" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiDaisyui, name: "daisyUI" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiExpress, name: "Express.js" },
];


  const infiniteSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Technical</span>
            <span className="text-accent"> Skills</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          className="relative w-full overflow-hidden bg-linear-to-r from-gray-900 via-gray-800/50 to-gray-900 rounded-2xl py-12 border border-gray-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="marquee-track flex gap-12 items-center">
            {infiniteSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-4 min-w-[120px] group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="relative text-5xl text-gray-400 transition-colors duration-300 group-hover:text-accent"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent />
                    {/* Subtle glow behind icon on hover */}
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 uppercase tracking-widest">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
