Superbook.Views.BetNew = Backbone.CompositeView.extend({
  template: JST["bets/new"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "submit": "submitBet",
    "click .remove-bet": "removeBet",
    "keyup .bet-input": "keyupBet",
    "keyup .win-input": "keyupWin",
    "click .max-button": "enterMax"
  },
  
  enterMax: function (event) {
    $(".bet-input." + this.model.game.attributes.id).val(5000.00);
    this.keyupBet(event)
  },
  
  keyupBet: function (event) {
    var odds = this.model.game.attributes.odds;

    var amt  = $(".bet-input." + this.model.game.attributes.id).val();

    if (this.model.team == this.model.game.attributes.team1) {
      var winAmt = amt * odds / (1 - odds);
    } else {
      var winAmt = amt * (1 - odds) / odds;
    }
    
    $(".win-input." + this.model.game.attributes.id).val(winAmt.toFixed(2));
  },
  
  keyupWin: function (event) {
    var odds = this.model.game.attributes.odds;
    var amt  = $(".win-input." + this.model.game.attributes.id).val();
    
    if (this.model.team == this.model.game.attributes.team1) {
      var betAmt = amt * (1 - odds) / odds;
    } else {
      var betAmt = amt * odds / (1 - odds);
    }
    
    $(".bet-input." + this.model.game.attributes.id).val(betAmt.toFixed(2));
  },
  
	submitBet: function (event) {
		event.preventDefault();

    var that   = this;
    var params = $(event.target).serializeJSON();
    var newBet = new Superbook.Models.Bet(params["bet"]);
    
    newBet.save({}, {
      success: function () {
        that.removeSubview("#bets-list", that);
        $(".btn.team." + that.model.attributes.team.id).removeClass("active");
        
      }
    });

	},
	
	removeBet: function (event) {
    // remove subview selector: '#bets-list subview: IDK
    
    
    this.removeSubview("#bets-list", this);
    Superbook.Collections.ticketBets.remove(this.model);
    // find button and remove active class
    $(".btn.team." + this.model.attributes.team.id).removeClass("active");
	},
  
  render: function () {
		var renderedContent = this.template({ bet: this.model });
    this.$el.html(renderedContent);
    return this;
  }
  

});