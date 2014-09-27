Superbook.Views.BetNew = Backbone.CompositeView.extend({
  template: JST["bets/new"],
  promptTemplate: JST["bets/prompt"],
  initialize: function () {
    this.listenTo(this.model, 'sync bet-started', this.render);
  },
  
  render: function () {
    if(this.model.team && this.model.game){
      var content = this.template({
        game: this.model
      });
    } else {
      var content = this.promptTemplate();
    }
    this.$el.html(content);
    return this;
  }
  

});