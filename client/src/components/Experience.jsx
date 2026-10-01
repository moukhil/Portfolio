import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = ({ education, experience, achievements }) => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            Career & Academic Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-base text-slate-400">
            A track record of consistent academic distinction, internship impact, and hackathon execution.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: Experience & Achievements */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
              
              {/* MANAC Infotech Intern */}
              {(experience || []).map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />
                  
                  <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 group-hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mt-2">
                      {exp.role}
                    </h4>
                    
                    <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.company}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3">
                      {exp.description}
                    </p>

                    {exp.skillsGained && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/60">
                        {exp.skillsGained.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Hackathon Achievement Item */}
              {(achievements || []).map((ach, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />
                  
                  <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 bg-amber-950/10 group-hover:border-amber-500/40 transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                        <Award className="w-4 h-4" />
                        {ach.date}
                      </span>
                      <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-500/30">
                        1st Place
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-2">
                      {ach.title}
                    </h4>

                    <p className="text-xs text-amber-200/80 mt-1">
                      {ach.issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Column 2: Education Progression */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education History</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
              {(education || []).map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                  <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 group-hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                      {edu.degree}
                    </h4>

                    <p className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.institution}, {edu.location}
                    </p>

                    {edu.highlights && (
                      <ul className="mt-3 space-y-1.5 pt-2 border-t border-slate-800/60">
                        {edu.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-cyan-400">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
