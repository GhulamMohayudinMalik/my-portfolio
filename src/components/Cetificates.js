import React from "react";
import {motion} from "framer-motion"

const certificates = [
  {
    name: "Certified in Cybersecurity",
    company: "ISC2",
    platformIcon: "/cousera.svg",
    description: "Foundational knowledge of industry terminology, network security, security operations and policies and procedures.",
    issueDate: "Jan 2025",
    verifyLink:
      "https://coursera.org/share/b72d2f85ef6c29b1fe3a5043bd0e5dbd",
  },
  {
    name: "Certified Ethical Hacking (v12)",
    company: "LearnKartS",
    platformIcon: "/cousera.svg",
    description: "Foundational understanding of CEH and its topics.",
    issueDate: "Jun 2025",
    verifyLink:
      "https://coursera.org/share/5690e2b0911c64e5e6740c60716b5e61",
  },
  {
    name: "AI For Everyone",
    company: "DeepLearning.AI",
    platformIcon: "/cousera.svg",
    description: "Foundational understanding of AI and its domains.",
    issueDate: "Jun 2025",
    verifyLink:
      "https://coursera.org/share/d874d0b6347709e6ace4100ca2b9fc91",
  },
  {
    name: "What is Data Science?",
    company: "IBM",
    platformIcon: "/cousera.svg",
    description: "Understanding Data Sciene, it's importance and usages.",
    issueDate: "Jun 2025",
    verifyLink:
      "https://coursera.org/share/7c65c9375ad085f0aad577ff5bd370c8",
  },
  
];

function Cetificates() {
  return (
    <div>
      <section id="certifications">
        <div className="py-24 sm:py-32">
          <div className="w-4/5 mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Certifications
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </motion.div>

            {/* Certifications Grid */}
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {certificates.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-2xl transition-all duration-300 border border-gray-100 bg-gray-900/50 backdrop-blur-sm"
                  >
                    <div className="p-8">
                      {/* Certificate Icon/Logo */}
                      <motion.div 
                        className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-400 text-white mb-6 group-hover:bg-green-500 transition-colors"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                      >
                        <svg
                          className="h-8 w-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </motion.div>

                      {/* Certificate Details */}
                      <h3 className="text-xl font-semibold text-gray-200 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-green-400 font-semibold mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {item.description}
                      </p>

                      {/* Certificate Info */}
                      <div className="flex items-center justify-between text-xs text-gray-300 mb-4">
                        <span>Issued: {item.issueDate}</span>
                        <span>
                          Valid Until:{" "}
                          {item.validUntill
                            ? item.validUntill
                            : "No Expiration"}
                        </span>
                      </div>

                      {/* Verification Badge and Certification Link*/}
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-2 text-green-400">
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                        {item.verifyLink ? (
                          <motion.a
                            href={item.verifyLink}
                            className="text-xs text-white font-bold border-green-400 border-2 hover:bg-green-600 hover:scale-105 p-1 rounded-md transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Certificate
                          </motion.a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cetificates;