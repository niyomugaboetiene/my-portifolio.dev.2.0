import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("https://niyomugaboetiene.onrender.com/send", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-black dark:to-gray-900 px-4 sm:px-6 py-8 sm:py-12 bg-white flex items-center justify-center"
    >
      <motion.div
        className="max-w-6xl w-full dark:bg-gray-800/70 rounded-xl bg-white border-2 dark:border-none shadow-lg p-6 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      > 
        <div className="space-y-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-cyan-500 mb-6 sm:mb-8 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In <span className="dark:text-white text-gray-800">Touch</span>
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="block mb-2 font-medium dark:text-gray-300 text-gray-600">
                Your Name
              </label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg dark:bg-gray-900/80 dark:text-white text-black border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="email" className="block mb-2 font-medium dark:text-gray-300 text-gray-600">
                Your Email
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg dark:bg-gray-900/80 dark:text-white text-black border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="message" className="block mb-2 font-medium dark:text-gray-300 text-gray-600">
                Your Message
              </label>
              <textarea 
                name="message" 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg dark:bg-gray-900/80 dark:text-white text-black border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 resize-none"
                placeholder="Write your message here..."
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 dark:bg-cyan-600 dark:hover:bg-cyan-700 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold text-white shadow-lg transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
            
            {submitStatus === "success" && (
              <motion.div
                className="dark:bg-green-900/50 bg-green-100 text-green-800 dark:text-green-100 rounded-lg p-3 text-center mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-100 rounded-lg p-3 text-center mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Failed to send message. Please try again later.
              </motion.div>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-center lg:pl-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-cyan-500 mb-6 sm:mb-8 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact <span className="dark:text-white text-gray-800">Info</span>
          </motion.h2>

          <motion.div 
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-cyan-600/20 rounded-full flex-shrink-0">
                <FaMapMarkerAlt className="text-cyan-400 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold dark:text-white text-gray-800 mb-1">Location</h3>
                <p className="dark:text-gray-300 text-gray-600 text-sm sm:text-base">Bugesera, Rwanda</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-cyan-600/20 rounded-full flex-shrink-0">
                <FaEnvelope className="text-cyan-400 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold dark:text-white text-gray-800 mb-1">Email</h3>
                <p className="dark:text-gray-300 text-gray-600 text-sm sm:text-base break-all">niyomugaboetiene53@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-cyan-600/20 rounded-full flex-shrink-0">
                <FaPhoneAlt className="text-cyan-400 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold dark:text-white text-gray-800 mb-1">Phone</h3>
                <p className="dark:text-gray-300 text-gray-600 text-sm sm:text-base">+250 796 878 992</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold dark:text-cyan-400 text-cyan-500 mb-3 sm:mb-4">Connect With Me</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-700 hover:bg-blue-600 rounded-full transition duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white text-base sm:text-xl" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-700 hover:bg-gray-900 rounded-full transition duration-300 flex items-center justify-center"
                aria-label="GitHub"
              >
                <FaGithub className="text-white text-base sm:text-xl" />
              </a>
              <a 
                href="https://wa.me/+250728184299" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-700 hover:bg-green-600 rounded-full transition duration-300 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-base sm:text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;