const express = require('express');
const router = express.Router();

const {
  getProjects,
  getProjectById,
  createProject,
  deleteProject
} = require('../controllers/projectController');

const {
  submitContactMessage,
  getAllMessages,
  deleteMessage
} = require('../controllers/contactController');

const {
  getProfile,
  getSkills
} = require('../controllers/profileController');

// Profile & Skills
router.get('/profile', getProfile);
router.get('/skills', getSkills);

// Projects (Full CRUD)
router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
router.post('/projects', createProject);
router.delete('/projects/:id', deleteProject);

// Contact Messages
router.post('/contact', submitContactMessage);
router.get('/contact', getAllMessages);
router.delete('/contact/:id', deleteMessage);

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Shaik Moukhil Portfolio API'
  });
});

module.exports = router;
