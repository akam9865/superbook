Superbook.Models.Sport = Backbone.Model.extend({
  urlRoot: 'api/sports',
  

  games: function () {
    if (!this._games) {
      this._games = new Superbook.Collections.Games([], { sport: this });
    }
    return this._games;
  },
  
  parse: function (response) {
    
    if (response.games) {
      this.games().set(response.games, { parse: true });
      delete response.games;
    }

    return response;
  }
  
});