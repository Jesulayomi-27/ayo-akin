import React from "react";
import pngjeo from "../assets/pictures/8594327.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <span className="inline-block text-sm font-semibold text-[#878787] dark:text-gray-400 tracking-wider uppercase transition-colors duration-300">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1B1B1E] dark:text-white leading-tight transition-colors duration-300">
                Crafting Visual Stories <span className="text-[#1B1B1E]/80 dark:text-white/80">That</span>{" "}
                <span className="relative inline-block">
                  Connect
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#1B1B1E]/20 dark:bg-white/20 transition-colors duration-300"></span>
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-[#878787] dark:text-gray-300 transition-colors duration-300">
                I'm <strong className="text-[#1B1B1E] dark:text-white font-semibold">Ayoakin</strong>, a Lagos-based video creator dedicated to transforming real moments into cinematic narratives. With a focus on authenticity and emotion, I collaborate with brands, agencies, and event planners to create visuals that resonate deeply and feel truly alive.
              </p>
              
              <p className="text-lg leading-relaxed text-[#878787] dark:text-gray-300 transition-colors duration-300">
                My approach blends technical precision with artistic vision, ensuring every frame tells a compelling story that captures the essence of the moment.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-[#1B1B1E] dark:text-white mb-6 transition-colors duration-300">
                Get In Touch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="group">
                    <p className="text-sm font-medium text-[#878787] dark:text-gray-400 mb-1 transition-colors duration-300">
                      Email
                    </p>
                    <a 
                      href="mailto:akinolaayotunde70@gmail.com" 
                      className="text-[#1B1B1E] dark:text-white font-medium hover:text-[#F56E0F] dark:hover:text-[#F56E0F] transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"
                    >
                      <span>akinolaayotunde70@gmail.com</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="group">
                    <p className="text-sm font-medium text-[#878787] dark:text-gray-400 mb-1 transition-colors duration-300">
                      Location
                    </p>
                    <p className="text-[#1B1B1E] dark:text-white font-medium transition-colors duration-300">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="group">
                    <p className="text-sm font-medium text-[#878787] dark:text-gray-400 mb-1 transition-colors duration-300">
                      Phone
                    </p>
                    <a 
                      href="tel:08136635925" 
                      className="text-[#1B1B1E] dark:text-white font-medium hover:text-[#F56E0F] dark:hover:text-[#F56E0F] transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"
                    >
                      <span>0813 663 5925</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="group">
                    <p className="text-sm font-medium text-[#878787] dark:text-gray-400 mb-1 transition-colors duration-300">
                      Availability
                    </p>
                    <p className="text-[#1B1B1E] dark:text-white font-medium transition-colors duration-300">
                      Available for projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#1B1B1E]/5 dark:from-white/5 to-transparent rounded-2xl -z-10 transition-all duration-300"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#1B1B1E]/5 dark:from-white/5 to-transparent rounded-2xl -z-10 transition-all duration-300"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl dark:shadow-gray-800/30 group transition-all duration-300">
                <img 
                  src={pngjeo} 
                  alt="Ayoakin - Video Creator" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1E]/10 dark:from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-4 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1B1B1E] dark:text-white transition-colors duration-300">
                    5+
                  </div>
                  <div className="text-sm text-[#878787] dark:text-gray-300 font-medium transition-colors duration-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}