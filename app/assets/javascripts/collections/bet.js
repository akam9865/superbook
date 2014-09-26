window.Superbook.Collections.Bets = Backbone.Collection.extend({
  model: Superbook.Models.Bet,
  url: 'api/bets',
  
  initialize: function (models, options) {
    this.game = options.game,
    this.team = options.team
  }
  
  
});
