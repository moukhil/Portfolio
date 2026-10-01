const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { initialProjects, profileData, skillsData, educationData, experienceData, achievementsData } = require('../data/seedData');

const STORE_PATH = path.join(__dirname, '..', 'data', 'store.json');

// Memory/File DB Fallback helper
function getFallbackStore() {
  try {
    if (fs.existsSync(STORE_PATH)) {
      const data = fs.readFileSync(STORE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading fallback store:', err.message);
  }

  // Initial seed structure
  const store = {
    profile: profileData,
    skills: skillsData,
    education: educationData,
    experience: experienceData,
    achievements: achievementsData,
    projects: initialProjects.map((p, idx) => ({
      ...p,
      _id: `proj_${Date.now()}_${idx}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })),
    messages: []
  };

  saveFallbackStore(store);
  return store;
}

function saveFallbackStore(store) {
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving fallback store:', err.message);
  }
}

let isMongoConnected = false;

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.log('⚡ No MONGODB_URI provided in environment. Running in resilient Local/JSON Store mode.');
    getFallbackStore(); // ensure seeded
    return false;
  }

  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });
    isMongoConnected = true;
    console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);

    // Check if projects collection is empty, then seed
    const Project = require('../models/Project');
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('🌱 Seeding initial projects to MongoDB...');
      await Project.insertMany(initialProjects);
      console.log('✅ MongoDB initial seeding completed.');
    }

    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB connection failed (${error.message}). Falling back to Local/JSON Store mode.`);
    isMongoConnected = false;
    getFallbackStore();
    return false;
  }
};

module.exports = {
  connectDB,
  isMongo: () => isMongoConnected,
  getFallbackStore,
  saveFallbackStore
};
