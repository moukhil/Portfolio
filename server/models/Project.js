const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      required: true,
      enum: ['Full Stack (MERN)', 'Java & Spring Boot', 'Frontend', 'Other'],
      default: 'Full Stack (MERN)'
    },
    description: {
      type: String,
      required: true
    },
    highlights: [
      {
        type: String
      }
    ],
    technologies: [
      {
        type: String,
        required: true
      }
    ],
    liveDemo: {
      type: String,
      default: '#'
    },
    github: {
      type: String,
      default: '#'
    },
    featured: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);
