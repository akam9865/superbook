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
    "click .remove-bet": "removeBet"
  },
  
	submitBet: function (event) {
		event.preventDefault();

    debugger
	},
	
	removeBet: function (event) {
    // remove subview selector: '#bets-list subview: IDK
    this.removeSubview("#bets-list", this);
    Superbook.Collections.bets.remove(this.model);
    // find button and remove active class
    $(".btn.team." + this.model.attributes.team.id).removeClass("active");
	},
  
  render: function () {
		var renderedContent = this.template({ bet: this.model });
    this.$el.html(renderedContent);
    return this;
  }
  

});