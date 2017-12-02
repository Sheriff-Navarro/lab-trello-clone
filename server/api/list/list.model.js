'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  // Lesson 2: Implement the List Model
  title: {
    type:
    String,
    require: true
  },
  position: {
    type:
    Number,
    require: true,
    default: 0
  },
  cards: {
  type: Array,
  'default': [],
  require: true
  }
}, {
  timestamps:{
    createdAt: "created_at",
    updatedAt:
    "updated_at"
  }
}

);

module.exports = mongoose.model('List', listSchema);
