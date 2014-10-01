window.Superbook.Collections.Bets = Backbone.Collection.extend({
  model: Superbook.Models.Bet,
  url: 'api/bets',
  
  // initialize: function (options) {
  //   this.user = options.user
  // }
});

Superbook.Collections.ticketBets = new Superbook.Collections.Bets();