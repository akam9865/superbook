Superbook.Views.GameShow = Backbone.CompositeView.extend({
  template: JST["games/show"],
  
  events: {
    "click .team-bet": "addBet"
  },
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  
  render: function () {
    // this.$el.empty();
    var renderedContent = this.template({
      game: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});