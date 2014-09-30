Superbook.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',
  
  bets: function () {
    if (!this._bets) {
      this._bets = new Superbook.Collections.Bets([], { user: this });
    }
    return this._bets;
  },

  parse: function (response) {

    if (response.bets) {
      this.bets().set(response.bets, { parse: true });
      delete response.bets;
    }

    return response;
  }
});