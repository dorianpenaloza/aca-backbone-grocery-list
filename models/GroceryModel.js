const mongoose = require('mongoose');

const grocerySchema  = mongoose.Schema({ //Makes a new instance of 'Schema'
  text: { type: String, required: true },
  number: { type: Number, required: true }
});

module.exports = mongoose.model('Grocery', grocerySchema); //Tells 'mongoose' that we want to register a new model. It's a 'Grocery' model and it has this schema: 'grocerySchema'.
