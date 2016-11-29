var ShoppingListApp = (function() {

  var api = {

    views: {},
    models: {},
    collections: {},
    content: null,
    router: null,
    items: null,
    init: function() {
      this.content = $('#shopping-list-content');
    },
    changeContent: function(element) {
      this.content.empty().append(element);
      return this;
    },
    title: function(newTitle) {
      $('#shopping-list-title').text(newTitle);
      return this;
    }
  };

  var ViewsFactory = {};
  var Router = Backbone.Router.extend({});

  api.router = new Router();

  return api;


})();
