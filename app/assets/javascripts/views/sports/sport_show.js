Superbook.Views.SportShow = Backbone.CompositeView.extend({
  template: JST["sports/show"],
  
  initialize: function () {
    this.collection = this.model.games();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGame.bind(this));
    this.collection.each(this.addGame.bind(this));
  },
  
  addGame: function (game) {
    var gameShow = new Superbook.Views.GameShow({ model: game });
    this.addSubview(".games-show-list", gameShow);
  },
  
  render: function () {    
    var renderedContent = this.template({
      sport: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
  

});