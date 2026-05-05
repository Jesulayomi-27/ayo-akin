import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video, playingStates, setPlayingStates }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleVideoClick = (e) => {
    e.stopPropagation();
    const videoElement = document.getElementById(`video-${video.id}`);
    if (videoElement) {
      if (videoElement.paused) {
        // Pause all other videos
        document.querySelectorAll('video').forEach(v => {
          if (v !== videoElement && !v.paused) {
            v.pause();
          }
        });
        videoElement.play();
        setPlayingStates(prev => ({ ...prev, [video.id]: true }));
      } else {
        videoElement.pause();
        setPlayingStates(prev => ({ ...prev, [video.id]: false }));
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/project/${video.id}`);
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
    >
      {/* Video Container */}
      <div className="relative overflow-hidden rounded-xl border border-[#878787]/20 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300">
        <video
          id={`video-${video.id}`}
          src={video.thumbnail}
          playsInline
          muted
          loop
          className="w-full h-64 md:h-80 object-cover"
          onClick={handleVideoClick}
        />
        
        {/* Play/Pause Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-lg md:text-xl font-bold text-[#1B1B1E] dark:text-white">
              {playingStates[video.id] ? '❚❚' : '▶'}
            </span>
          </div>
        </div>
        
        {/* Video Count Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-[#1B1B1E] dark:text-white rounded-full flex items-center gap-1">
            📹 {video.videos.length} videos
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-[#1B1B1E] dark:text-white rounded-full">
            {video.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg md:text-xl font-bold text-[#1B1B1E] dark:text-white mb-2">
          {video.title}
        </h3>
        <p className="text-sm text-[#878787] dark:text-gray-300 leading-relaxed">
          {video.description}
        </p>
        <div className="mt-3 flex items-center gap-3 text-xs text-[#878787] dark:text-gray-400">
          <span>📅 {video.year}</span>
          <span>•</span>
          <span>🎬 {video.videos.length} clips</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;