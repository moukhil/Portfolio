const { getFallbackStore } = require('../config/db');
const { profileData, skillsData, educationData, experienceData, achievementsData } = require('../data/seedData');

// @desc    Get profile details, bio, education, experience, achievements
// @route   GET /api/profile
exports.getProfile = async (req, res) => {
  try {
    const store = getFallbackStore();
    const data = {
      profile: store.profile || profileData,
      education: store.education || educationData,
      experience: store.experience || experienceData,
      achievements: store.achievements || achievementsData
    };

    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('getProfile error:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving profile' });
  }
};

// @desc    Get skills matrix
// @route   GET /api/skills
exports.getSkills = async (req, res) => {
  try {
    const store = getFallbackStore();
    res.json({
      success: true,
      data: store.skills || skillsData
    });
  } catch (error) {
    console.error('getSkills error:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving skills' });
  }
};
