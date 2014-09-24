window.Superbook.Collections.Sports = Backbone.Collection.extend({
  model: Superbook.Models.Sport,
  url: 'api/sports'
});

Superbook.Collections.sports = new Superbook.Collections.Sports();
