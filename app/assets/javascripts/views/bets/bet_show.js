Superbook.Views.BetShow = Backbone.CompositeView.extend({
  template: JST["bets/show"],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    
  },
  
  render: function () {
    var renderedContent = this.template({
      bet: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});