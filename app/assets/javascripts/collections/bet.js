window.Superbook.Collections.Bets = Backbone.Collection.extend({
  model: Superbook.Models.Bet,
  url: 'api/bets'
});

Superbook.Collections.bets = new Superbook.Collections.Bets();