//const Backbone = require('backbone');
const Backbone = require('backbone');

const GroceryModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/groceries'
});

module.exports = GroceryModel;
