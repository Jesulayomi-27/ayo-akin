import React from 'react';

// Your custom skeleton loader design
export const VideoCardSkeleton = () => (
  <div className="flex flex-col gap-3">
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-64 md:h-80 rounded-xl"></div>
    <div className="flex flex-row gap-2">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-12 h-12 rounded-full"></div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-28 h-5 rounded-full"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-36 h-5 rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-4 rounded-full"></div>
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-3/4 h-4 rounded-full"></div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="relative h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
    <div className="text-center px-4 max-w-4xl mx-auto">
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-48 h-12 rounded-lg mx-auto mb-4"></div>
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-96 h-8 rounded-lg mx-auto mb-8"></div>
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-64 h-12 rounded-full mx-auto"></div>
    </div>
  </div>
);

export const AboutSkeleton = () => (
  <div className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-96 rounded-2xl"></div>
        <div className="space-y-4">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-24 h-4 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-3/4 h-10 rounded-lg"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-20 rounded-lg"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-20 rounded-lg"></div>
          <div className="flex gap-2">
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-20 h-8 rounded-full"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-24 h-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ReelSkeleton = () => (
  <div className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-24 h-4 rounded-full mx-auto mb-4"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-64 h-10 rounded-lg mx-auto mb-4"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-96 h-6 rounded-lg mx-auto"></div>
      </div>
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full aspect-video rounded-2xl"></div>
    </div>
  </div>
);

export const StatsSkeleton = () => (
  <div className="grid grid-cols-4 gap-4 md:gap-6">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="text-center">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-16 h-8 rounded-lg mx-auto mb-2"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-20 h-4 rounded-full mx-auto"></div>
      </div>
    ))}
  </div>
);

export const SkillsSkeleton = () => (
  <div className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-32 h-10 rounded-lg mx-auto mb-4"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-96 h-6 rounded-lg mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse bg-gray-300 dark:bg-gray-700 h-20 rounded-xl"></div>
        ))}
      </div>
    </div>
  </div>
);

export const ServicesSkeleton = () => (
  <div className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-32 h-10 rounded-lg mx-auto mb-4"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-96 h-6 rounded-lg mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse bg-gray-300 dark:bg-gray-700 h-48 rounded-xl"></div>
        ))}
      </div>
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-32 h-10 rounded-lg mx-auto mb-4"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-64 h-6 rounded-lg mx-auto"></div>
      </div>
      <div className="space-y-6">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-12 rounded-xl"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-12 rounded-xl"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-32 rounded-xl"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-12 rounded-xl"></div>
      </div>
    </div>
  </div>
);

export const ProjectHeaderSkeleton = () => (
  <div className="text-center max-w-3xl mx-auto">
    <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-24 h-4 rounded-full mx-auto mb-4"></div>
    <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-3/4 h-12 rounded-lg mx-auto mb-4"></div>
    <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-20 rounded-lg mx-auto"></div>
    <div className="flex flex-row justify-center gap-6 mt-8">
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-20 h-8 rounded-full"></div>
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-20 h-8 rounded-full"></div>
      <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-20 h-8 rounded-full"></div>
    </div>
  </div>
);

export default VideoCardSkeleton;