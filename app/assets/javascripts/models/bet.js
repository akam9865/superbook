Superbook.Models.Bet = Backbone.Model.extend({
  
  urlRoot: 'api/bets',
  
  initialize: function (options) {
    this.team = options.team,
    this.game = options.game
  }
  
});