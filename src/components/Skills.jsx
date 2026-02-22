import React from "react";
import { 
  Camera, 
  Film, 
  Palette, 
  Music, 
  Video, 
  Zap,
  Sparkles,
  Star,
  Layers
} from "lucide-react";

export default function Skills() {
  const skills = [
    { 
      name: "CapCut", 
      category: "Editing",
      level: 95,
      icon: <Video size={20} />,
      color: "from-[#F56E0F] to-[#FF8C42]"
    },
    { 
      name: "Adobe Premiere Pro", 
      category: "Professional",
      level: 90,
      icon: <Film size={20} />,
      color: "from-[#1B1B1E] to-[#878787]"
    },
    { 
      name: "DaVinci Resolve", 
      category: "Color Grading",
      level: 85,
      icon: <Palette size={20} />,
      color: "from-[#F56E0F] to-[#FF8C42]"
    },
    { 
      name: "Cinematic Composition", 
      category: "Creative",
      level: 92,
      icon: <Camera size={20} />,
      color: "from-[#1B1B1E] to-[#878787]"
    },
    { 
      name: "Color Grading", 
      category: "Technical",
      level: 88,
      icon: <Palette size={20} />,
      color: "from-[#F56E0F] to-[#FF8C42]"
    },
    { 
      name: "Audio Design", 
      category: "Post-Production",
      level: 82,
      icon: <Music size={20} />,
      color: "from-[#1B1B1E] to-[#878787]"
    },
    { 
      name: "Motion Graphics", 
      category: "Creative",
      level: 78,
      icon: <Sparkles size={20} />,
      color: "from-[#F56E0F] to-[#FF8C42]"
    },
    { 
      name: "Visual Effects", 
      category: "Advanced",
      level: 75,
      icon: <Zap size={20} />,
      color: "from-[#1B1B1E] to-[#878787]"
    }
  ];

  const skillCategories = [
    { name: "Editing", count: 3, icon: <Video size={16} /> },
    { name: "Creative", count: 3, icon: <Sparkles size={16} /> },
    { name: "Technical", count: 2, icon: <Layers size={16} /> },
  ];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#FBFBFB] dark:bg-gray-900 py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-[#F56E0F]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-tl from-[#1B1B1E]/5 dark:from-white/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1B1B1E_1px,transparent_1px),linear-gradient(to_bottom,#1B1B1E_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
            <span className="text-sm font-medium text-[#878787] dark:text-gray-400 uppercase tracking-wider">
              Expertise
            </span>
            <div className="w-3 h-3 bg-[#F56E0F] rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1E] dark:text-white mb-6">
            Tools &{" "}
            <span className="relative">
              Craft
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42]"></span>
            </span>
          </h2>
          
          <p className="text-lg text-[#878787] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Mastering the art and science of visual storytelling through cutting-edge tools 
            and creative techniques.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group relative bg-white dark:bg-gray-800 border border-[#878787]/10 dark:border-gray-700 rounded-2xl p-6 shadow-sm dark:shadow-gray-800 hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Skill Level Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#878787]/10 dark:bg-gray-700 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Skill Icon and Name */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B1B1E] dark:text-white">{skill.name}</h3>
                    <span className="text-xs text-[#878787] dark:text-gray-400 font-medium">{skill.category}</span>
                  </div>
                </div>
                
                {/* Skill Level Badge */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#1B1B1E] dark:text-white">{skill.level}%</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={`${
                          i < Math.floor(skill.level / 20) 
                            ? "fill-[#F56E0F] text-[#F56E0F]" 
                            : "text-[#878787]/30 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#878787] dark:text-gray-400">Proficiency</span>
                  <span className="font-medium text-[#1B1B1E] dark:text-white">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-[#878787]/10 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Skill Description */}
              <p className="mt-4 text-sm text-[#878787] dark:text-gray-300 leading-relaxed">
                Expert in {skill.name.toLowerCase()} for creating compelling visual narratives 
                and engaging content experiences.
              </p>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1B1B1E] dark:text-white text-center mb-8">Skill Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <div 
                key={category.name}
                className="group relative bg-white dark:bg-gray-800 border border-[#878787]/10 dark:border-gray-700 rounded-full px-6 py-3 shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#F56E0F] group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <span className="font-medium text-[#1B1B1E] dark:text-white">{category.name}</span>
                  <span className="text-sm text-[#878787] dark:text-gray-300 bg-[#F56E0F]/10 dark:bg-[#F56E0F]/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Skills Tags */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1B1B1E] dark:text-white text-center mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Video Editing", "Color Grading", "Audio Mixing", "Storyboarding",
              "Cinematography", "Motion Graphics", "Visual Effects", "Sound Design",
              "Post Production", "Creative Direction", "Project Management", "Client Collaboration"
            ].map((skill) => (
              <div
                key={skill}
                className="group relative"
              >
                <div className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-[#878787]/10 dark:border-gray-700 rounded-full font-medium text-[#1B1B1E] dark:text-white hover:border-[#F56E0F]/30 hover:text-[#F56E0F] hover:shadow-lg dark:hover:shadow-gray-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F56E0F] rounded-full"></div>
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Section */}
        <div className="bg-white dark:bg-gray-800 border border-[#878787]/10 dark:border-gray-700 rounded-3xl p-8 shadow-sm dark:shadow-gray-800">
          <h3 className="text-2xl font-bold text-[#1B1B1E] dark:text-white text-center mb-8">
            Creative <span className="text-[#F56E0F]">Workflow</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Concept & Planning", desc: "Story development and pre-production" },
              { step: "02", title: "Production", desc: "Shooting and capturing footage" },
              { step: "03", title: "Post-Production", desc: "Editing and visual effects" },
              { step: "04", title: "Delivery", desc: "Final review and client handoff" }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#F56E0F]/10 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#F56E0F]">{item.step}</div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F56E0F] rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-[#1B1B1E] dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-[#878787] dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#878787] dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Every tool mastered, every skill honed—all dedicated to bringing your vision to life 
            with cinematic precision and creative excellence.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#F56E0F] to-[#FF8C42] text-white rounded-full font-semibold hover:shadow-xl dark:hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300">
            Let's Create Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
}
