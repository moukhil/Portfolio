const Message = require('../models/Message');
const { isMongo, getFallbackStore, saveFallbackStore } = require('../config/db');

// @desc    Submit a contact form message
// @route   POST /api/contact
exports.submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message content'
      });
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const messageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    if (isMongo()) {
      const saved = await Message.create(messageData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
        data: saved
      });
    }

    const store = getFallbackStore();
    if (!store.messages) store.messages = [];
    const savedFallback = {
      ...messageData,
      _id: `msg_${Date.now()}`,
      read: false
    };
    store.messages.unshift(savedFallback);
    saveFallbackStore(store);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: savedFallback
    });
  } catch (error) {
    console.error('submitContactMessage error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error sending your message. Please try again or reach out directly via email.',
      error: error.message
    });
  }
};

// @desc    Get all messages (for admin review)
// @route   GET /api/contact
exports.getAllMessages = async (req, res) => {
  try {
    if (isMongo()) {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    }

    const store = getFallbackStore();
    return res.json({ success: true, count: (store.messages || []).length, data: store.messages || [] });
  } catch (error) {
    console.error('getAllMessages error:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving messages' });
  }
};

// @desc    Delete a message
// @route   DELETE /api/contact/:id
exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (isMongo()) {
      await Message.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Message deleted' });
    }

    const store = getFallbackStore();
    store.messages = (store.messages || []).filter(m => m._id !== id);
    saveFallbackStore(store);

    return res.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    console.error('deleteMessage error:', error);
    res.status(500).json({ success: false, message: 'Server error deleting message' });
  }
};
