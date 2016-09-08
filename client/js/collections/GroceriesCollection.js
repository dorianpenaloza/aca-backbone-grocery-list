const Backbone = require('backbone');
const GroceryModel = require('../models/GroceryModel');

const GroceriesCollection = Backbone.Collection.extend({
  url: '/groceries',
  model: GroceryModel
});

module.exports = GroceriesCollection;
