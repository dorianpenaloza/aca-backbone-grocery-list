const $ = require('jquery');
const GroceriesCollection = require('./collections/GroceriesCollection');
// Set jQuery in the window
window.$ = window.jQuery = $;

const GroceryListView = require('./views/GroceryListView');

const groceries = new GroceriesCollection();
groceries.fetch({
  success: () => {
    const view = new GroceryListView({ collection: groceries });
    const app = document.querySelector('#app');

    app.appendChild(view.render().el);
  }
 });
