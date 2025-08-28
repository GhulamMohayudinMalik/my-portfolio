"use client";

import { useEffect, useState, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

const AnimatedNumber = ({ to, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once when in view

  useEffect(() => {
    if (!isInView) return; // Don't animate until in view

    const controls = animate(0, to, {
      duration: 2,
      onUpdate(val) {
        const displayValue = suffix === "%" ? val.toFixed(1) : Math.floor(val);
        setValue(displayValue);
      },
    });

    return () => controls.stop();
  }, [to, suffix, isInView]); // Add isInView as dependency

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

function About() {
  return (
    <div>
      <section id="about" className="py-20 relative z-10">
        <div className="py-24 sm:py-32">
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
                  With over 2 years of experience in full-stack development and
                  3 years specializing in cybersecurity, I bridge the gap
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
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedNumber to={15} />+
                  </div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedNumber to={5} />+
                  </div>
                  <div className="text-gray-300">Security Consultations</div>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedNumber to={99.7} suffix="%" />
                  </div>
                  <div className="text-gray-300">Uptime Record</div>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-colors">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default About;
