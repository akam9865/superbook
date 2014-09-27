Superbook.Views.SportShow = Backbone.CompositeView.extend({
  template: JST["sports/show"],
  
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.model.games().each(this.addGame.bind(this));
  },
  
  // 1) click handler on team links
  // 2) add bet subview
  // 3) listen to add?
  
 
  
  addGame: function (game) {
    var gameShow = new Superbook.Views.GameShow({ model: game });

    this.addSubview(".games-show-list", gameShow);
  },
  
  render: function () {
    // this.$el.empty();
    
    var renderedContent = this.template({
      sport: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
  

});