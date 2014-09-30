Superbook.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],
  
  initialize: function () {
    this.collection = this.model.bets();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBet.bind(this));
    
    this.collection.each(this.addBet.bind(this));
  },
  
  addBet: function (bet) {
    var betShow = new Superbook.Views.BetShow({ model: bet });
    this.addSubview("#bets-list", betShow);
  },
  
  render: function () {
    var renderedContent = this.template({
      user: this.model
    });
    
    
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});