window.Superbook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    this.$el    = $("#main");
    this.sports = Superbook.Collections.sports
    
    Superbook.Collections.sports.fetch();
    
    var router = new Superbook.Routers.Router({
      $rootEl: this.$el,
      sports: this.sports
    });
    
    Backbone.history.start();
  }
}