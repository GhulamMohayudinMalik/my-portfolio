"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

// Constants moved outside component for better performance
const CONTACT_INFO = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    value: 'Ghulam Mohayudin',
    link: 'mailto:ghulammohayudinmalik@gmail.com',
    color: '#FF6B6B',
    description: 'ghulammohayudinmalik@gmail.com'
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Ghulam Mohayyudin',
    link: 'https://linkedin.com/in/ghulam-mohiudin-',
    color: '#0077B5',
    description: 'Connect with me professionally'
  },
  {
    id: 'github',
    icon: Github,
    title: 'GitHub',
    value: 'GhulamMohayudinMalik',
    link: 'https://github.com/GhulamMohayudinMalik',
    color: '#333333',
    description: 'Check out my projects'
  }
];

const ADDITIONAL_INFO = [
  {
    icon: Phone,
    title: 'Phone',
    value: 'Available on request',
    color: '#10B981'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Bahawalpur, Pakistan',
    color: '#8B5CF6'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '24 hours',
    color: '#F59E0B'
  }
];

// Memoized ContactCard component - smaller version
const ContactCard = React.memo(({ contact }) => {
  const IconComponent = contact.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", bounce: 0.4 }}
      className="group"
    >
      <a 
        href={contact.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-700/30 hover:border-green-400/60 transition-all duration-300 group relative overflow-hidden h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10 text-center">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg border-2"
              style={{ 
                backgroundColor: `${contact.color}15`,
                borderColor: `${contact.color}40`
              }}
            >
              <IconComponent 
                size={24} 
                style={{ color: contact.color }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
              {contact.title}
            </h3>
            <p className="text-green-400 font-medium text-sm">{contact.value}</p>
          </div>

          {/* Animated border effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"
            style={{ backgroundColor: contact.color }}
          ></div>
        </div>
      </a>
    </motion.div>
  );
});

ContactCard.displayName = 'ContactCard';

// Memoized InfoCard component
const InfoCard = React.memo(({ info }) => {
  const IconComponent = info.icon;
  
  return (
    <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/40 hover:border-green-400/30 transition-all duration-300 group">
      <div className="flex items-center space-x-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{ 
            backgroundColor: `${info.color}15`,
          }}
        >
          <IconComponent 
            size={20} 
            style={{ color: info.color }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-white">{info.title}</h4>
          <p className="text-gray-400 text-sm">{info.value}</p>
        </div>
      </div>
    </div>
  );
});

InfoCard.displayName = 'InfoCard';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Memoize contact info to prevent recreating objects
  const contactInfo = useMemo(() => CONTACT_INFO, []);
  const additionalInfo = useMemo(() => ADDITIONAL_INFO, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call (replace with your actual email service)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Fallback to mailto for now
      const mailtoLink = `mailto:ghulammohayudinmalik@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div>
      <section id="contact" className="py-20 bg-gray-900/30 relative z-10">
        <div className="py-24 sm:py-32">
          <div className="relative w-full max-w-7xl mx-auto px-6 text-white">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="text-center mb-20"
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                    Get In Touch
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
                  Ready to secure your next project? Let&apos;s build something extraordinary together.
                </motion.p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {/* Contact Links - Top Row */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                  {contactInfo.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-16"
                >
                  <div className="bg-gray-900/60 p-8 rounded-3xl border border-gray-700/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-500/5 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Send me a message</h3>
                      
                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
                        >
                          <CheckCircle className="text-green-400" size={20} />
                          <span className="text-green-400 font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
                        >
                          <AlertCircle className="text-red-400" size={20} />
                          <span className="text-red-400 font-medium">Failed to send message. Please try again or contact me directly.</span>
                        </motion.div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your Name"
                              required
                              className="w-full p-4 bg-gray-800/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Your Email"
                              required
                              className="w-full p-4 bg-gray-800/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            required
                            className="w-full p-4 bg-gray-800/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                          />
                        </div>
                        
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="6"
                            placeholder="Your Message"
                            required
                            className="w-full p-4 bg-gray-800/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none"
                          ></textarea>
                        </div>
                        
                        <div className="text-center">
                          <motion.button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            whileHover={isFormValid && !isSubmitting ? { scale: 1.05 } : {}}
                            whileTap={isFormValid && !isSubmitting ? { scale: 0.95 } : {}}
                            className={`px-12 py-4 rounded-xl font-bold transition-all duration-300 flex items-center space-x-3 mx-auto ${
                              isFormValid && !isSubmitting
                                ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-400/30 hover:shadow-green-400/50'
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send size={20} />
                                <span>Send Message</span>
                              </>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-gray-900/60 p-8 rounded-3xl border border-gray-700/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-500/5 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Additional Information</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        {additionalInfo.map((info, index) => (
                          <InfoCard key={index} info={info} />
                        ))}
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

export default Contact;