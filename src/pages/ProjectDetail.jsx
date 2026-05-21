import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/ProjectsData';
import { VideoCardSkeleton, ProjectHeaderSkeleton } from '../components/SkeletonLoader';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxVideo, setLightboxVideo] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (!project && !isLoading) {
      navigate('/all-projects');
    }
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [project, navigate, isLoading]);

  const isGoogleDrive = (url) => {
    return url && url.includes('drive.google.com');
  };

  const getGoogleDriveEmbedUrl = (url) => {
    const match = url?.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const openLightbox = (video) => {
    setLightboxVideo(video);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxVideo(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectHeaderSkeleton />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[1, 2].map(i => (
              <VideoCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!project) return null;

  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = projectsData[currentIndex - 1];
  const nextProject = projectsData[currentIndex + 1];

  return (
    <div className="min-h-screen bg-[#FBFBFB] dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-[#878787]/10 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <Link to="/all-projects" className="text-[#878787] hover:text-[#1B1B1E] dark:hover:text-white transition-colors flex items-center gap-2">
              <span>←</span> Back to Portfolio
            </Link>
            <div className="flex gap-4">
              {prevProject && (
                <Link to={`/project/${prevProject.id}`} className="text-[#878787] hover:text-[#1B1B1E] dark:hover:text-white transition-colors">
                  ← Previous
                </Link>
              )}
              {nextProject && (
                <Link to={`/project/${nextProject.id}`} className="text-[#878787] hover:text-[#1B1B1E] dark:hover:text-white transition-colors">
                  Next →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-medium text-[#878787] uppercase tracking-wider mb-2 block">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1B1E] dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-[#878787] dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="text-[#878787] dark:text-gray-400">
              <span className="font-medium text-[#1B1B1E] dark:text-white">{project.client}</span> — Client
            </div>
            <div className="text-[#878787] dark:text-gray-400">
              <span className="font-medium text-[#1B1B1E] dark:text-white">{project.year}</span> — Year
            </div>
            <div className="text-[#878787] dark:text-gray-400">
              <span className="font-medium text-[#1B1B1E] dark:text-white">{project.videos.length}</span> — Videos
            </div>
          </div>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1B1E] dark:text-white mb-4">
            Video Gallery
          </h2>
          <p className="text-[#878787] dark:text-gray-400 max-w-2xl mx-auto">
            Click any video to watch in full quality
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {project.videos.map((video) => (
            <div key={video.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative bg-gray-100 dark:bg-gray-900">
                  <iframe
                    src={getGoogleDriveEmbedUrl(video.src)}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                    loading="lazy"
                  />
                  
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-row gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42] rounded-full flex items-center justify-center text-white font-bold">
                      {String(video.id).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#1B1B1E] dark:text-white">
                        {video.title}
                      </h3>
                      <p className="text-sm text-[#878787] dark:text-gray-400">
                        {video.description}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openLightbox(video)}
                    className="w-full px-4 py-2 bg-[#1B1B1E] dark:bg-white text-white dark:text-[#1B1B1E] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    🔍 Watch Fullscreen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Section */}
      <div className="border-t border-[#878787]/10 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-[#1B1B1E] dark:text-white">
              Tools & Craft
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-[#878787] dark:text-gray-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1B1B1E] dark:bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether it's a personal project or a professional campaign, let's create something extraordinary.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-white text-[#1B1B1E] rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && lightboxVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-2xl">
              ✕
            </button>
            <iframe
              src={getGoogleDriveEmbedUrl(lightboxVideo.src)}
              className="w-full aspect-video rounded-lg shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={lightboxVideo.title}
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-semibold">{lightboxVideo.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{lightboxVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;