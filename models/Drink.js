const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
  name: String,
  cost: String,
  inStock: Boolean,
  hasItCaffeine: String,
  volume: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Drink' , drinkSchema)