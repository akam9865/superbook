window.Superbook.Collections.Sports = Backbone.Collection.extend({
  model: Superbook.Models.Sport,
  url: 'api/sports',
  
  getOrFetch: function (id) {
    var sport = this.get(id);

    if(!sport) {
      sport = new Superbook.Models.Sport({ id: id });
      sport.fetch({
        success: function () {
          this.add(sport);
        }.bind(this)
      });
    } else {
      sport.fetch();
    }

    return sport;
  }
});

Superbook.Collections.sports = new Superbook.Collections.Sports();
