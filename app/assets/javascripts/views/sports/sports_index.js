Superbook.Views.SportsIndex = Backbone.CompositeView.extend({
  template: JST["sports/index"],
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    
    var gamesView = new Superbook.Views.GamesIndex({ collection: this.collection })
    this.addSubview(".games-index", gamesView);
  },
  
  render: function () {
    var renderedContent = this.template({
      sports: this.collection
    });
  
    this.$el.html(renderedContent);
    this.attachSubviews()
    
    return this;
  }
});