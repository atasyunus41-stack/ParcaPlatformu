const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user'
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  phone: String,
  address: String,
  city: String,
  profileImage: String,
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  }],
  listings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);