const Backbone = require('backbone');
const GroceryItemView = require('./GroceryItemView');
const GroceriesCollection = require('../collections/GroceriesCollection');

const GroceryListView = Backbone.View.extend({
  el: `
      <div>
        <form>
          <input type="text" name="text" placeholder="Item">
          <input type="number" name="number" placeholder="Amount">
          <input type="submit" value="Submit">
        </form>
        <ul></ul>
      </div>
      `,

  events: {
    'submit form': 'handleFormSubmit'
  },

  handleFormSubmit(e) {
    e.preventDefault();

    const form = $(e.target);
    const grocery = {
      text: form.find('input[name="text"]').val(),
      number: form.find('input[name="number"]').val()
    },

    this.groceries.push(grocery);
    this.render();
  },

  render() {
    this.$el.find('ul').html('');
    this.collection.forEach((grocery) => {
      const view = new GroceryItemView({ model: grocery })
      this.$el.find('ul').append( view.render().el )
    });

    return this;
  }

});

module.exports = GroceryListView;
