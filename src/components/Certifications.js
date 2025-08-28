import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    name: "Certified in Cybersecurity",
    company: "ISC2",
    platformIcon: "/cousera.svg",
    description:
      "Foundational knowledge of industry terminology, network security, security operations and policies and procedures.",
    issueDate: "Jan 2025",
    verifyLink: "https://coursera.org/share/b72d2f85ef6c29b1fe3a5043bd0e5dbd",
  },
  {
    name: "Certified Ethical Hacking (v12)",
    company: "LearnKartS",
    platformIcon: "/cousera.svg",
    description: "Foundational understanding of CEH and its topics.",
    issueDate: "Jun 2025",
    verifyLink: "https://coursera.org/share/5690e2b0911c64e5e6740c60716b5e61",
  },
  {
    name: "AI For Everyone",
    company: "DeepLearning.AI",
    platformIcon: "/cousera.svg",
    description: "Foundational understanding of AI and its domains.",
    issueDate: "Jun 2025",
    verifyLink: "https://coursera.org/share/d874d0b6347709e6ace4100ca2b9fc91",
  },
  {
    name: "What is Data Science?",
    company: "IBM",
    platformIcon: "/cousera.svg",
    description: "Understanding Data Sciene, it's importance and usages.",
    issueDate: "Jun 2025",
    verifyLink: "https://coursera.org/share/7c65c9375ad085f0aad577ff5bd370c8",
  },
];

function Certifications() {
  return (
    <div>
      <section id="certifications">
        <div className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-6">
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
                  Credentials
                </h2>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-32 h-2 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full shadow-lg shadow-green-400/50"
              ></motion.div>
            </motion.div>

            {/* Certifications Grid */}
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {certificates.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-900/60 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="p-8">
                      {/* Certificate Icon/Logo */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-400 text-white mb-6 group-hover:bg-green-700 transition-colors">
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
                      </div>

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
                          <a
                            href={item.verifyLink}
                            className="text-xs text-white font-bold border-green-400 border-2 hover:bg-green-600 hover:scale-105 p-1 rounded-md"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Certificate
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;
