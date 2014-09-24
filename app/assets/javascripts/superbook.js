window.Superbook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    this.$el    = $("#main");
    Superbook.Collections.sports.fetch();
    this.sports = Superbook.Collections.sports
    var router = new Superbook.Routers.Router({
      $rootEl: this.$el,
      sports: this.sports
    });
    Backbone.history.start();
  }
}