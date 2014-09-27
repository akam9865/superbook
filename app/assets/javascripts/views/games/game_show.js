Superbook.Views.GameShow = Backbone.CompositeView.extend({
  template: JST["games/show"],

  events: {
    "click .team-1": "betTeam1",
    "click .team-2": "betTeam2"
  },
  
  addBet: function (team) {
    // do something to global bet
    // Superbook.Models.bet.startBet({team: team, game: this.model});
    var that = this;
    // Superbook.Collections.bets.adds
    var newBet = new Superbook.Models.Bet({
      team: team,
      game: that.model
    })
    Superbook.Collections.bets.add(newBet)
  },
  
  betTeam1: function(event){
    event.preventDefault();
    this.addBet(this.model.attributes.team1);
  },
  
  betTeam2: function(event){
    event.preventDefault();
    this.addBet(this.model.attributes.team2);    
  },
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  
  render: function () {
    var renderedContent = this.template({
      game: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});