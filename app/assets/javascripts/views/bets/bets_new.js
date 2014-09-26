Superbook.Views.BetNew = Backbone.CompositeView.extend({
  template: JST["bets/new"],
  
  
  render: function () {
    // this.$el.empty();
    
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
  

});