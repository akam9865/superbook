Superbook.Views.SportsIndex = Backbone.CompositeView.extend({
  template: JST["sports/index"],
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    
    // var sport = new Superbook.Models.Sport();
    // var sportShow = new Superbook.Views.SportShow({ model: sport });
    // this.addSubview(".game-list", sportShow);
    // ADD DEFAULT GAMES LIST
    // var games = new Superbook.Collections.Games([], {});
    // var gamesView = new Superbook.Views.GamesIndex({ collection: games });
    // this.addSubview(".game-list", gamesView);
  },
  
  events: {
    // "click .sport-link": "renderSportGames",
    // "click .team-bet": "renderNewBet"
  },
  
  render: function () {
    var renderedContent = this.template({
      sports: this.collection
    });

    this.$el.html(renderedContent);
    // this.attachSubviews();

    return this;
  },
  
  // renderSportGames: function (event) {
  //   event.preventDefault();
  //
  //   var sport = this.collection.getOrFetch($(event.currentTarget).data('id'));
  //
  //   // var sport = this.collection.find(function (model){
  //   //   return model.get('id') == $(event.currentTarget).data('id')
  //   // });
  //
  //   var sportShow = new Superbook.Views.SportShow({ model: sport });
  //
  //   // var gamesView = new Superbook.Views.GamesIndex({ collection: games });
  //
  //   // check if there's already a view, then call removeSubview on it
  //   var oldView = this.subviews('.game-list')[0];
  //   oldView && this.removeSubview('.game-list', oldView);
  //
  //   this.addSubview(".game-list", sportShow);
  // },
  
  // renderNewBet: function (event) {
  //   event.preventDefault();
  //
  //   var gameId = $(event.currentTarget).data('game-id')
  //   var teamId = $(event.currentTarget).data('team-id')
  //
  //   var game = this
  //
  //   var bet = new Superbook.Models.Bet({
  //
  //   })
  //
  //   var newBetView = new Superbook.Views.BetNew();
  //   this.addSubview(".bets-list", newBetView);
  // }
  
});