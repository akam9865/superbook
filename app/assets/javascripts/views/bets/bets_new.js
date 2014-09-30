// Superbook.Views.BetNew = Backbone.CompositeView.extend({
//   template: JST["bets/new"],
//   promptTemplate: JST["bets/prompt"],
//   initialize: function () {
//     this.listenTo(this.model, 'sync bet-started', this.render);
//   },
//
//   render: function () {
//     if(this.model.team && this.model.game){
//       var content = this.template({
//         game: this.model
//       });
//     } else {
//       var content = this.promptTemplate();
//     }
//     this.$el.html(content);
//     return this;
//   }
//
//
// });

Superbook.Views.BetNew = Backbone.CompositeView.extend({
  template: JST["bets/new"],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

  },
  
  events: {
    "submit": "submitBet",
    "click .remove-bet": "removeBet",
    "keyup .bet-input": "keyupBet",
    "keyup #win-amount": "keyupWin"
  },
  
  keyupBet: function (event) {
    var odds = this.model.game.attributes.odds;
    var amt  = $(".bet-input").val();
    
    if (this.model.team == this.model.game.attributes.team1) {
      var winAmt = amt * odds / (1 - odds);
    } else {
      var winAmt = amt * (1 - odds) / odds;
    }
    
    $("#win-amount").val(winAmt.toFixed(2));
  },
  
  keyupWin: function (event) {
    var odds = this.model.game.attributes.odds;
    var amt  = $("#win-amount").val();
    
    if (this.model.team == this.model.game.attributes.team1) {
      var betAmt = amt * (1 - odds) / odds;
    } else {
      var betAmt = amt * odds / (1 - odds);
    }
    
    $(".bet-input").val(betAmt.toFixed(2));
  },
  
	submitBet: function (event) {
		event.preventDefault();
    var that   = this;
    var params = $(event.target).serializeJSON();
    var newBet = new Superbook.Models.Bet(params["bet"]);
    
    newBet.save({}, {
      success: function () {
        // add to some collection?
        // remove subview
        // remove class active
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