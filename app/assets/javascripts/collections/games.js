window.Superbook.Collections.Games = Backbone.Collection.extend({
  model: Superbook.Models.Game,
  url: 'api/games',
  
  initialize: function (models, options) {
    this.sport = options.sport;
  }
  
  
});
