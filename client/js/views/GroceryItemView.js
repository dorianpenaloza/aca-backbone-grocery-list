const _ = require('lodash');
const Backbone = require('backbone');

const GroceryItemView = Backbone.View.extend({

  el: '<li></li>',

  template: _.template(`
    <div>Name: <%= grocery.text %></div>
    <div>Amount: <%= grocery.number %></div>
  `),

  render() {
    this.$el.append(this.template({ grocery: this.model }));
    return this;
  }
});

module.exports = GroceryItemView;
