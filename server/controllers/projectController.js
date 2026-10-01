const Project = require('../models/Project');
const { isMongo, getFallbackStore, saveFallbackStore } = require('../config/db');

// @desc    Get all projects
// @route   GET /api/projects
exports.getProjects = async (req, res) => {
  try {
    const { category } = req.query;

    if (isMongo()) {
      const filter = category && category !== 'All' ? { category } : {};
      const projects = await Project.find(filter).sort({ createdAt: -1 });
      return res.json({ success: true, count: projects.length, data: projects });
    }

    // Fallback store
    const store = getFallbackStore();
    let projects = store.projects || [];
    if (category && category !== 'All') {
      projects = projects.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
    }
    return res.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    console.error('getProjects error:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving projects', error: error.message });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongo()) {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.json({ success: true, data: project });
    }

    const store = getFallbackStore();
    const project = store.projects.find(p => p._id === id || p.id === id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    return res.json({ success: true, data: project });
  } catch (error) {
    console.error('getProjectById error:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving project' });
  }
};

// @desc    Create new project
// @route   POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const { title, subtitle, category, description, highlights, technologies, liveDemo, github, badge, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' });
    }

    const techArray = Array.isArray(technologies)
      ? technologies
      : (technologies || '').split(',').map(t => t.trim()).filter(Boolean);

    const highlightsArray = Array.isArray(highlights)
      ? highlights
      : (highlights || '').split('\n').map(h => h.trim()).filter(Boolean);

    const newProjectData = {
      title,
      subtitle: subtitle || '',
      category: category || 'Full Stack (MERN)',
      description,
      highlights: highlightsArray,
      technologies: techArray.length > 0 ? techArray : ['Full Stack'],
      liveDemo: liveDemo || '#',
      github: github || '#',
      badge: badge || 'New Project',
      image: image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      featured: true
    };

    if (isMongo()) {
      const project = await Project.create(newProjectData);
      return res.status(201).json({ success: true, message: 'Project created successfully', data: project });
    }

    const store = getFallbackStore();
    const fallbackProject = {
      ...newProjectData,
      _id: `proj_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    store.projects.unshift(fallbackProject);
    saveFallbackStore(store);

    return res.status(201).json({ success: true, message: 'Project created successfully', data: fallbackProject });
  } catch (error) {
    console.error('createProject error:', error);
    res.status(500).json({ success: false, message: 'Server error creating project', error: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongo()) {
      const project = await Project.findByIdAndDelete(id);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.json({ success: true, message: 'Project deleted successfully' });
    }

    const store = getFallbackStore();
    const index = store.projects.findIndex(p => p._id === id || p.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    store.projects.splice(index, 1);
    saveFallbackStore(store);

    return res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('deleteProject error:', error);
    res.status(500).json({ success: false, message: 'Server error deleting project' });
  }
};
