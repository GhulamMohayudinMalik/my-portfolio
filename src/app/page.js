"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cetificates from "@/components/Cetificates";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Home() {
  const [matrixRain, setMatrixRain] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Matrix rain effect
  useEffect(() => {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    const drops = [];
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor((Math.random() * window.innerHeight) / 20);
    }

    const interval = setInterval(() => {
      setMatrixRain(
        drops.map((drop, i) => ({
          id: i,
          char: chars[Math.floor(Math.random() * chars.length)],
          x: i * 20,
          y: drop * 20,
          opacity: Math.random(),
        }))
      );

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = {
    development: [
      "React/Next.js",
      "Node.js",
      "Python",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
    ],
    cybersecurity: [
      "Penetration Testing",
      "OWASP Top 10",
      "Network Security",
      "Cryptography",
      "Incident Response",
      "SIEM",
    ],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="min-h-screen bg-gray-950 text-green-400 overflow-x-hidden relative">
      {/* Droping bits pieces */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {matrixRain.map((drop) => (
          <div
            key={drop.id}
            className="absolute text-green-400 font-mono text-sm"
            style={{
              left: drop.x,
              top: drop.y,
              opacity: drop.opacity,
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>
      {/* Mouse Tracking */}
      <div
        className="fixed w-32 h-32 pointer-events-none z-50 opacity-30"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <Navbar />
      <div>
        <section
          id="intro"
          className="min-h-screen flex items-center justify-center relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="text-6xl md:text-8xl font-bold mb-4">
                  <span className="text-green-400">GHULAM</span>
                  <br />
                  <span className="text-white">MOHAYUDIN</span>
                </div>
                <div className="text-xl md:text-2xl text-green-300 font-mono">
                  CyberSecurity Expert × Full-Stack Developer
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative"
              >
                <div className="w-48 h-48 mx-auto mb-8 relative">
                  <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute inset-2 border border-green-400/50 rounded-full animate-spin"
                    style={{ animationDuration: "8s" }}
                  ></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <div className="text-4xl">🔒</div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
              >
                <span className="block">
                  Crafting secure, scalable applications while defending against
                  digital threats.{" "}
                </span>
                <span className="block">Where code meets cybersecurity.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="px-8 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-colors transform hover:scale-105">
                  View Projects
                </button>
                <button className="px-8 py-3 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-colors transform hover:scale-105">
                  Download CV
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    With over 2 years of experience in full-stack development
                    and 3 years specializing in cybersecurity, I bridge the gap
                    between creating innovative digital solutions and protecting
                    them from emerging threats.
                  </p>
                  <p>
                    My journey began with a passion for code, which naturally
                    evolved into understanding the vulnerabilities that exist
                    within digital ecosystems. This unique perspective allows me
                    to build applications that are not just functional, but
                    fundamentally secure.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                    <div className="text-3xl font-bold text-green-400">15+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                    <div className="text-3xl font-bold text-green-400">5+</div>
                    <div className="text-gray-300">Security Consultations</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                    <div className="text-3xl font-bold text-green-400">
                      99.9%
                    </div>
                    <div className="text-gray-300">Uptime Record</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                    <div className="text-3xl font-bold text-green-400">
                      24/7
                    </div>
                    <div className="text-gray-300">Monitoring</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="relative w-full max-w-7xl mx-auto text-white py-16 z-0">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Skills & Expertise
                </h2>
                <div className="w-24 h-1 bg-green-400 mx-auto"></div>
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
                  <div
                    id="web-dev"
                    className="bg-gray-900 bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-8 hover:transform hover:-translate-y-2 hover:border-purple-400 hover:border-opacity-50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
                      <div className="mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-opacity-5 rounded-2xl p-6 border-l-4 border-cyan-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
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
                          {[
                            "React",
                            "Next.js",
                            "JavaScript",
                            "HTML5",
                            "CSS3",
                            "Tailwind",
                            "Bootstrap",
                          ].map((tech) => (
                            <motion.span
                              key={tech}
                              variants={itemVariants}
                              className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <motion.div
                            className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Backend Subsection */}
                      <div className="bg-gradient-to-r from-teal-700 via-emerald-400 to-green-400 bg-opacity-5 rounded-2xl p-6 border-l-4 border-green-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Backend Development
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            "Node.js",
                            "Express",
                            "Django",
                            "Flask",
                            "MongoDB",
                            "PostgreSQL",
                            "REST APIs",
                            "GraphQL",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <div
                            className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                            data-width="80%"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cybersecurity Card */}
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  <div
                    id="cy-sec"
                    className="bg-gray-900 bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-8 hover:transform hover:-translate-y-2 hover:border-purple-400 hover:border-opacity-50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-gray-800 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        🔒
                      </div>

                      <h2 className="text-2xl font-bold mb-4">Cybersecurity</h2>
                      <p className="text-gray-300 mb-8">
                        Implementing security best practices, conducting
                        vulnerability assessments, and protecting digital assets
                        from evolving threats.
                      </p>

                      <div className="bg-gradient-to-r from-[#612c00b9] to-red-500 bg-opacity-5 rounded-2xl p-6 border-l-4 border-red-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Security Specializations
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            "Penetration Testing",
                            "OWASP",
                            "Network Security",
                            "Vulnerability Assessment",
                            "Incident Response",
                            "Security Auditing",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <div
                            className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                            data-width="82%"
                            style={{ width: "82%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Python Development Card */}
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  <div
                    id="py-dev"
                    className="bg-gray-900 bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-8 hover:transform hover:-translate-y-2 hover:border-purple-400 hover:border-opacity-50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-yellow-400 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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

                      <div className="bg-gradient-to-r from-[#612c00b9] to-yellow-400 bg-opacity-5 rounded-2xl p-6 border-l-4 border-yellow-400 hover:bg-opacity-10 hover:translate-x-1 transition-all duration-300">
                        <h3 className="text-lg font-semibold mb-3">
                          Core Python & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            "Django",
                            "Flask",
                            "FastAPI",
                            "Pandas",
                            "NumPy",
                            "Requests",
                            "SQLAlchemy",
                            "PyQt",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-200 rounded-full text-sm border border-purple-400 border-opacity-30 hover:bg-opacity-40 hover:scale-105 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="w-full h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                          <div
                            className="proficiency-fill h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                            data-width="88%"
                            style={{ width: "88%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900/30 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Skills & Expertise
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">
                  Development
                </h3>
                <div className="space-y-4 ">
                  {skills.development.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="text-gray-300 text-lg">{skill}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">
                  Cybersecurity
                </h3>
                <div className="space-y-4">
                  {skills.cybersecurity.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="text-gray-300 text-lg">{skill}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="certifications" className="body-font">
          <Cetificates />
        </section>

        <section id="contact">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg">
                Ready to secure your next project? Let&apos;s build something
                extraordinary together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-green-400">ghulammohayudinmalik@gmail.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-green-400">
                  linkedin.com/in/ghulam-mohiudin-
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-green-400">
                  github.com/ghulammohayudinmalik
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 bg-black/50 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-colors transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
