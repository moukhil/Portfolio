import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, Award } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel bg-slate-900/95 border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-mono">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-300 border border-amber-500/30 font-medium flex items-center gap-1">
                <Award className="w-3 h-3" />
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-slate-400">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Project Image Banner */}
        {project.image && (
          <div className="mt-5 rounded-2xl overflow-hidden aspect-video bg-slate-800 border border-slate-700/60 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mt-6 space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Overview & Problem Solved
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Key Features & Architecture */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Key Features & Architecture</span>
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used */}
        <div className="mt-6 space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {(project.technologies || []).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveDemo && project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
