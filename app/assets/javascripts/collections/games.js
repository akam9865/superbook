window.Superbook.Collections.Games = Backbone.Collection.extend({
  model: Superbook.Models.Game,
  url: 'api/games',
  
  initialize: function (models, options) {
    this.sport = options.sport;
  },
  
  getOrFetch: function (id) {
    var game = this.get(id);

    if(!game) {
      game = new TrelloClone.Models.Game({ id: id });
      game.fetch({
        success: function () {
          this.add(game);
        }.bind(this)
      });
    } else {
      game.fetch();
    }

    return game;
  }
  
  
});
