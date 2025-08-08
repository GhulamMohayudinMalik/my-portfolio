import React from 'react'
import {motion} from "framer-motion"

function Intro() {
  return (
    <div>
      <section id="intro"
          className="min-h-screen flex items-center justify-center relative z-10 my-16"
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
                  <a href="https://drive.google.com/file/d/1_ctYOwgCkPscAvPzcTYBcnxciRhaVfKQ/view?usp=sharing">View CV</a>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </div>
  )
}

export default Intro
