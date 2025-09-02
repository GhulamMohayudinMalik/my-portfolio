import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  Brain, 
  Database,
  CheckCircle,
  ExternalLink,
  Calendar,
  Building,
  Star,
  Zap
} from "lucide-react";

const certificates = [
  {
    name: "Certified in Cybersecurity",
    company: "ISC2",
    icon: Shield,
    color: "#FF6B6B",
    description:
      "Foundational knowledge of industry terminology, network security, security operations and policies and procedures.",
    issueDate: "Jan 2025",
    verifyLink: "https://coursera.org/share/b72d2f85ef6c29b1fe3a5043bd0e5dbd",
    category: "Security"
  },
  {
    name: "Certified Ethical Hacking (v12)",
    company: "LearnKartS",
    icon: Zap,
    color: "#4ECDC4",
    description: "Foundational understanding of CEH and its topics.",
    issueDate: "Jun 2025",
    verifyLink: "https://coursera.org/share/5690e2b0911c64e5e6740c60716b5e61",
    category: "Ethical Hacking"
  },
  {
    name: "AI For Everyone",
    company: "DeepLearning.AI",
    icon: Brain,
    color: "#9B59B6",
    description: "Foundational understanding of AI and its domains.",
    issueDate: "Jun 2025",
    verifyLink: "https://coursera.org/share/d874d0b6347709e6ace4100ca2b9fc91",
    category: "Artificial Intelligence"
  },
  {
    name: "What is Data Science?",
    company: "IBM",
    icon: Database,
    color: "#3498DB",
    description: "Understanding Data Science, its importance and usages.",
    issueDate: "Jun 2025",
    verifyLink: "https://coursera.org/share/7c65c9375ad085f0aad577ff5bd370c8",
    category: "Data Science"
  },
];

function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1.05,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const CertificationCard = ({ cert, index }) => {
    const IconComponent = cert.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        className="group relative h-full"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main Card */}
        <div className="relative h-full rounded-3xl bg-gray-900/60 backdrop-blur-none md:backdrop-blur-sm border border-gray-700/30 hover:border-green-400/50 p-8 transition-all duration-300 group overflow-hidden">
          
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div className="relative z-10">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-400 border border-green-400/30 mb-6">
              <Star size={12} className="mr-1" />
              {cert.category}
            </div>

            {/* Icon */}
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg border-2"
              style={{ 
                backgroundColor: `${cert.color}15`,
                borderColor: `${cert.color}40`,
                boxShadow: `0 8px 32px ${cert.color}20`
              }}
            >
              <IconComponent 
                size={32} 
                style={{ color: cert.color }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Certificate Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
              {cert.name}
            </h3>

            {/* Company */}
            <div className="flex items-center space-x-2 mb-4">
              <Building size={16} className="text-gray-400" />
              <span className="text-green-400 font-semibold text-sm">{cert.company}</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
              {cert.description}
            </p>

            {/* Issue Date */}
            <div className="flex items-center space-x-2 mb-6">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Issued: {cert.issueDate}</span>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Verification Badge */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center">
                  <CheckCircle size={14} className="text-green-400" />
                </div>
                <span className="text-green-400 text-xs font-medium">Verified</span>
              </div>

              {/* View Certificate Button */}
              {cert.verifyLink && (
                <motion.a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-green-400/20 hover:bg-green-400/30 border border-green-400/40 hover:border-green-400/60 rounded-xl text-green-400 hover:text-white text-xs font-semibold transition-all duration-300 group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.a>
              )}
            </div>
          </div>

        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <section id="certifications" className="py-20 bg-gray-900/30 relative z-20">
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
                    Credentials & Certifications
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="w-32 h-2 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full shadow-lg shadow-green-400/50"
                ></motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  Professional certifications validating expertise across cybersecurity, AI, and data science domains
                </motion.p>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex justify-center items-center space-x-8 mb-16"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{certificates.length}+</div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
                <div className="w-1 h-12 bg-gray-700 rounded-full"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Verified</div>
                </div>
                <div className="w-1 h-12 bg-gray-700 rounded-full"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">2025</div>
                  <div className="text-gray-400 text-sm">Latest Year</div>
                </div>
              </motion.div>

              {/* Certifications Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {certificates.map((cert, index) => (
                  <CertificationCard key={cert.name} cert={cert} index={index} />
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center mt-16"
              >
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-400/10 border border-green-400/30 rounded-full text-green-400">
                  <Award size={20} />
                  <span className="text-sm font-medium">Continuously expanding knowledge through professional development</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;