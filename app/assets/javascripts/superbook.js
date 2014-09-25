window.Superbook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    this.$el    = $("#main");
    this.sports = Superbook.Collections.sports;
    
    // Superbook.Collections.sports.fetch();
    this.sports.fetch();
    
    var router = new Superbook.Routers.Router({
      $rootEl: this.$el,
      sports: this.sports
    });
    
    Backbone.history.start();
  }
};

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
  },
  
  resetSubview: function (selector) {
    var subviews = this.subviews();
    delete subviews[selector];
  }
});