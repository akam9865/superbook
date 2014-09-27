Superbook.Models.Bet = Backbone.Model.extend({
  
  urlRoot: 'api/bets',
  
  initialize: function (options) {
    this.team = options.team,
    this.game = options.game
  },
  
  // startBet: function(options) {
  //   this.team = options.team,
  //   this.game = options.game
  //   this.trigger('bet-started');
  // },
  
});
// Superbook.Models.bet = new Superbook.Models.Bet({})