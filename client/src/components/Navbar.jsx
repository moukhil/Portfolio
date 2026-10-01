import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Database, Github, Linkedin, PlusCircle } from 'lucide-react';

const Navbar = ({ onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              SM
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Shaik Moukhil
              </span>
              <span className="hidden sm:block text-xs text-slate-400 font-mono">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all shadow-sm"
              title="Test live database CRUD operations"
            >
              <Database className="w-3.5 h-3.5" />
              <span>DB Admin Panel</span>
            </button>

            <a
              href="/Shaik_Moukhil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all shadow-sm"
            >
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/moukhil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/moukhil-shaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/moukhil_shaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors font-mono text-xs font-bold"
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-slate-800 text-cyan-400 border border-cyan-500/30"
            >
              <Database className="w-3 h-3" />
              <span>CRUD</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
            <a
              href="/Shaik_Moukhil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-cyan-300 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/moukhil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/moukhil-shaik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/moukhil_shaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
            >
              <Code2 className="w-4 h-4" /> LeetCode
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
