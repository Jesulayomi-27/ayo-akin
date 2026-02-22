import React from "react";
import { Film, Camera, Sparkles, CheckCircle, ArrowRight, Star, Zap, Award, Target, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cinematic Short-Form",
      desc: "Emotion-driven edits and visual storytelling that captivates audiences with powerful narratives and artistic vision.",
      icon: <Film size={24} />,
      features: ["Story-driven narratives", "Emotional pacing", "Artistic direction", "4K resolution"],
      color: "from-[#F56E0F] to-[#FF8C42]",
      price: "Starting at $500",
      projects: "50+ completed"
    },
    {
      title: "Event & Party Highlights",
      desc: "Capturing atmosphere, energy, and unforgettable moments with dynamic editing and vibrant storytelling.",
      icon: <Camera size={24} />,
      features: ["Dynamic multi-cam edits", "Vibrant color grading", "High-energy pacing", "Social media cuts"],
      color: "from-[#1B1B1E] to-[#878787]",
      price: "Starting at $800",
      projects: "80+ completed"
    },
    {
      title: "Brand Visuals",
      desc: "Story-first visual content for brands and campaigns that elevates identity and drives engagement.",
      icon: <Sparkles size={24} />,
      features: ["Brand identity focus", "Campaign storytelling", "Strategic messaging", "Multi-platform delivery"],
      color: "from-[#F56E0F] to-[#FF8C42]",
      price: "Starting at $1200",
      projects: "40+ completed"
    }
  ];

  const processSteps = [
    { number: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
    { number: "02", title: "Planning", desc: "Storyboarding and creative direction" },
    { number: "03", title: "Production", desc: "Shooting and content creation" },
    { number: "04", title: "Post-Production", desc: "Editing, effects, and refinement" },
    { number: "05", title: "Delivery", desc: "Final review and file delivery" },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#FBFBFB] dark:bg-gray-900 py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-bl from-[#F56E0F]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-[#1B1B1E]/5 dark:from-white/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Orange Accent Dots */}
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-[#F56E0F] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-[#F56E0F] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
            <span className="text-sm font-medium text-[#878787] dark:text-gray-400 uppercase tracking-wider">
              Services
            </span>
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1B1E] dark:text-white mb-6">
            What I{" "}
            <span className="relative inline-block">
              Do
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42]"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#878787] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming visions into compelling visual stories. Each service is crafted with cinematic precision 
            and creative passion to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white dark:bg-gray-800 border border-[#878787]/10 dark:border-gray-700 rounded-3xl p-8 shadow-lg dark:shadow-gray-800 hover:shadow-2xl dark:hover:shadow-gray-700 transition-all duration-500 hover:-translate-y-4 overflow-hidden h-full">
                {/* Floating Badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1.5 bg-gradient-to-r from-[#F56E0F]/10 to-transparent rounded-full border border-[#F56E0F]/20">
                    <span className="text-xs font-medium text-[#F56E0F]">{service.projects}</span>
                  </div>
                </div>

                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-[#1B1B1E] dark:text-white mb-4 group-hover:text-[#F56E0F] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#878787] dark:text-gray-300 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F56E0F]/10 flex items-center justify-center">
                        <CheckCircle size={12} className="text-[#F56E0F]" />
                      </div>
                      <span className="text-sm text-[#1B1B1E] dark:text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative max-w-2xl mx-auto p-8 bg-gradient-to-br from-[#F56E0F]/5 via-white dark:via-gray-800 to-[#F56E0F]/5 rounded-3xl border border-[#F56E0F]/20">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="px-4 py-1 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42] text-white rounded-full text-sm font-medium">
                Let's Work Together
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1B1B1E] dark:text-white mb-4">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-lg text-[#878787] dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Whether it's a personal project or a professional campaign, I'm here to help create something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42] text-white rounded-full font-semibold hover:shadow-xl dark:hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group/primary">
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover/primary:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-800 border border-[#878787]/20 dark:border-gray-700 text-[#1B1B1E] dark:text-white rounded-full font-medium hover:border-[#F56E0F]/30 hover:text-[#F56E0F] dark:hover:border-[#F56E0F]/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700 hover:-translate-y-1">
                View Pricing Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
