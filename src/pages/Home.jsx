import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Reel from '../components/Reel';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';
import { HeroSkeleton, AboutSkeleton, ReelSkeleton, SkillsSkeleton, ServicesSkeleton, ContactSkeleton } from '../components/SkeletonLoader';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] dark:bg-gray-900">
        <HeroSkeleton />
        <AboutSkeleton />
        <ReelSkeleton />
        <SkillsSkeleton />
        <ServicesSkeleton />
        <ContactSkeleton />
        <ThemeToggle />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Reel />
      <Portfolio />
      <Skills />
      <Services />
      <Contact />
      <ThemeToggle />
    </div>
  );
}

export default Home;