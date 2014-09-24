Superbook.Routers.Router = Backbone.Router.extend({
  routes: {
    "sports": "sportsIndex"
  },
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.sports  = options.sports;
  },
  
  sportsIndex: function () { 
    var indexView = new Superbook.Views.SportsIndex({
      collection: this.sports
    });
    this._swapView(indexView);
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
		this.$rootEl.html(view.render().$el);
  }
  
});