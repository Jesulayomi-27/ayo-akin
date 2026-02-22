import React, { useRef, useState } from "react";
import video1 from "../assets/videos/bgVideo.mp4";
import video2 from "../assets/videos/bgVideo.mp4";
import video3 from "../assets/videos/bgVideo.mp4";

export default function Portfolio() {
  const [playingStates, setPlayingStates] = useState([false, false, false]);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const works = [
    { 
      title: "Cinematic Short Film", 
      file: video1,
      category: "Narrative",
      description: "A visual story capturing emotional depth through cinematic techniques"
    },
    { 
      title: "Event Highlight Video", 
      file: video2,
      category: "Event",
      description: "Dynamic coverage of a corporate event with engaging storytelling"
    },
    { 
      title: "Brand Visual Story", 
      file: video3,
      category: "Commercial",
      description: "Brand identity expressed through compelling visual narrative"
    }
  ];

  // Function to toggle play/pause for a video
  const handleVideoClick = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setPlayingStates(prev => prev.map((state, i) => i === index ? true : state));
      } else {
        videoElement.pause();
        setPlayingStates(prev => prev.map((state, i) => i === index ? false : state));
      }
    }
  };

  return (
    <section id="portfolio" className="bg-[#FBFBFB] dark:bg-gray-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-[#878787] dark:text-gray-400 uppercase tracking-wider mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1B1E] dark:text-white mb-4 md:mb-6">
            Selected Works
          </h2>
          <p className="text-base md:text-lg text-[#878787] dark:text-gray-300 max-w-2xl mx-auto">
            A curated collection of visual stories that showcase my approach to cinematic storytelling
          </p>
        </div>

        {/* Portfolio Grid - Simplified */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {works.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Container */}
              <div 
                className="relative overflow-hidden rounded-xl border border-[#878787]/20 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-800 hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-300"
                onClick={() => handleVideoClick(index)}
              >
                {/* Video */}
                <video
                  id={`video-${index}`}
                  src={item.file}
                  playsInline
                  muted
                  loop
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                {/* Play/Pause Overlay */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredVideo === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-xl font-bold text-[#1B1B1E] dark:text-white">
                      {playingStates[index] ? '❚❚' : '▶'}
                    </span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-[#1B1B1E] dark:text-white rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-bold text-[#1B1B1E] dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#878787] dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-[#878787]/10 dark:border-gray-700">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "50+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
                { value: "4K/1080P", label: "Quality" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#1B1B1E] dark:text-white mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[#878787] dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-8 md:mt-12">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-[#1B1B1E] dark:bg-white text-white dark:text-[#1B1B1E] rounded-full font-medium hover:bg-[#1B1B1E]/90 dark:hover:bg-white/90 transition-colors duration-300 text-sm md:text-base">
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

