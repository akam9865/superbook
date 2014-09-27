window.Superbook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    this.$el    = $("#main");
    this.sports = Superbook.Collections.sports;
    this.bets   = Superbook.Collections.bets;
    // Superbook.Collections.sports.fetch();
    this.sports.fetch();
    
    var router = new Superbook.Routers.Router({
      $rootEl: this.$el,
      sports: this.sports
    });
    // Superbook.createBetView();
    Superbook.setUp(this.bets, this.sports)
    Backbone.history.start();
  },
  
  setUp: function (bets, sports) {
    var betsIndex   = new Superbook.Views.BetsIndex({ collection: bets });
    var sportsIndex = new Superbook.Views.SportsIndex({ collection: sports });
    
    $("#sports-index").html(sportsIndex.render().$el);
    $("#bets-index").html(betsIndex.render().$el);
  },
  
  createBetView: function(){
    var betView = new Superbook.Views.BetNew({model: Superbook.Models.bet});
    $('.bets').html(betView.render().$el);
  }
};

// 
// COMPOSITE VIEW EXTENSION
// 

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);

    this.attachSubview(selector, subview.render());
  },
  
  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);

    subview.delegateEvents();
  },
  
  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  },
  
  attachSubviews: function () {
    var view = this;
    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },
  
  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) { subview.remove(); });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  }
});