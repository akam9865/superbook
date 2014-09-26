Superbook.Views.BetNew = Backbone.CompositeView.extend({
  template: JST["bets/new"],
  
  
  render: function () {
    // this.$el.empty();

    var renderedContent = this.template({
      team: this.team
    });
    this.$el.html(renderedContent);
    return this;
  }
  

});