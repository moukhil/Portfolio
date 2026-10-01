import React, { useState, useEffect } from 'react';
import { X, Plus, MessageSquare, Database, Trash2, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { createProject, getMessages, deleteMessage } from '../services/api';

const AdminModal = ({ isOpen, onClose, onProjectCreated }) => {
  const [activeTab, setActiveTab] = useState('addProject'); // 'addProject' | 'messages'

  // Add Project Form State
  const [projectForm, setProjectForm] = useState({
    title: '',
    subtitle: '',
    category: 'Full Stack (MERN)',
    description: '',
    highlights: '',
    technologies: '',
    liveDemo: '',
    github: '',
    badge: ''
  });
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectStatus, setProjectStatus] = useState({ type: '', message: '' });

  // Messages State
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(false);

  useEffect(() => {
    if (isOpen && activeTab === 'messages') {
      fetchInboxMessages();
    }
  }, [isOpen, activeTab]);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  const fetchInboxMessages = async () => {
    setMessagesLoading(true);
    try {
      const res = await getMessages();
      if (res.success) {
        setMessages(res.data || []);
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setMessagesLoading(false);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    setProjectLoading(true);
    setProjectStatus({ type: '', message: '' });

    try {
      const res = await createProject(projectForm);
      if (res.success) {
        setProjectStatus({
          type: 'success',
          message: 'Project created and stored in the database successfully!'
        });
        setProjectForm({
          title: '',
          subtitle: '',
          category: 'Full Stack (MERN)',
          description: '',
          highlights: '',
          technologies: '',
          liveDemo: '',
          github: '',
          badge: ''
        });
        if (onProjectCreated) {
          onProjectCreated(res.data);
        }
      } else {
        setProjectStatus({
          type: 'error',
          message: res.message || 'Failed to create project.'
        });
      }
    } catch (err) {
      console.error('Error creating project:', err);
      setProjectStatus({
        type: 'error',
        message: err.response?.data?.message || 'Server error creating project.'
      });
    } finally {
      setProjectLoading(false);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const res = await deleteMessage(id);
      if (res.success) {
        setMessages(messages.filter((m) => m._id !== id));
      }
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  if (!isOpen) return null;

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
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Full-Stack Database Control Panel</h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Live REST API integration for Projects CRUD & Contact Submissions
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mt-5">
          <button
            onClick={() => setActiveTab('addProject')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'addProject'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Add Project (POST /api/projects)</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'messages'
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>View Inquiries ({messages.length})</span>
          </button>
        </div>

        {/* Tab 1: Add Project */}
        {activeTab === 'addProject' && (
          <div className="mt-6">
            {projectStatus.message && (
              <div
                className={`mb-4 p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                  projectStatus.type === 'success'
                    ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
                }`}
              >
                {projectStatus.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <span>{projectStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleCreateProject} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    placeholder="e.g. Distributed Task Scheduler"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Category *</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Full Stack (MERN)">Full Stack (MERN)</option>
                    <option value="Java & Spring Boot">Java & Spring Boot</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Subtitle / Tagline</label>
                <input
                  type="text"
                  value={projectForm.subtitle}
                  onChange={(e) => setProjectForm({ ...projectForm, subtitle: e.target.value })}
                  placeholder="e.g. Cloud-Native Job Scheduling Platform"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Brief description of the problem solved and core functionality..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Technologies (comma-separated)</label>
                  <input
                    type="text"
                    value={projectForm.technologies}
                    onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                    placeholder="Java, Spring Boot, React, MongoDB"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Badge (optional)</label>
                  <input
                    type="text"
                    value={projectForm.badge}
                    onChange={(e) => setProjectForm({ ...projectForm, badge: e.target.value })}
                    placeholder="e.g. Featured, Microservices"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Architecture Highlights (one per line)</label>
                <textarea
                  rows={2}
                  value={projectForm.highlights}
                  onChange={(e) => setProjectForm({ ...projectForm, highlights: e.target.value })}
                  placeholder="JWT authentication with role-based authorization&#10;Integrated Redis caching layer&#10;Automated unit tests with JUnit"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Live Demo URL</label>
                  <input
                    type="text"
                    value={projectForm.liveDemo}
                    onChange={(e) => setProjectForm({ ...projectForm, liveDemo: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">GitHub Repo URL</label>
                  <input
                    type="text"
                    value={projectForm.github}
                    onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={projectLoading}
                  className="w-full py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all disabled:opacity-50"
                >
                  {projectLoading ? 'Saving to Database...' : 'Save & Publish Project to Database'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: Received Inquiries */}
        {activeTab === 'messages' && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Messages stored via POST /api/contact</span>
              <button
                onClick={fetchInboxMessages}
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <RefreshCw className="w-3 h-3" /> Refresh
              </button>
            </div>

            {messagesLoading ? (
              <div className="text-center py-10 text-slate-400 text-sm">
                Loading messages from database...
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-12 rounded-2xl border border-dashed border-slate-800 text-slate-500 text-xs sm:text-sm">
                No messages yet. Send a test inquiry through the Contact section to see it appear here!
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 relative"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">{msg.name}</h4>
                        <span className="text-xs text-cyan-400 font-mono">{msg.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-500">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleDeleteMessage(msg._id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-900 transition-colors"
                          title="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {msg.subject && (
                      <p className="text-xs font-semibold text-slate-300">
                        Subject: {msg.subject}
                      </p>
                    )}

                    <p className="text-xs text-slate-400 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
