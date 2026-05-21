import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Your EmailJS credentials
  const SERVICE_ID = 'service_jtz34an';
  const TEMPLATE_ID = 'template_pt1o0sd';
  const PUBLIC_KEY = 'DcoKl05zKhsU0jf6t';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      setStatus({ 
        type: 'success', 
        message: '✓ Message sent successfully! I\'ll get back to you soon.' 
      });
      
      // Reset form
      form.current.reset();
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ 
        type: 'error', 
        message: '✗ Failed to send message. Please try again or email me directly at akinolaayotunde70@gmail.com' 
      });
    } finally {
      setIsSending(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="bg-[#FBFBFB] dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#878787] dark:text-gray-400 uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full animate-pulse"></div>
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

        {/* Status Message */}
        {status.message && (
          <div className={`mb-6 p-4 rounded-xl ${
            status.type === 'success' 
              ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
              : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
          }`}>
            {status.message}
          </div>
        )}

        {/* Contact Form */}
        <form 
          ref={form}
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-[#878787]/10 dark:border-gray-700 shadow-sm dark:shadow-gray-800"
        >
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-[#1B1B1E] dark:text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-[#878787]/20 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/30 focus:border-[#F56E0F] transition-all duration-300 bg-[#FBFBFB] dark:bg-gray-900 text-[#1B1B1E] dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-[#1B1B1E] dark:text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
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
              required
              rows={4}
              placeholder="Share your vision, ideas, or project details..."
              className="w-full px-4 py-3 border border-[#878787]/20 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/30 focus:border-[#F56E0F] transition-all duration-300 bg-[#FBFBFB] dark:bg-gray-900 text-[#1B1B1E] dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3.5 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42] text-white font-semibold rounded-xl hover:shadow-lg dark:hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F56E0F]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSending ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Contact Info */}
        <footer className="text-center mt-12 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg mx-auto">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#878787] dark:text-gray-400">Email</p>
              <a 
                href="mailto:akinolaayotunde70@gmail.com" 
                className="text-[#1B1B1E] dark:text-white font-medium hover:text-[#F56E0F] transition-colors duration-300 text-sm"
              >
                akinolaayotunde70@gmail.com
              </a>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#878787] dark:text-gray-400">Phone</p>
              <a 
                href="tel:08136635925" 
                className="text-[#1B1B1E] dark:text-white font-medium hover:text-[#F56E0F] transition-colors duration-300 text-sm"
              >
                0813 663 5925
              </a>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#878787] dark:text-gray-400">Location</p>
              <p className="text-[#1B1B1E] dark:text-white font-medium text-sm">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="#" 
              className="text-[#878787] hover:text-[#F56E0F] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-[#878787] hover:text-[#F56E0F] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.315 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
              </svg>
            </a>
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