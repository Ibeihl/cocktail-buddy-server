'use strict';

const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    method: { type: String, required: true },
    eggWhite: { type: Boolean, required: true },
    ingredients: [String],
    glass: String,
    instructions: String
});

drinkSchema.set('toObject', {
    virtuals: true,     // include built-in virtual `id`
    versionKey: false,  // remove `__v` version key
    transform: (doc, ret) => {
      delete ret._id; // delete `_id`
    }
  });

  module.exports = mongoose.model('Drink', drinkSchema);