Superbook.Views.GameShow = Backbone.CompositeView.extend({
  template: JST["games/show"],

  events: {
    "click #team-1": "betTeam1",
    "click #team-2": "betTeam2"
  },
  
  addBet: function (team, odds) {
    var newBet = new Superbook.Models.Bet({
      team: team,
      game: this.model,
			odds: odds
    });
    Superbook.Collections.bets.add(newBet);
  },
  
  betTeam1: function(event){
    event.preventDefault();
		$(event.currentTarget).addClass("active");
    this.addBet(this.model.attributes.team1, this.model.renderOdds[0]);
  },
  
  betTeam2: function(event){
    event.preventDefault();
		$(event.currentTarget).addClass("active");
    this.addBet(this.model.attributes.team2, this.model.renderOdds[1]);    
  },
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
		this.model["renderOdds"] = this.calculateOdds(this.model.attributes.odds);
  },
	
	calculateOdds: function (rawOdds) {
		// rawOdds should be a real number between 0 and 1
		
		var multiplier = (1 - rawOdds) / rawOdds;
		
		if (multiplier < 1) {
			var teamOneOdds = ["+", Math.floor(1 / multiplier * 100 + 0.5)];
			var teamTwoOdds = ["-", Math.floor(1 / multiplier * 100 + 0.5)];
		} else {
			var teamOneOdds = ["-", Math.floor(multiplier * 100 + 0.5)];
			var teamTwoOdds = ["+", Math.floor(multiplier * 100 + 0.5)];
		}
    
    // if (multiplier < 1) {
    //   var teamOneOdds = "+" + Math.floor(1 / multiplier * 100 + 0.5);
    //   var teamTwoOdds = "-" + Math.floor(1 / multiplier * 100 + 0.5);
    // } else {
    //   var teamOneOdds = "-" + Math.floor(multiplier * 100 + 0.5);
    //   var teamTwoOdds = "+" + Math.floor(multiplier * 100 + 0.5);
    // }
		
		return [teamOneOdds, teamTwoOdds];
	},
  
  render: function () {
    var renderedContent = this.template({
      game: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});