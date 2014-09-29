// Superbook.Views.BetsIndex = Backbone.CompositeView.extend({
//   template: JST["bets/index"],
//
//   initialize: function () {
//     // this.listenTo(this.collection, 'add sync', this.render);
//     this.listenTo(this.collection, 'sync', this.render);
//     // new method to add subview for new bets
//     this.listenTo(this.collection, 'add', this.addNewBet)
//   },
//
//   events: {
//
//   },
//
//   render: function () {
//     var renderedContent = this.template({
//       bets: this.collection
//     });
//
//     this.$el.html(renderedContent);
//     return this;
//   }
// });

Superbook.Views.BetsIndex = Backbone.CompositeView.extend({
  template: JST["bets/index"],
  
  initialize: function () {
    // this.listenTo(this.collection, 'add sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
    // new method to add subview for new bets
    this.listenTo(this.collection, 'add', this.addNewBet)
  },
  
  events: {
		"click .remove-bet": "removeBet",
		"submit": "submitBet"
  },
	
	submitBet: function (event) {
		event.preventDefault();
		debugger
	},
	
	removeBet: function (event) {
		debugger
	},
	
	addNewBet: function () {
		// add subview for new bet 
		var bet = this.collection.last();

		var newBetView = new Superbook.Views.BetNew({
			model: bet
		});
		
		this.addSubview("#bets-list", newBetView);
	},
  
  render: function () {
    var renderedContent = this.template({
      bets: this.collection
    });

    this.$el.html(renderedContent);
	  this.attachSubviews();
    return this;
  }
});