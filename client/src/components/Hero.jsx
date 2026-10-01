import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Phone, ExternalLink, Sparkles, Terminal, Award, Github, Linkedin, Code2 } from 'lucide-react';

const Hero = ({ profile }) => {
  const titles = [
    "Java Full Stack Developer",
    "Spring Boot & REST API Specialist",
    "React.js & Node.js Engineer",
    "B.Tech CSE (Data Science) @ Lords"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="gradient-text">Shaik Moukhil</span>
              </h1>
            </div>

            {/* Dynamic Typewriter */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <div className="font-mono text-lg sm:text-xl md:text-2xl text-slate-300 font-medium">
                <span>{displayedText}</span>
                <span className="animate-pulse text-cyan-400 font-bold ml-1">|</span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Aspiring Java Full Stack Developer with hands-on experience building responsive web applications
              and RESTful architectures using <strong className="text-white font-semibold">Java, Spring Boot, React.js, Node.js, Express.js, MySQL</strong>, and <strong className="text-white font-semibold">MongoDB</strong>.
              Passionate about solving real-world challenges through clean, maintainable, and high-performance software.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="/Shaik_Moukhil_Resume.pdf"
                download="Shaik_Moukhil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="https://github.com/moukhil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/moukhil-shaik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-cyan-400 hover:text-cyan-300 border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/moukhil_shaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-amber-400 hover:text-amber-300 border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all"
                title="LeetCode Profile"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>
            </div>

            {/* Quick Contact Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <a
                href="mailto:shaikmoukhil@gmail.com"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                shaikmoukhil@gmail.com
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="tel:+916301915182"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                +91 6301915182
              </a>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400">Hyderabad, India</span>
            </div>

          </div>

          {/* Right Column: Profile Portrait & Glass Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse-slow"></div>

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/60 p-3 max-w-[320px] sm:max-w-[340px] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900">
                  <img
                    src="/avatar.jpg"
                    alt="Shaik Moukhil - Java Full Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Overlaid Title Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-left">
                    <p className="text-white font-bold text-sm tracking-wide">Shaik Moukhil</p>
                    <p className="text-cyan-400 text-xs font-mono">B.Tech CS & Data Science (CGPA: 8.14)</p>
                  </div>
                </div>

                {/* Floating Achievement Badge */}
                <div className="mt-3 py-2 px-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-300 font-medium">Hackathon Winner</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 font-mono">
                    Sep 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">8.14</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">B.Tech CGPA</div>
            <div className="text-xs text-slate-400 mt-0.5">Lords Institute (CS & DS)</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">3+</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">Full-Stack Projects</div>
            <div className="text-xs text-slate-400 mt-0.5">React, Spring Boot, Node, Mongo</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">1st Place</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">Hackathon Champion</div>
            <div className="text-xs text-slate-400 mt-0.5">E-Printing Full Stack App</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-mono">12+</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">Core Tech & Tools</div>
            <div className="text-xs text-slate-400 mt-0.5">Full Stack Ecosystem</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
