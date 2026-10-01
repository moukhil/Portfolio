import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles, Plus, Award, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = ({ projects, onOpenAdmin }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack (MERN)', 'Java & Spring Boot'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production & Hackathon Projects
            </h2>
            <p className="text-base text-slate-400">
              Real-world systems engineered with clean design patterns, secure REST APIs, and full-stack integration.
            </p>
          </div>

          {/* Action Trigger for Project Manager */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-900 text-cyan-300 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-sm"
            >
              <Plus className="w-4 h-4 text-cyan-400" />
              <span>Add / Manage via API</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id || project.id}
              className="glass-panel rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Badges on Banner */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-slate-700">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.subtitle && (
                    <p className="text-xs font-medium text-slate-400 font-mono">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {(project.technologies || []).slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies || []).length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900/50 text-slate-400 font-mono">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveDemo && project.liveDemo !== '#' && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm shadow-cyan-500/20 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal display when a project is selected */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
