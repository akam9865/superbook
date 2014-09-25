Superbook.Views.SportsIndex = Backbone.CompositeView.extend({
  template: JST["sports/index"],
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    // var gamesView = new Superbook.Views.GamesIndex({ collection: this.collection });
    // this.addSubview(".games-index", gamesView);
    // ADD DEFAULT GAMES LIST
  },
  
  events: {
    "click .sport-link": "renderSportGames"
  },
  
  render: function () {
    var renderedContent = this.template({
      sports: this.collection
    });

    this.$el.html(renderedContent);
    this.attachSubviews();
    
    return this;
  },
  
  renderSportGames: function (event) {
    event.preventDefault();
    
    // this.resetSubview(".games-index");
    
    // var games = this.collection.models[event.currentTarget.id - 1].games();
    var games = this.collection.find(function (model){
      return model.get('id') == $(event.currentTarget).data('id')
    }).games();

    var gamesView = new Superbook.Views.GamesIndex({ collection: games });
    
    // check if there's already a view, then call removeSubview on it
    var oldView = this.subviews('.games-index')[0]
    oldView && this.removeSubview('.games-index', oldView);

    this.addSubview(".games-index", gamesView);
  }
  
});