import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { projectsData } from '../data/ProjectsData';

const AllProjects = () => {
  const [playingStates, setPlayingStates] = useState({});
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFB] dark:bg-gray-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-[#878787] hover:text-[#1B1B1E] dark:hover:text-white mb-6 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1B1B1E] dark:text-white mb-4">
            Video Projects
          </h1>
        </div>

        {/* Stats Bar */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-[#878787] dark:text-gray-400">Total Projects</span>
              <div className="text-2xl font-bold text-[#1B1B1E] dark:text-white">{projectsData.length}</div>
            </div>
            <div>
              <span className="text-sm text-[#878787] dark:text-gray-400">Total Videos</span>
              <div className="text-2xl font-bold text-[#1B1B1E] dark:text-white">
                {projectsData.reduce((total, project) => total + project.videos.length, 0)}
              </div>
            </div>
            <div>
              <span className="text-sm text-[#878787] dark:text-gray-400">Categories</span>
              <div className="text-2xl font-bold text-[#1B1B1E] dark:text-white">{categories.length - 1}</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#1B1B1E] dark:bg-white text-white dark:text-[#1B1B1E]'
                    : 'bg-gray-200 dark:bg-gray-700 text-[#878787] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-[#878787]/20 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#1B1B1E] dark:text-white focus:outline-none focus:border-[#1B1B1E] dark:focus:border-white w-full md:w-64"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#878787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Projects Count */}
        <div className="mb-6 text-right">
          <p className="text-sm text-[#878787] dark:text-gray-400">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map(project => (
              <VideoCard
                key={project.id}
                video={project}
                playingStates={playingStates}
                setPlayingStates={setPlayingStates}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-[#1B1B1E] dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-[#878787] dark:text-gray-400">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;