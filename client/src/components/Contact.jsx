import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Code2, MessageSquare } from 'lucide-react';
import { sendContactMessage } from '../services/api';

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await sendContactMessage(formData);
      if (res.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been stored in the database and sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: res.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Failed to connect to backend server. Please contact directly via email.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-400">
            Have a project in mind, an opportunity, or want to discuss full-stack software development? Let's talk!
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to reach out directly through any of the channels below or fill in the form.
                I respond promptly to inquiries regarding software engineering roles and collaboration.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:shaikmoukhil@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email</span>
                    <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                      shaikmoukhil@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+916301915182"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Phone / WhatsApp</span>
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                      +91 6301915182
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="text-sm font-medium text-white">
                      Hyderabad, Telangana, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Online Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/moukhil-shaik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/moukhil-shaik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://leetcode.com/u/moukhil_shaik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all font-bold text-xs"
                    title="LeetCode Profile"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/916301915182?text=Hello%20Shaik%20Moukhil,%20I%20reviewed%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xs flex items-center gap-1.5 font-medium"
                    title="WhatsApp Direct"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Backend-Connected Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Saved directly to database via REST API
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                  POST /api/contact
                </span>
              </div>

              {/* Status Banner */}
              {status.message && (
                <div
                  className={`mt-6 p-4 rounded-xl flex items-start gap-3 text-sm ${status.type === 'success'
                      ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
                    }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity for Full Stack Developer"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                    Message Content *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Shaik, I came across your portfolio and would like to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Sending & Saving...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
