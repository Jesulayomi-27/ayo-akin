import React from "react";
import bgPicture from "../assets/pictures/bgPicture.jpeg";

export default function Hero() {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center relative"
      style={{
        backgroundImage: `url(${bgPicture})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60 transition-all duration-300"></div>
      
      <div className="relative z-10 bg-[#262626]/40 dark:bg-black/60 p-6 rounded-2xl max-w-4xl mx-4">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-widest text-white">
          AYOAKIN
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90 dark:text-gray-100">
          Video Creator & Visual Storyteller
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a 
            href="#reel" 
            className="bg-[#F56E0F] text-[#151419] px-6 py-3 rounded-full font-medium 
                      hover:opacity-90 dark:bg-[#F56E0F] dark:hover:bg-[#e65c00]
                      transition-all duration-200"
          >
            Watch Reel
          </a>
          <a 
            href="#portfolio" 
            className="px-6 py-3 rounded-full font-medium border-2
                      border-white/30 text-white hover:border-[#F56E0F]
                      dark:border-gray-500 dark:hover:border-[#F56E0F]
                      transition-all duration-200"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
