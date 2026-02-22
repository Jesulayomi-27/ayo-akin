import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-[#FBFBFB] dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
            <span className="text-sm font-medium text-[#878787] dark:text-gray-400 uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1E] dark:text-white mb-4">
            Let's Create{" "}
            <span className="relative">
              Together
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42]"></span>
            </span>
          </h2>
          
          <p className="text-lg text-[#878787] dark:text-gray-300 max-w-lg mx-auto">
            If it deserves to be remembered, I'll turn it into film.
          </p>
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-[#878787]/10 dark:border-gray-700 shadow-sm dark:shadow-gray-800"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1B1B1E] dark:text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-[#878787]/20 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/30 focus:border-[#F56E0F] transition-all duration-300 bg-[#FBFBFB] dark:bg-gray-900 text-[#1B1B1E] dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1B1B1E] dark:text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-[#878787]/20 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/30 focus:border-[#F56E0F] transition-all duration-300 bg-[#FBFBFB] dark:bg-gray-900 text-[#1B1B1E] dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1B1B1E] dark:text-white mb-2">
              Tell me about your project
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Share your vision, ideas, or project details..."
              className="w-full px-4 py-3 border border-[#878787]/20 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/30 focus:border-[#F56E0F] transition-all duration-300 bg-[#FBFBFB] dark:bg-gray-900 text-[#1B1B1E] dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42] text-white font-semibold rounded-xl hover:shadow-lg dark:hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/50"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <footer className="text-center mt-12 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#878787] dark:text-gray-400">Email</p>
              <a 
                href="mailto:akinolaayotunde70@gmail.com" 
                className="text-[#1B1B1E] dark:text-white font-medium hover:text-[#F56E0F] transition-colors duration-300"
              >
                akinolaayotunde70@gmail.com
              </a>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#878787] dark:text-gray-400">Phone</p>
              <a 
                href="tel:08136635925" 
                className="text-[#1B1B1E] dark:text-white font-medium hover:text-[#F56E0F] transition-colors duration-300"
              >
                0813 663 5925
              </a>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#878787] dark:text-gray-400">Location</p>
              <p className="text-[#1B1B1E] dark:text-white font-medium">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Divider */}
          <div className="pt-8 border-t border-[#878787]/10 dark:border-gray-700">
            <p className="text-sm text-[#878787] dark:text-gray-400">
              © {new Date().getFullYear()} Ayoakin. All visual stories captured with passion.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}