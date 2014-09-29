Superbook.Routers.Router = Backbone.Router.extend({
  routes: {
    "sports": "sportsIndex",
    "sports/:id": "sportShow",
    "users": "usersIndex",
    "users/:id": "userShow"
  },
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.sports  = options.sports;
  },
  
  sportsIndex: function () { 
    var indexView = new Superbook.Views.SportsIndex({
      collection: this.sports
    });
    
    $("#sports-index").html(indexView.render().$el);
  },
  
  sportShow: function (id) {
    var sport = this.sports.getOrFetch(id);
    var showView = new Superbook.Views.SportShow({ model: sport });
    this._swapView(showView);
  },
  
  userShow: function (id) {
    var user = new Superbook.Models.User({ id: id });
    user.fetch();
    var showView = new Superbook.Views.UserShow({ model: user });
    this._swapView(showView);
  },
  
  userIndex: function () {
    
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
		this.$rootEl.html(view.render().$el);
  }
  
});