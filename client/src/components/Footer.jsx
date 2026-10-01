import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Terminal } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              SM
            </div>

            <div>
              <p className="font-bold text-white">Shaik Moukhil</p>
              <p className="text-xs text-slate-400 font-mono">
                Java Full Stack Developer • Hyderabad, India
              </p>
            </div>
          </div>

          {/* Center: Tech Badge */}
          <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              Built with React.js, Tailwind, Node.js, Express & MongoDB
            </span>
          </div>

          {/* Socials & Top Scroll */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/moukhil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/moukhil-shaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://leetcode.com/u/moukhil_shaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-900 transition-colors"
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Shaik Moukhil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;