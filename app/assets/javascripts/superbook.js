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
  // addSubview: function (selector, view) {
  //   var selectorSubviews =
  //     this.subviews()[selector] || (this.subviews()[selector] = []);
  //
  //     selectorSubviews.push(view)
  // },
  
  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);

    this.attachSubview(selector, subview.render());
  },
  
  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);

    subview.delegateEvents();
  },
  
  // renderSubviews: function() {
  //   var that = this;
  //   _(this.subviews()).each(function (selectorSubviews, selector) {
  //     var $selectorEl = view.$(selector);
  //     $selectorEl.empty();
  //     _(selectorSubviews).each(function (subview) {
  //       $selectorEl.append(subview.render().$el);
  //       subview.delegateEvents();
  //     });
  //   });
  // },
  
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
    // I decided I didn't want a function that renders ALL the
    // subviews together. Instead, I think:
    //
    // * The user of CompositeView should explicitly render the
    //   subview themself when they build the subview object.
    // * The subview should listenTo relevant events and re-render
    //   itself.
    //
    // All that is necessary is "attaching" the subview `$el`s to the
    // relevant points in the parent CompositeView.

    var view = this;
    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },
  
  
  // subviews: function (){
  //   if (!this._subviews) {
  //     this._subviews = {};
  //   }
  //   return this._subviews;
  // }
});