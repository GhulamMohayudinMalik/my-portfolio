"use client"
import React from 'react'
import {motion} from "framer-motion"

function Contact() {
  return (
    <div>
      <section id="contact" className='py-20 bg-gray-900/30 relative z-10'>
        <div className="py-24 sm:py-32">
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
                <a href="mailto:ghulammohayudinmalik@gmail.com">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-green-400">Ghulam Mohayudin</p>
                </a>
              </div>
              <div className="text-center">
                <a href="https://linkedin.com/in/ghulam-mohiudin-">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-green-400">
                  Ghulam Mohayyudin
                </p>
                </a>
              </div>
              <div className="text-center">
                <a href="https://github.com/GhulamMohayudinMalik">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-green-400">
                  GhulamMohayudinMalik
                </p>
                </a>
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
                  className="w-full p-4 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 border border-green-400/30 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
