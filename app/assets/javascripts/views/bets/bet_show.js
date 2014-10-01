Superbook.Views.BetShow = Backbone.CompositeView.extend({
  template: JST["bets/show"],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'change:[result]', this.render);
  },
  
  events: {
    "click #simulator": "simGame"
  },
  
  simGame: function (event) {
    
    this.model.save();
  },
  
  render: function () {
    var renderedContent = this.template({
      bet: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});