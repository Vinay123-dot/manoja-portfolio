import React from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/profile.jpeg";
import { my_skills, my_projects, my_experiences } from "./constant";
import { Mail, Phone, Linkedin, FileDown } from "lucide-react";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black font-sans scroll-smooth">
      <header className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center px-8 py-5 bg-white bg-opacity-80 shadow-xl sticky top-0 z-50 backdrop-blur-md">
        <h1 className="text-lg md:text-3xl font-bold tracking-wider text-orange-500">Velugoti Manoja</h1>
        <nav className="flex flex-col space-y-4 md:space-y-0 md:space-x-6  md:flex-row md:items-center">
          {["About", "Skills", "Experience", "Projects"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-gray-800 font-semibold hover:text-orange-500 transition-colors duration-300">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-24 md:group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      <section id="about" className="px-10 py-20">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Image comes first on small screens, second on md+ */}
          <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center order-1 md:order-2">
            <img src={profileImage} alt="Manoja" className="rounded-lg shadow-xl w-92 h-92 object-cover border-4 border-orange-400" />
          </motion.div>

          {/* Text comes after image on mobile, before on md+ */}
          <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1 order-2 md:order-1">
            <p className="text-lg font-semibold text-orange-500 mb-2">Frontend Developer</p>

            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Hi, I'm Manoja</h2>

            <p className="text-gray-700 font-semibold text-base leading-relaxed text-lg mb-6 max-w-2xl">
              A front-end developer with <strong>4 years</strong> of experience building fast, responsive, and scalable web apps using <strong>React.js</strong> and{" "}
              <strong>Tailwind CSS</strong>. Skilled in crafting clean UIs, managing complex states with <strong>Redux</strong>, and delivering smooth, user-first experiences.
              <br />
              <br />I focus on writing clean code, staying updated with modern web trends, and turning ideas into polished, performant products.
            </p>

            <div className="flex gap-4 items-center flex-wrap">
              <a href="mailto:velugotivinay326@gmail.com" className="flex items-center gap-2 bg-[#D44638] text-white px-4 py-2 rounded-md shadow-3xl hover:bg-[#bb3b2f] transition">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/velugotivinay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md shadow-3xl hover:bg-[#005e91] transition"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a href="/vinay_resume.pdf" download className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md shadow-3xl hover:bg-orange-600 transition">
                <FileDown className="w-5 h-5" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {my_skills.map((skill, idx) => (
            <motion.div
              key={skill}
              // className="bg-orange-500 text-white py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
              className="bg-orange-500 hover:bg-orange-600 focus:ring-2 text-white focus:ring-offset-2 focus:ring-[#5A87B2] py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Experience</h2>
        <div className="flex flex-col gap-8">
          {my_experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-300 transition"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {exp.company} <span className="text-gray-500">({exp.duration})</span>
              </h3>
              <p className="text-orange-500 text-lg font-semibold mt-2">{exp.role}</p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1 font-semibold">
                {exp.points.map((point, i) => (
                  <li key={i} className>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {my_projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-300 transition"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
                {/* <span className="text-gray-500">({project.duration})</span> */}
              </h3>
              <p className="text-orange-500 text-lg font-semibold mt-2">{project.role}</p>
              <ul className="list-disc list-inside text-gray-700 font-semibold mt-4 space-y-1">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
