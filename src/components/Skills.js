"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Shield, 
  Code2, 
  Database,
  Search,
  AlertTriangle,
  Zap,
  BarChart3,
  Layers,
  Atom,
  Palette,
  Box,
  Activity,
  Network,
  Bug,
  Eye,
  Braces,
  FileCode,
  Cpu,
  GitBranch,
  Monitor,
} from "lucide-react";

// Constants moved outside component for better performance
const SKILLS_DATA = {
  frontend: [
    { name: "React", icon: Atom, color: "#61DAFB" },
    { name: "Next.js", icon: Layers, color: "#000000" },
    { name: "JavaScript", icon: Braces, color: "#F7DF1E" },
    { name: "HTML5", icon: Globe, color: "#E34F26" },
    { name: "CSS3", icon: Palette, color: "#1572B6" },
    { name: "Tailwind", icon: Zap, color: "#06B6D4" },
    { name: "Bootstrap", icon: Box, color: "#7952B3" },
  ],
  backend: [
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "Express", icon: Activity, color: "#000000" },
    { name: "Django", icon: Code2, color: "#04754b" },
    { name: "Flask", icon: FileCode, color: "#000000" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "REST APIs", icon: Network, color: "#00D9FF" },
    { name: "GraphQL", icon: GitBranch, color: "#E10098" },
  ],
  cybersecurity: [
    { name: "Penetration Testing", icon: Bug, color: "#FF6B6B" },
    { name: "OWASP Top 10", icon: Shield, color: "#4ECDC4" },
    { name: "Network Security", icon: Network, color: "#45B7D1" },
    { name: "Vulnerability Assessment", icon: AlertTriangle, color: "#FFA07A" },
    { name: "Incident Response", icon: Eye, color: "#98D8C8" },
    { name: "Security Auditing", icon: Search, color: "#A8E6CF" },
  ],
  python: [
    { name: "Django", icon: Code2, color: "#04754b" },
    { name: "Flask", icon: FileCode, color: "#000000" },
    { name: "FastAPI", icon: Zap, color: "#009688" },
    { name: "Pandas", icon: BarChart3, color: "#150458" },
    { name: "NumPy", icon: Cpu, color: "#013243" },
    { name: "Requests", icon: Globe, color: "#FF6B6B" },
    { name: "SQLAlchemy", icon: Database, color: "#D71F00" },
    { name: "PyQt", icon: Monitor, color: "#41CD52" },
  ],
};

// Memoized SkillCard component for better performance
const SkillCard = React.memo(({ skill, index }) => {
  const IconComponent = skill.icon;
  
  return (
    <div className="group relative bg-gray-800/40 border border-gray-700/40 rounded-2xl p-4 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg border-2"
          style={{ 
            backgroundColor: `${skill.color}15`,
            borderColor: `${skill.color}40`
          }}
          role="img"
          aria-label={`${skill.name} technology icon`}
        >
          <IconComponent 
            size={28} 
            style={{ color: skill.color }}
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </span>
      </div>
      
      {/* Animated border effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
        style={{ backgroundColor: skill.color }}
      ></div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

// Reusable ProgressBar component
const ProgressBar = React.memo(({ percentage, delay = 0.4 }) => (
  <div className="mt-6">
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-400">Proficiency</span>
      <span className="text-green-400 font-semibold">{percentage}%</span>
    </div>
    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-sm"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut", delay }}
      />
    </div>
  </div>
));

ProgressBar.displayName = 'ProgressBar';

function Skills() {
  // Memoize skills to prevent recreating objects on each render
  const skills = useMemo(() => SKILLS_DATA, []);

  return (
    <div>
      <section id="skills" className="py-20 bg-gray-900/30 relative z-20">
        <div className="py-24 sm:py-32">
          <div className="relative w-full max-w-7xl mx-auto px-6 text-white">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="text-center mb-20"
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotate: 2 }}
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
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  Transforming ideas into reality with cutting-edge technologies
                </motion.p>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Web Development Card */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="lg:col-span-2"
                >
                  <div className="rounded-3xl bg-gray-900/60 p-8 border-2 border-gray-700/30 hover:border-green-400/30 hover:transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-green-400/30">
                        🌐
                      </div>

                      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Full Stack Web Development
                      </h2>
                      
                      <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                        Creating modern, responsive web applications with seamless user experiences and robust backend architectures.
                      </p>

                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {/* Frontend Subsection */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3 mb-6">
                            <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                            <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.frontend.map((skill, index) => (
                              <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                          </div>

                          <ProgressBar percentage={90} />
                        </div>

                        {/* Backend Subsection */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3 mb-6">
                            <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                            <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.backend.map((skill, index) => (
                              <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                          </div>

                          <ProgressBar percentage={87} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cybersecurity Card */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="rounded-3xl bg-gray-900/60 p-8 border-2 border-gray-700/30 hover:border-green-400/30 hover:transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-green-400/30">
                        🔒
                      </div>

                      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Cybersecurity
                      </h2>
                      
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        Implementing security best practices and protecting digital assets from evolving threats.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                          <h3 className="text-xl font-semibold text-white">Security Specializations</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {skills.cybersecurity.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                          ))}
                        </div>

                        <ProgressBar percentage={89} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Python Development Card */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="rounded-3xl bg-gray-900/60 p-8 border-2 border-gray-700/30 hover:border-green-400/30 hover:transform hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-green-400/30">
                        🐍
                      </div>

                      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Python Development
                      </h2>
                      
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        Building scalable applications, data analysis tools, and automation solutions.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                          <h3 className="text-xl font-semibold text-white">Core Python & Frameworks</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {skills.python.map((skill, index) => (
                            <SkillCard key={skill.name} skill={skill} index={index} />
                          ))}
                        </div>

                        <ProgressBar percentage={88} />
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