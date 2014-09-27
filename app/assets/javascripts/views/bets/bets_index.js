Superbook.Views.BetsIndex = Backbone.CompositeView.extend({
  template: JST["bets/index"],
  
  initialize: function () {
    // this.listenTo(this.collection, 'add sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
    // new method to add subview for new bets
    this.listenTo(this.collection, 'add', this.addNewBet)
  },
  
  events: {

  },
  
  render: function () {
    var renderedContent = this.template({
      bets: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
});