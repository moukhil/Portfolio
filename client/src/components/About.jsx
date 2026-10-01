import React from 'react';
import { GraduationCap, Briefcase, Award, Code, CheckCircle, Database, Layers } from 'lucide-react';

const About = ({ profile, education, experience, achievements }) => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Strong Foundations with Modern Web Scale
          </h2>
          <p className="text-base text-slate-400">
            A developer passionate about building reliable backend services, intuitive frontend experiences,
            and scalable database architectures.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a passionate software engineer currently in my final year of Bachelor of Technology in 
                <strong className="text-white"> Computer Science & Data Science</strong> at <strong className="text-cyan-300">Lords Institute of Engineering & Technology, Hyderabad</strong>, 
                holding a strong academic track record with an <strong className="text-emerald-400">8.14 CGPA</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My technical journey spans robust enterprise backends in <strong className="text-white">Java & Spring Boot</strong> alongside full-stack agile systems built with the <strong className="text-white">MERN stack (React.js, Node.js, Express.js, MongoDB)</strong> and <strong className="text-white">MySQL</strong>.
                I thrive in designing end-to-end architectures—from defining relational and document-based schemas to securing REST APIs with JWT and crafting seamless, modern user interfaces.
              </p>
            </div>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Enterprise Java Architecture</h4>
                  <p className="text-xs text-slate-400">OOP, Collections, Multithreading & Spring Boot</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Full-Stack MERN Engineering</h4>
                  <p className="text-xs text-slate-400">React.js, Node.js, Express & MongoDB</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Database Modeling</h4>
                  <p className="text-xs text-slate-400">Relational (MySQL) & NoSQL (MongoDB Atlas)</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Security & REST APIs</h4>
                  <p className="text-xs text-slate-400">JWT Authentication, RBAC & Clean Contracts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Milestone Badges */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Academic Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">B.Tech in CS & Data Science</h4>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                      8.14 CGPA
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Lords Institute of Engineering & Technology, Hyderabad</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-mono">2023 - 2026 • Final Year</p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">Machine Learning Intern</h4>
                    <span className="text-xs font-mono text-slate-400">Nov 2024 – Jan 2025</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">MANAC INFOTECH PRIVATE LIMITED, Hyderabad</p>
                  <p className="text-xs text-slate-400 mt-1">Hands-on experience in feature processing, data modeling, and ML evaluation.</p>
                </div>
              </div>
            </div>

            {/* Hackathon Achievement Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">Hackathon Winner</h4>
                    <span className="text-xs font-mono text-amber-400 font-bold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                      1st Place
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">E-Printing Full Stack Platform</p>
                  <p className="text-xs text-slate-400 mt-1">Recognized for architecting a production-ready printing ordering solution with React, Express & MongoDB.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
