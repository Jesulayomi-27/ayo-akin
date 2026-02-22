import React, { useState } from "react";
import { Play, Volume2, Maximize2, Film } from "lucide-react";

export default function Reel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Replace with your actual YouTube video ID
  const youtubeVideoId = "your-youtube-video-id";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section id="reel" className="relative overflow-hidden bg-[#FBFBFB] dark:bg-gray-900 py-20 md:py-32">
      {/* Background Elements with Orange Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#1B1B1E]/5 dark:from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-[#1B1B1E]/5 dark:from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#F56E0F]/20 to-transparent"></div>
        
        {/* Orange Accent Dots */}
        <div className="absolute top-1/4 right-10 w-2 h-2 bg-[#F56E0F] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-[#F56E0F] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Orange Accent */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
            <span className="text-sm font-medium text-[#878787] dark:text-gray-400 uppercase tracking-wider">
              Showcase
            </span>
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1B1E] dark:text-white mb-6 leading-tight">
            Visual{" "}
            <span className="relative inline-block">
              Showcase
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F56E0F] via-[#FF8C42] to-transparent"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#878787] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my best cinematic work—each frame telling a story,
            each sequence evoking emotion, every project showcasing dedication to{" "}
            <span className="text-[#F56E0F] font-semibold">visual excellence</span>.
          </p>
        </div>

        {/* Video Player Container */}
        <div 
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl dark:shadow-gray-900/50 border border-[#878787]/10 dark:border-gray-700 bg-white dark:bg-gray-800 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Orange Accent Border on Hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F56E0F]/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
          
          {/* YouTube Iframe */}
          <div className="relative aspect-video bg-[#1B1B1E]">
            <iframe
              className="w-full h-full"
              src={youtubeEmbedUrl}
              title="Video Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Custom Play Button Overlay with Orange Accent */}
            {!isPlaying && (
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-[#1B1B1E]/90 via-[#1B1B1E]/50 to-transparent flex items-center justify-center transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button
                  onClick={handlePlayClick}
                  className="group/play relative w-24 h-24 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Orange Glow Effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#F56E0F]/20 animate-ping group-hover/play:animate-none"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#F56E0F]/30 group-hover/play:border-[#F56E0F] transition-all duration-500"></div>
                  
                  {/* Play Icon with Orange Fill on Hover */}
                  <div className="text-[#1B1B1E] dark:text-white transform group-hover/play:scale-110 transition-transform duration-300 group-hover/play:text-[#F56E0F]">
                    <Play size={40} fill="currentColor" />
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Video Controls Bar */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <button className="p-2 bg-[#F56E0F]/20 backdrop-blur-sm rounded-full hover:bg-[#F56E0F]/30 transition-colors duration-300 border border-[#F56E0F]/30">
                  {isPlaying ? (
                    <span className="text-white text-sm font-medium px-3">⏸ Pause</span>
                  ) : (
                    <span className="text-white text-sm font-medium px-3">▶ Play</span>
                  )}
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                  <Volume2 size={20} className="text-white" />
                </button>
              </div>
              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                <Maximize2 size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Video Info Badge with Orange Accent */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700 group/badge">
              <Film size={16} className="text-[#1B1B1E] dark:text-white group-hover/badge:text-[#F56E0F] transition-colors duration-300" />
              <span className="text-sm font-medium text-[#1B1B1E] dark:text-white group-hover/badge:text-[#F56E0F] transition-colors duration-300">
                4K HDR • Dolby Atmos
              </span>
              <div className="w-2 h-2 bg-[#F56E0F] rounded-full ml-1"></div>
            </div>
          </div>
        </div>

        {/* Description with Orange Accent */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F56E0F]/20 to-transparent rounded-lg blur opacity-30"></div>
            <p className="relative text-lg md:text-xl text-[#878787] dark:text-gray-300 leading-relaxed italic p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-[#878787]/10 dark:border-gray-700">
              "Stories told through motion, rhythm, and emotion—where every frame is intentional, 
              every transition meaningful, and every project a testament to{" "}
              <span className="text-[#F56E0F] font-semibold">cinematic excellence</span>."
            </p>
          </div>
          
        </div>

        {/* Orange Accent Divider */}
        <div className="mt-20 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <div className="h-px bg-gradient-to-r from-transparent via-[#F56E0F]/30 to-transparent"></div>
            <div className="flex justify-center -mt-3">
              <div className="w-6 h-6 bg-[#F56E0F] rounded-full border-4 border-[#FBFBFB] dark:border-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// #fff6ee,#f56e0f
