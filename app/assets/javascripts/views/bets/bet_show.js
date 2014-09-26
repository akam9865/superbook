Superbook.Views.BetShow = Backbone.CompositeView.extend({
  template: JST["bets/show"],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

  },
  
  render: function () {
    // this.$el.empty();
    
    var renderedContent = this.template({
      bet: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
  

});