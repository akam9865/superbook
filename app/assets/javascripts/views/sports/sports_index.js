Superbook.Views.SportsIndex = Backbone.View.extend({
  template: JST["sports/index"],
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function () {
    console.log(this.collection)
    var renderedContent = this.template({ sports: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});