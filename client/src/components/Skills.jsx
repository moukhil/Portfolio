import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Cpu, 
  Wrench, 
  Check, 
  Sparkles,
  Terminal
} from 'lucide-react';

const Skills = ({ skillsData }) => {
  const [activeTab, setActiveTab] = useState('All');

  const categoryIcons = {
    'Programming Languages': Code2,
    'Backend Technologies': Server,
    'Frontend Technologies': Layout,
    'Databases & Storage': Database,
    'Core Java Engineering': Cpu,
    'Tools & CS Fundamentals': Wrench
  };

  const categories = ['All', ...(skillsData || []).map(c => c.category)];

  const filteredCategories = activeTab === 'All'
    ? (skillsData || [])
    : (skillsData || []).filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="text-base text-slate-400">
            Comprehensive foundation in enterprise Java, modern web development frameworks, and database architecture.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => {
            const Icon = categoryIcons[catGroup.category] || Terminal;
            return (
              <div
                key={catGroup.category || idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {catGroup.category}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    {catGroup.skills.map((skill, sIdx) => (
                      <div key={skill.name || sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {skill.tag}
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Verified Competency</span>
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Highlights Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div>
              <h4 className="text-sm font-bold text-white">Full-Stack Core Strengths</h4>
              <p className="text-xs text-slate-400">Java, Spring Boot, React.js, Node.js, Express.js, MySQL & MongoDB</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT'].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-700 font-mono">
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
