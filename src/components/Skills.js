"use client";

import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = {
    frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Bootstrap",
    ],
    backend : [
      "Node.js",
      "Express",
      "Django",
      "Flask",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
    ],
    cybersecurity : [
      "Penetration Testing",
      "OWASP Top 10",
      "Network Security",
      "Vulnerability Assessment",
      "Incident Response",
      "Security Auditing",
    ],
    python : [
      "Django",
      "Flask",
      "FastAPI",
      "Pandas",
      "NumPy",
      "Requests",
      "SQLAlchemy",
      "PyQt",
      ],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section id="skills" className="py-20 bg-gray-900/30 relative z-10">
        <div className="py-24 sm:py-32">
          <div className="relative w-full max-w-6xl mx-auto px-6 text-white">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="text-center mb-20"
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                    Skills & Expertise
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-32 h-2 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full shadow-lg shadow-green-400/50"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  Transforming ideas into reality with cutting-edge technologies
                </motion.p>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {/* Web Development Card */}
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="col-span-1 lg:col-span-2 xl:col-span-2"
                >
                  <div id="web-dev" className="absolute -top-52"></div>
                  <div
                    className="rounded-3xl hover:transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        🌐
                      </div>

                      <h2 className="text-2xl font-bold mb-4">
                        Full Stack Web Development
                      </h2>
                      <p className="text-gray-300 mb-8">
                        Creating modern, responsive web applications with
                        seamless user experiences and robust backend
                        architectures.
                      </p>

                      {/* Frontend Subsection */}
                      <div className="mb-6 p-6 border-l-4 border-green-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Frontend Development
                        </h3>
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {skills.frontend.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={itemVariants}
                              className="px-3 py-1 text-gray-200 rounded-full text-sm border-2 border-green-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <motion.div
                            className="proficiency-fill h-full bg-green-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Backend Subsection */}
                      <div className="p-6 border-l-4 border-green-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Backend Development
                        </h3>
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {skills.backend.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={itemVariants}
                              className="px-3 py-1 text-gray-200 rounded-full text-sm border-2 border-green-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <motion.div
                            className="proficiency-fill h-full bg-green-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "87%" }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cybersecurity Card */}
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div id="cyber-sec" className="absolute -top-20"></div>
                  <div
                    className="rounded-3xl p-8 hover:transform hover:-translate-y-2  transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16  rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        🔒
                      </div>

                      <h2 className="text-2xl font-bold mb-4">Cybersecurity</h2>
                      <p className="text-gray-300 mb-8">
                        Implementing security best practices, conducting
                        vulnerability assessments, and protecting digital assets
                        from evolving threats.
                      </p>

                      <div className="p-6 border-l-4 border-green-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Security Specializations
                        </h3>
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {skills.cybersecurity.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={itemVariants}
                              className="px-3 py-1 text-gray-200 rounded-full text-sm border-2 border-green-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <motion.div
                            className="proficiency-fill h-full bg-green-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "89%" }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Python Development Card */}
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div id="python-dev" className="absolute -top-20"></div>
                  <div
                    className="rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        🐍
                      </div>

                      <h2 className="text-2xl font-bold mb-4">
                        Python Development
                      </h2>
                      <p className="text-gray-300 mb-8">
                        Building scalable applications, data analysis tools, and
                        automation solutions using Python&apos;s powerful
                        ecosystem.
                      </p>

                      <div className=" p-6 border-l-4 border-green-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Core Python & Frameworks
                        </h3>
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {skills.python.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={itemVariants}
                              className="px-3 py-1 text-gray-200 rounded-full text-sm border-2 border-green-400 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <motion.div
                            className="proficiency-fill h-full bg-green-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "88%" }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;