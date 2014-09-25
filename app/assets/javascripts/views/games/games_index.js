Superbook.Views.GamesIndex = Backbone.CompositeView.extend({
  template: JST["games/index"],
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function () {
    var renderedContent = this.template({
      games: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});